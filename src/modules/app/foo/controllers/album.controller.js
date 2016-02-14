'use strict';

module.exports = function albumController($scope, $route, imageService) {
  var id = $route.current.params.id;
  var vm = this;
  vm.allImages = [];
  vm.images = [];

  imageService.getAlbumImages(id).then(function(d) {
    vm.allImages = d;
    vm.images = d.slice(0, vm.images.length + 6);
  });

  vm.loadPhotos = function() {
    vm.images = vm.allImages.slice(0, vm.images.length + 6);
  };
};
