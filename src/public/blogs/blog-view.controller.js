(function() {
    'use strict';

    angular.module('public')
        .controller('blogDetailController', blogDetailController);

    blogDetailController.$inject = ['myCvService', 'blogDetail'];

    function blogDetailController(myCvService, blogDetail) {
        var bDetails = this;
        bDetails.blogDt = blogDetail;
        //    console.log("in blogdCtrl: " + JSON.stringify(bDetails.blogDt));
    }
})();
