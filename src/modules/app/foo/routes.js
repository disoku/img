'use strict';

module.exports = /*ngInject*/
  function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl : 'app/foo/templates/photolist.html',
        controller  : 'mainController',
        controllerAs: 'mainCtrl'
      })
      .when('/album/:id', {
        templateUrl: 'app/foo/templates/photolist.html',
        controller: 'albumController',
        controllerAs: 'mainCtrl'
      })
      .when('/image/:id', {
        templateUrl: 'app/foo/templates/image.html',
        controller: 'imageController',
        controllerAs: 'imageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  };
