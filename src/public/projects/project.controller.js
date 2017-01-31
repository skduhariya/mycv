(function() {
    'use-strict';

    angular.module('public').controller('projectCtrl', projectCtrl);

    projectCtrl.$inject = ['myCvService'];

    function projectCtrl(myCvService) {
        var ctrl = this;
        ctrl.projectList = [];

        ctrl.$onInit = function() {
            myCvService.getProjectList()
                .then(function(result) {

                    ctrl.projectList = result;
                    //      console.log("result: " + JSON.stringify(ctrl.projectList));
                });
        }
    }

})();
