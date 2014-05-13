'use strict';

angular.module('superheroApp')
  .controller('ListCtrl', function ($scope, marvelApi) {

    marvelApi.character.list().get().$promise.then(function(result) {
      $scope.characters = result.data.results;
    });
  });
