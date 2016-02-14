'use strict';

module.exports = /*@ngInject*/
  function imageService($http) {

    var vm = this;

    function getAlbum(id) {
      vm.images = $http.get('http://jsonplaceholder.typicode.com/albums/' + id + '/photos').
        then(function(response) {
          // The then function here is an opportunity to modify the response
          console.log(response);
          // The return value gets picked up by the then in the controller.
          return response.data;
        });
      return vm.images;
    }

    function getImage(id) {
      vm.image = $http.get('http://jsonplaceholder.typicode.com/photos/' + id).
        then(function(response) {
          // The then function here is an opportunity to modify the response
          console.log(response);
          // The return value gets picked up by the then in the controller.
          return response.data;
        });
      return vm.image;
    }

    function getAllImages() {
      vm.images = $http.get('http://jsonplaceholder.typicode.com/photos/').
        then(function(response) {
          // The then function here is an opportunity to modify the response
          console.log(response);
          // The return value gets picked up by the then in the controller.
          return response.data;
        });
      return vm.images;
    }

    return {
      getImage: getImage,
      getAlbumImages: getAlbum,
      getAllImages: getAllImages
    };
  };
