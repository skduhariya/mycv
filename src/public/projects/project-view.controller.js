(function() {
    'use strict';

    angular.module('public')
        .controller('projectDetailController', projectDetailController);

    projectDetailController.$inject = ['myCvService', 'projectDetail'];

    function projectDetailController(myCvService, projectDetail) {
        var pDetails = this;
        pDetails.projectDt = projectDetail;
        console.log("in pdCtrl: " + JSON.stringify(pDetails.projectDt));
    }
})();
