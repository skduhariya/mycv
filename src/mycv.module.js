(function() {
    'use strict';

    angular.module('mycv', ['public'])
        .config(config);

    config.$inject = ['$urlRouterProvider'];

    function config($urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

    };

})();
