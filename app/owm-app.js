/**
 * Created by lbarcus on 6/25/14.
 */

angular.module('OWMApp', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : './home.html',
            controller : 'HomeCtrl'
        });
    })
    .controller('HomeCtrl', function($scope) {
        //empty for now
    });;