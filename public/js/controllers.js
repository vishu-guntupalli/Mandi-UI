'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

  }).
  controller('aboutMandiController', function ($scope, $http) {
        $http({
            method: 'GET',
            url: '/api/name'
            }).
            success(function (data, status, headers, config) {
                $scope.name = data.name;
            }).
            error(function (data, status, headers, config) {
                $scope.name = 'Error!'
            });

  }).
  controller('signUpController', function ($scope, $http) {
       $scope.signUpUser = function() {
           $http({
               method: 'POST',
               url: '/mandiService/userSignUp',
               data: {newUser: $scope.newUser}
           }).
           success(function (data, status, headers, config) {
               console.log('Success')
           }).
           error(function (data, status, headers, config) {
               console.log('error')
           });
       }
  }).
  controller('newUserController', function($scope, $http){
        $scope.registerNewUser = function() {
            console.log('Hello user '+$scope.newUser);

            $http({
                method: 'POST',
                url: '/mandiService/newUserRegistration',
                data: {newUser: $scope.newUser}
                }).
                success(function (data, status, headers, config) {
                    console.log('Success')
                }).
                error(function (data, status, headers, config) {
                    console.log('error')
                });
        }

  });
