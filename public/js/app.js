'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/aboutMandi', {
      templateUrl: 'partials/aboutMandi',
      controller: 'aboutMandiController'
    }).
    when('/userRegistration', {
        templateUrl: 'partials/newUser',
        controller: 'newUserController'
      }).
    otherwise({
      redirectTo: '/aboutMandi'
    });

  $locationProvider.html5Mode(true);
});
