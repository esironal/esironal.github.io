angular.module("myApp",[])
.directive("click", function() {
  return {
    restrict: "A",
    link: function(scope, element, attrs) {
      element.bind("click", function() {
        scope.$evalAsync(attrs.click);
      });
    }
  };
})
.filter('fromTo', function() {
  return function(input, from, total, lessThan) {
    from = parseInt(from);
    total = parseInt(total);
    for (var i = from; i < from+total && i<lessThan; i++) {
      input.push(i);
    }
    return input;
  }
})
.controller("Example", function($scope, $interval, $http) {

  try {
  $http({method: 'GET', url: 'https://api.github.com/users/netsi1964/gists'}).
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    console.log(headers());
    $scope.gists = data;
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
} catch(e) {
 
}
  
  $scope.tags = [
    'Bootstrap','AngularJS','gist','ajax'
  ]
})


/*
$(".gist").load("https://api.github.com/users/netsi1964/gists")

$.ajax({
                    url: 'https://itunes.apple.com/search?term=dsb&country=DK',
                    dataType: 'jsonp',
                    success: function(dataWeGotViaJsonp){
                      $(".itunes").text(JSON.stringify(dataWeGotViaJsonp).replace(/", "/g, "\}/n"))
                    }
                });
                */