angular.module('owmApp', ['ngRoute', 'ngAnimate'])
    .value('owmCities', ['New York', 'Dallas', 'Chicago'])

    .controller('HomeCtrl', function($scope) {
            //empty for now
        })

    .config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : './home.html',
            controller : 'HomeCtrl'
        }).when('/cities/:city', {
          templateUrl : './city.html',
          controller : 'CityCtrl',
          resolve : {
              city: function(owmCities, $route, $location) {
                  var city = $route.current.params.city;
                  if(owmCities.indexOf(city) == -1 ) {
                      $location.path('/error');
                      return;
                  }
                  return city;
              }
          }
        })
        .when('/error', {
              template : '<p>Error Page Not Found</p>'
        })
        .otherwise({
            redirectTo: '/error'
        });
    })

    .controller('CityCtrl', function($scope, city) {
        $scope.city = city;
    })
    .run(function($rootScope, $location, $timeout){
        $rootScope.$on('$rootChangeError', function() {
            console.log("routChangeError...");
            $location.path("/error");
        });

        $rootScope.$on('$routeChangeStart', function () {
            console.log("routeChangeStart...");
            $rootScope.isLoading = true;
        });

        $rootScope.$on('$routeChangeSuccess', function() {
            console.log("routeChangeSuccess...");
            $timeout(function() {
                $rootScope.isLoading = false;
            }, 1000);
        });
    });