(function() {
    'use strict';

    angular.module('public').controller('blogCtrl', blogCtrl);

    blogCtrl.$inject = ['myCvService'];

    function blogCtrl(myCvService) {
        var ctrl = this;

        ctrl.blogList = [];

        ctrl.$onInit = function() {
            myCvService.getBlogList()
                .then(function(result) {

                    ctrl.blogList = result;
                    //      console.log("result: " + JSON.stringify(ctrl.projectList));
                });
        }
    }

})();
