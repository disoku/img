'use strict';

module.exports = /*@ngInject*/
    function barController($scope, $window) {

      $scope.name = {
        value: 'expressly'
      };

      this.openWindow = function () {
        $window.open('http://google.com', 'Google', 'width=500,height=400');
      };
    };
