/*global angular:false */
(function (angular) {
    "use strict";
    angular.module('gist', ['ngRoute', 'ngAnimate', 'credModule', 'gistModule', 'restangular', 'templates-app'])
        .filter('notEmpty', function () {
            return function (input) {
                return (input === undefined || input === null || input.length === 0) ? 'No value' : input;
            };
        })
        .factory('authInterceptor', function ($q, $rootScope) {

            return {
                'request': function (config) {
                    if (!config.headers['Authorization']) {
                        config.headers['Authorization'] = $rootScope.auth;
                    }

                    return config || $q.when(config);
                }
            };
        })
        .config(
        function ($routeProvider, $httpProvider, RestangularProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'login/login.tpl.html',
                    controller: 'loginCtrl'
                })
                .when('/gists', {
                    templateUrl: 'gist/edit.tpl.html',
                    controller: 'gistCtrl',
                    resolve: {
                        gists: function (gistService, userService, $location, $rootScope) {
                            if (userService.userLoggedIn()) {
                                return gistService.gists($rootScope.user.username).then(function (gists) {
                                    return gists;
                                });
                            } else {
                                $location.path('/login');
                            }
                        }}})
                .otherwise({
                    redirectTo: '/'
                });

            $httpProvider.interceptors.push('authInterceptor');

            RestangularProvider.setBaseUrl('https://api.github.com/');
        });


})(angular);
