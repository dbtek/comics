'use strict';

describe('Controller: ListCtrl', function () {

  // load the controller's module
  beforeEach(module('superheroApp'));

  var ListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListCtrl = $controller('ListCtrl', {
      $scope: scope
    });
  }));
});
