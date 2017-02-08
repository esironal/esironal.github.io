'use strict';

var githubApp = angular.module('githubApp', [
        'ngRoute',
        'ngResource',
        'MainCtrl',
        'Utils',
        'Config'
]);

githubApp.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'MainCtrl'
        })
        .otherwise({ redirectTo: '/' });
}]),
  
angular.module('Config', []).constant('Config',
    {
        searchTerm: 'Angular',
        searchCategories: [
            { name: 'repositories' },
            { name: 'users' }
        ]
    }
),
  
  angular.module('MainCtrl', []).controller('MainCtrl', ['$scope','$compile' ,'Config','Github','Utils' ,
function($scope, $compile, Config, Github, Utils){

    $scope.searchTerm = Config.searchTerm;
    $scope.categories = Config.searchCategories;
    $scope.searchCategory = Config.searchCategories[0].name;

    var GithubApi = new Github();
    getResults();
    function getResults(){
        var searchRepos = GithubApi.searchAngularRepos($scope.searchTerm, $scope.searchCategory);

        searchRepos.success(function(data){
            if(data && data.items){
                $scope.results = $scope.searchCategory == 'repositories' ?
                    Utils.extractInfoRepo(data.items) : Utils.extractInfoUser(data.items);
                paginate();
            }
        });
    }


    $scope.doSearch = function(){
        getResults();
    };

    function paginate(){
        $scope.pconfig ={
            currentPage: 0,
            list: $scope.results,
            itemsPerPage: 6,
            id: 'pagination'
        };
        Utils.paginate($scope.pconfig);
        $compile($scope.pconfig.$editLine)($scope);
    }
}]),
  
  githubApp.directive('myTruncate', [ function() {

    return {
        link: function link(scope, element, attrs) {
            element.text(
                    attrs.myTruncate.length > 10 ? attrs.myTruncate.substr(0,8)+'...' : attrs.myTruncate
            );
        }
    };

}]),
  githubApp.directive('onEnter',[ function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.onEnter, {'event': event});
                });
                event.preventDefault();
            }
        });
    };
}]),
  
  githubApp.filter('offset', function() {
    return function(input, start) {
        if(input){
            start = parseInt(start, 10);
            return input.slice(start);
        }
    };
}),
  
githubApp.factory('Github', ['$http', function($http){

    function Github() {

    }

    Github.prototype.searchAngularRepos = function(term, category) {
        return $http.get('https://api.github.com/search/'+category, { params: { q: term } });
    };

    return Github;
}]),
  
  angular.module('Utils', []).service("Utils", [function() {

    this.extractInfoRepo = function(gitHubResults){
        var relevantInfo = [];
        gitHubResults.forEach(function(result){
           var filteredResult = {}, owner = {};
            filteredResult.title = result.name;
            filteredResult.description = result.description || 'No description.';
            filteredResult.createdAt = result.created_at;
            filteredResult.url = result.html_url;
            filteredResult.watchers = result.watchers;
            filteredResult.score = result.score;
            owner.name = result.owner.login;
            owner.avatarUrl = result.owner.avatar_url;
            owner.profileUrl = result.owner.html_url;
            filteredResult.owner = owner;
            relevantInfo.push(filteredResult);
        });
        return relevantInfo;
    };
    this.extractInfoUser = function(gitHubResults){
        var relevantInfo = [];
        gitHubResults.forEach(function(result){
            var filteredResult = {}, owner = {};
            filteredResult.title = result.login;
            filteredResult.description = 'No description.';
            filteredResult.url = result.html_url;
            filteredResult.score = result.score;
            owner.name = result.type;
            owner.avatarUrl = result.avatar_url;
            owner.profileUrl = result.html_url;
            filteredResult.owner = owner;
            relevantInfo.push(filteredResult);
        });
        return relevantInfo;
    };

    /****************************** Pagination ************************************/
    this.paginate = function(pconfig) {
        pconfig.range = function() {
            var rangeSize = 15;
            var ret = [];
            var start;

            start = pconfig.currentPage;
            if ( start > pconfig.pageCount()-rangeSize ) {
                start = pconfig.pageCount()-rangeSize+1;
            }

            for (var i=start; i<start+rangeSize; i++) {
                if(i>0)
                    ret.push(i);
            }
            return ret;
        };
        pconfig.pageCount = function() {
            return Math.ceil(pconfig.list.length/pconfig.itemsPerPage)-1;
        };
        pconfig.rows = function() {
            return pconfig.list.length;
        };
        pconfig.from = function() {
            return pconfig.currentPage*pconfig.itemsPerPage;
        };
        pconfig.to = function() {
            var initial = pconfig.currentPage*pconfig.itemsPerPage + pconfig.itemsPerPage;
            if(initial<pconfig.rows())
                return initial;
            else
                return pconfig.rows();
        };
        pconfig.prevPage = function() {
            if (pconfig.currentPage > 0) {
                pconfig.currentPage--;
            }
        };

        pconfig.prevPageDisabled = function() {
            return pconfig.currentPage === 0 ? "disabled" : "";
        };

        pconfig.nextPage = function() {
            if (pconfig.currentPage < pconfig.pageCount()) {
                pconfig.currentPage++;
            }
        };

        pconfig.nextPageDisabled = function() {
            return pconfig.currentPage === pconfig.pageCount() ? "disabled" : "";
        };
        pconfig.setPage = function(n) {
            pconfig.currentPage = n;
        };
        pconfig.$editLine = $('<ul class="pagination">' +
            '<li ng-class="pconfig.prevPageDisabled()"><a href="" ng-click="pconfig.prevPage()">&#171;</a></li>' +
            '<li ng-class="{active: 0 == pconfig.currentPage}" ng-click="pconfig.setPage(0)"><a href="">1</a></li>' +
            '<li ng-repeat="n in pconfig.range()" ng-class="{active: n == pconfig.currentPage}" ng-click="pconfig.setPage(n)">' +
            '<a href="">{{n+1}}</a></li>' +
            '<li ng-hide="pconfig.currentPage > pconfig.pageCount()-10" ng-click="pconfig.setPage(pconfig.pageCount())">' +
            '<a href="">{{pconfig.pageCount()+1}}</a></li>' +
            '<li ng-class="pconfig.nextPageDisabled()"><a href="" ng-click="pconfig.nextPage()">&#187;</a></li></ul>');
        $('#'+pconfig.id).html(pconfig.$editLine);
    };
}]);