(function() {
    'use strict';
    angular.module('public')
        .component('blogListCmp', {
            templateUrl: 'src/public/templates/bloglist.template.html',
            bindings: {
                items: '<'
            }
        });
})();
