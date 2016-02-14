'use strict';

module.exports = /*@ngInject*/
  function imageController($scope, $route, imageService) {

    var id = $route.current.params.id;
    var vm = this;
    vm.image = [];

    imageService.getImage(id).then(function(d) {
      vm.image = d;
    });
  };
