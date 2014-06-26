/**
 * Created by lbarcus on 6/25/14.
 */

angular.module('OWMApp', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/', {
            templateURL: './home.html',
            controller: 'HomeCtrl'
        });
    })
    .controller('HomeCtrl', function ($scope) {
        //
    });;