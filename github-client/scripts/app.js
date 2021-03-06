;String.prototype.format = function () {
  if (arguments.length === 0) {
    return "";
  }

  var pos = -1, str = this, cnd = "", ind = -1, cnds = str.match(/{(\d+)}/g), cndsInd = cnds ? cnds.length : 0;
  while (cndsInd--) {
    pos = -1;
    cnd = cnds[cndsInd];
    ind = cnd.replace(/[{}]+/g, "");
    while ((pos = str.indexOf(cnd, pos + 1)) !== -1) {
      str = str.substring(0, pos) + (arguments[+ind] || "") + str.substring(pos + cnd.length);
    }
  }
  return str;
};

;var app = app || {};

'use strict';

;(function () {
    window.localStorage = window.localStorage || {};

    setTimeout(function () {
        document.body.className = document.body.className.replace('uncomplete', '');
    }, 1000);

    angular.extend(app, {
        prefix: 'https://api.github.com/',
        id: '589f52a8842a481d2185',
        secret: 'e5b520e71a6011cb0e1cb050843d44edc9633eb1',
        token: null
    });

// Declare app level module which depends on filters, and services
    angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/auth', {templateUrl: 'partials/auth.html', controller: MyCtrlAuth});
            $routeProvider.when('/list', {templateUrl: 'partials/list.html', controller: MyCtrlRepList});
            $routeProvider.when('/edit/:user/:id', {templateUrl: 'partials/edit.html', controller: MyCtrlRepEdit});
            $routeProvider.otherwise({redirectTo: '/auth'});
    }]);
})();
