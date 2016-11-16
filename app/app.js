'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$stateProvider', '$routeProvider','$urlRouterProvider', function($stateProvider,$routeProvider,$urlRouterProvider) {
  //$locationProvider.hashPrefix('!');
    //debugger;
    $stateProvider

      .state('events', {
        url:'/events',
        templateUrl: 'views/events/events.html',
        controller: 'EventCtrl'
      })

      .state('users', {
        url:'/users',
        templateUrl: 'views/users/users.html',
        controller: 'UserCtrl'
      });

    $urlRouterProvider.otherwise('events');

  $routeProvider.otherwise({redirectTo: '/events'});
}]);
