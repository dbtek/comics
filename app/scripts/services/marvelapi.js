'use strict';

angular.module('superheroApp')
  .factory('marvelApi', function ($resource) {

    var apiUrl='http://gateway.marvel.com:80/v1/public';
    var apiKey='9be37f1780f9cdfa94e52514913b9860';

    // Public API here
    return {
      character: {
        list: function() {
          return $resource(apiUrl+'/characters', {
            apikey: apiKey,
            limit: 100
          });
        },
        get: function(characterId) {
          return $resource(apiUrl+'/characters/:id', {
            apikey: apiKey,
            id: characterId
          });
        },
        comics: function(characterId) {
          return $resource(apiUrl+'/characters/:id/comics', {
            apikey: apiKey,
            id: characterId
          });
        }
      },
      comic: {
        get: function(comicId) {
          return $resource(apiUrl+'/comics/:id', {
            apikey: apiKey,
            id: comicId
          });
        }
      }
    };
  });
