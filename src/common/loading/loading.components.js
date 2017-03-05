(function() {
    "use strict";

    angular.module('common')
        .component('loading', {
            template: '<div class="loader" ng-if="$ctrl.show"><div class="loading-indicator" ><img src="images/spinner.svg" ><span>Loading ...</span></div></div>',
            controller: LoadingController
        });


    LoadingController.$inject = ['$rootScope'];

    function LoadingController($rootScope) {
        var $ctrl = this;
        var listener;

        $ctrl.$onInit = function() {
            $ctrl.show = false;
            listener = $rootScope.$on('spinner:activate', onSpinnerActivate);
        };

        $ctrl.$onDestroy = function() {
            listener();
        };

        function onSpinnerActivate(event, data) {
            $ctrl.show = data.on;
        }
    }

})();
