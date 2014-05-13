'use strict';

angular
  .module('superheroApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })
      .when('/character/:characterId', {
        templateUrl: 'views/character.html',
        controller: 'CharacterCtrl'
      })
      .otherwise({
        redirectTo: '/list'
      });
  });
