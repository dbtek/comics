'use strict';

describe('Service: marvelApi', function () {

  // load the service's module
  beforeEach(module('superheroApp'));

  // instantiate service
  var marvelApi;
  beforeEach(inject(function (_marvelApi_) {
    marvelApi = _marvelApi_;
  }));

  it('should do something', function () {
    expect(!!marvelApi).toBe(true);
  });

});
