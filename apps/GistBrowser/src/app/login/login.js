/*global angular:false */
(function (angular) {
    "use strict";
    angular.module('credModule', []).
        controller('loginCtrl', function ($scope, $location, userService) {
            $scope.credentials = {};

            $scope.auth = function () {
                $scope.error = undefined;

                userService.login($scope.credentials).then(function (res) {
                    if (res) {
                        $location.path("/gists");
                    } else {
                        $scope.error = "Wrong username and/or password";
                    }
                });
            };
        })
        .factory('userService', function ($http, $q, $location, $rootScope) {
            $rootScope.user = {};

            return {
                login: function (cred) {
                    var defer = $q.defer(),
                        loginHeader = 'Basic ' + btoa(cred.id + ':' + cred.sec); //Encode

                    $http({method: 'POST', url: 'https://api.github.com/user', data: {}, headers: {
                        'Authorization': loginHeader,
                        'Content-Type': 'application/json;charset=UTF-8'
                    }})
                        .success(function (data) {
                            $rootScope.user.username = data.login;
                            $rootScope.user.fullname = data.name;
                            $rootScope.user.useravatar = data.avatar_url;
                            $rootScope.user.id = data.id;

                    $rootScope.auth = loginHeader;

                    defer.resolve(true);
                })
                .error(function(error){
                    defer.resolve(false);
                });

                    return defer.promise;
                },
                logout: function () {
                    $rootScope.username = undefined;
                    $rootScope.auth = undefined;
                    return true;
                },
                userLoggedIn: function () {
                    return $rootScope.auth !== undefined;
                }
            };
        });
})(angular);
