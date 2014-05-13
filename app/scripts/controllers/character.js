'use strict';

angular.module('superheroApp')
  .controller('CharacterCtrl', function ($scope, $routeParams, marvelApi) {

    marvelApi.character.get($routeParams.characterId).get().$promise.then(function(result) {
      $scope.character = result.data.results[0];
    });

    marvelApi.character.comics($routeParams.characterId).get().$promise.then(function(result) {
      $scope.comics = result.data.results;
    });
  });
