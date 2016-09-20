var app = angular.module('contributions', []);

app.controller('ContributionController', function($scope, $http, $sce) {
  $scope.user = { name: 'Contributions' };
  $scope.reposLoading = false;
  $scope.starredLoading = false;
  $scope.messages = {};
  $scope.options = {
    query: '',
    username: 'esironal',
  };

  $scope.github = new Github({
    token: 'e9e54d959a6a2dcb801f5ca0f58d33a32882b4cf',
  });

  $scope.githubUser = $scope.github.getUser();

  $scope.trust = function(html) {
    return $sce.trustAsHtml(html);
  };

  $scope.hideZero = function(number) {
    return number > 0 ? number : '';
  };

  $scope.emoji = function(text) {
    if (text) {
      emoji.text_mode = false;
      emoji.replace_mode = 'unified';

      return emoji.replace_colons(text);
    }

    return text;
  }

  $scope.updateUsername = function() {
    $scope.repos = $scope.starred = {};

    $scope.githubUser.show($scope.options.username, function(err, res) {
      if (err) {
        $scope.messages.error = err.message + ' (' + err.status + ')';
        $scope.user = {};
        $scope.options.username = '';
      }
      else {
        $scope.user = res;
        $scope.user.name = typeof res.name !== 'undefined' ? res.name : res.login;
        $scope.reposLoading = true;
        $scope.starredLoading = true;
        $scope.$apply();

        $scope.githubUser.userRepos($scope.options.username, function(err, res) {
          $scope.reposLoading = false;

          if (err) {
            $scope.messages.error = data.message + ' (' + status + ')';
            $scope.options.username = '';
          }
          else {
            $scope.messages = {};
            $scope.repos = res;
            $scope.$apply();
          }
        });

        $scope.githubUser.userStarred($scope.options.username, function(err, res) {
          $scope.starredLoading = false;

          if (err) {
            $scope.messages.error = data.message + ' (' + status + ')';
            $scope.options.username = '';
          }
          else {
            $scope.messages = {};
            $scope.starred = res;
            $scope.$apply();
          }
        });
      }
    });
  };
});
