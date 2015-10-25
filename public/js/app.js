'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'ngRoute',
  'ngMessages',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/aboutMandi', {
      templateUrl: 'partials/aboutMandi',
      controller: 'aboutMandiController'
    }).
    when('/signUp', {
      templateUrl: 'partials/signUp',
      controller: 'signUpController'
    }).
    when('/userRegistration', {
        templateUrl: 'partials/newUser',
        controller: 'newUserController'
    }).
    otherwise({
      redirectTo: '/aboutMandi'
    });

  $locationProvider.html5Mode(true);
}).
directive("compareTo", function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
});
