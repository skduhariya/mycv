(function() {
    'use strict';
    angular.module('public')
        .component('blogView', {
            templateUrl: 'src/public/templates/blogView.template.html',
            bindings: {
                items: '<'
            }
        });
})();
