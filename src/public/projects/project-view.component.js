(function() {
    'use strict';
    angular.module('public')
        .component('projectView', {
            templateUrl: 'src/public/templates/projectView.template.html',
            bindings: {
                items: '<'
            }
        });
})();
