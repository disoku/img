'use strict';

module.exports = function mainController($scope, imageService) {

  var vm = this;
  vm.allImages = [];
  vm.images = [];

  imageService.getAllImages().then(function(d) {
    vm.allImages = d;
    vm.images = d.slice(0, vm.images.length + 6);
  });

  vm.loadPhotos = function() {
    vm.images = vm.allImages.slice(0, vm.images.length + 6);
  };
};
