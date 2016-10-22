/*global angular:false */
(function (angular) {
    "use strict";
    angular.module('gistModule', [])
        .controller('gistCtrl',
        function ($scope, $location, $rootScope, userService, gists, gistService) {
            $scope.data = {
                username: $rootScope.user.username,
                newGist: {'public': true},
                addGist : false
            };

            $scope.logout = function () {
                if (userService.logout()) {
                    $location.path('/login');
                }
            };

            $scope.browse = function () {
                if ($scope.data.username) {

                    gistService.gists($scope.data.username).then(
                        function (gists) {
                            $scope.data.gists = gists;
                        }, function (err) {
                            $scope.data.gists = [];
                            $scope.data.error = 'Gists ' + err.message + ' for ' + $scope.data.username;
                        });
                }
            };

            $scope.update = function (gist) {
                if (angular.equals(gist.owner.id, $rootScope.user.id)) {
                    var gistForUpdate = gistService.transformForUpdate(gist);

                    gistService.update(gist.id, gistForUpdate).then(
                        function (d) {
                            gist = d;
                        },
                        function (e) {
                            $scope.data.error = "Could not update gist";
                        }
                    );
                }
            };

            $scope.star = function (id) {
                gistService.star(id).then(function (res) {
                }, function (e) {
                });
            };

            $scope.unstar = function (id) {
                gistService.unstar(id);
            };

            $scope.cancelNew = function() {
                $scope.data.newGist = {'public': true};
                $scope.data.addGist = false;
            };

            $scope.create = function () {
                var gist = angular.copy($scope.data.newGist);
                var newGistObject = {
                    'description': gist.description,
                    'files': {},
                    'public': gist.public
                };

                newGistObject.files[gist.filename] = {
                    'content': '//Created by ' + $rootScope.user.username
                };

                gistService.create(newGistObject).then(function (data) {
                    $scope.data.gists.push(data);
                    $scope.cancelNew();
                }, function (e) {
                    $scope.data.error = 'Could no save new gist' + e.data;
                });
            };

            $scope.deleteGist = function(id) {
                gistService.deleteGist(id).then(
                    function(data) {
                        var tmpGists = angular.copy($scope.data.gists),
                            counter = 0;

                        angular.forEach($scope.data.gists, function(g) {
                           if(angular.equals(id, g.id)) {
                                tmpGists.splice(counter, 1);
                           }
                            counter++;
                        });

                        $scope.data.gists = tmpGists;
                    },
                    function(error) {
                        $scope.data.error = 'Could not delete gist';
                    }
                );
            };

            $scope.data.gists = gists;
        }
    )
        .factory('gistService',
        function ($q, $rootScope, $log, userService, Restangular) {
            var getUsersGists = function (username) {
                    var defer = $q.defer();

                    Restangular.one('users', username).getList('gists')
                        .then(
                        function (gistsData) {
                            defer.resolve(gistsData);
                        },
                        function (error) {
                            defer.reject(error);
                        }
                    );

                    return defer.promise;
                },
                getGistById = function (gists) {
                    var defer = $q.defer(),
                        gistsWithContent = [];
                    angular.forEach(gists, function (gist) {

                        Restangular.one('gists', gist.id).get()
                            .then(
                            function (gist) {
                                gistsWithContent.push(gist);
                            },
                            function (error) {
                                $log.error("Gist by id", error);
                            }
                        );
                    });


                    defer.resolve(gistsWithContent);
                    return defer.promise;
                },
                errorHandler = function (err) {
                    return $q.reject(err.data);
                },
                createFilesJSON = function (gist) {
                    var updatedFiles = {};
                    angular.forEach(gist.files, function (file) {
                        updatedFiles[file.filename] = {'content': file.content};
                    });
                    return updatedFiles;
                };

            return {
                gists: function (username) {
                    return getUsersGists(username).then(getGistById, errorHandler);
                },
                update: function (id, updatedGist) {
                    var gist = Restangular.one('gists', id);
                    return gist.patch(updatedGist);
                },
                star: function (id) {
                    var gist = Restangular.one('gists', id).one('star');
                    return gist.put();
                },
                unstar: function (id) {
                    var gist = Restangular.one('gists', id).one('star');
                    return gist.remove();
                },
                create: function (gist) {
                    return Restangular.all('gists').post(JSON.stringify(gist));
                },
                deleteGist: function (id) {
                    var gistRest = Restangular.one('gists', id);
                    return gistRest.remove();
                },
                transformForUpdate: function (gist) {
                    var updatedFiles = createFilesJSON(gist);

                    return {
                        description: gist.description,
                        files: updatedFiles
                    };
                }
            };
        }
    )
        .directive('hsGist', function () {
            return {
                restrict: 'E',
                transclude: true,
                replace: true,
                scope: {
                    user: '=',
                    id: '='
                },
                templateUrl: 'gist/gist-tab.tpl.html',
                controller: function ($scope) {
                    var panes = $scope.panes = [];

                    $scope.select = function (pane) {
                        angular.forEach(panes, function (pane) {
                            pane.selected = false;
                        });
                        pane.selected = true;
                    };

                    this.addPane = function (pane) {
                        if (panes.length === 0) {
                            $scope.select(pane);
                        }
                        panes.push(pane);

                    };
                }
            };
        })
        .directive('hsGistFilePane', function () {
            return {
                require: '^hs-gist',
                restrict: 'E',
                replace: true,
                transclude: true,
                scope: {
                    title: '='
                },
                templateUrl: 'gist/gist-pane.tpl.html',
                link: function ($scope, element, attrs, gistCtrl) {
                    gistCtrl.addPane($scope);
                }
            };
        })
        .directive('hsGistContent', function () {
            var handleMouseEvent = function (element) {
                element.onmouseup = function () {
                    element.onmouseup = null;
                    return false;
                };
            };

            return {
                restrict: 'A',
                link: function ($scope, elem, attrs) {
                    var textarea = elem[0],
                        orgHeight,
                        ngTextarea = angular.element(textarea);

                    ngTextarea.on("focus", function (e) {
                        var target = e.target;
                        orgHeight = target.clientHeight + 'px';
                        target.style.height = target.scrollHeight + 'px';

                        target.select();
                        handleMouseEvent(target);

                    });
                    // reset to org height with a default value
                    ngTextarea.on('blur', function (e) {
                        e.target.style.height = orgHeight || '100px';
                    });
                }
            };
        })
        .directive('hsCreateGist', function () {
            return {
                replace: true,
                restrict: 'E',
                scope: {
                    gist: '=',
                    cancelNew: '&',
                    create: '&',
                    display: '='
                },
                templateUrl: 'gist/create.tpl.html'
            };

        })
        .directive('hsAddFile', function($rootScope) {
            return {
                replace: true,
                restrict: 'E',
                scope: {
                    gist: '=',
                    update: '&'
                },
                templateUrl: 'gist/addFile.tpl.html',
                controller: function($scope) {
                    $scope.addFile = function() {
                        if($scope.filename) {
                            $scope.gist.files[$scope.filename] = {
                                'content' : '//Created by ' + $rootScope.user.username,
                                'filename': $scope.filename
                            };
                            $scope.update($scope.gist);
                        }
                        $scope.gist.addFile = undefined;
                        $scope.filename = undefined;
                    };
                }
            };
        });
})(angular);