(function() {
    'use strict';
    angular.module('public')
        .component('projectListCmp', {
            templateUrl: 'src/public/templates/projectlist.template.html',
            bindings: {
                items: '<'
            }
        });
})();
