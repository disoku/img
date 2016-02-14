'use strict';

module.exports =
    angular.module('expressly.foo', ['ngMaterial'])// , 'expressly.common.serv'
        .config(require('./routes.js'))
        .config(require('./i18n/en.js'))
        .controller('barController', ['$scope', '$window', require('./controllers/bar.controller')])
        .controller('imageController', ['$scope', '$route', 'imageService', require('./controllers/image.controller')])
        .controller('albumController', ['$scope', '$route', 'imageService', require('./controllers/album.controller')])
        .controller('mainController', ['$scope', 'imageService', require('./controllers/main.controller')]);
