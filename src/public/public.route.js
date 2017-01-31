(function() {
    'use strict';

    angular.module('public')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        $stateProvider.state('public', {
            abstract: true,
            templateUrl: 'src/public/public.html'
        }).state('public.about', {
            url: '/',
            templateUrl: 'src/public/about/about.html'
        }).state('public.projects', {
            url: '/projects',
            templateUrl: 'src/public/projects/projects.html',
            controller: 'projectCtrl as pjctrl'
        }).state('public.blogs', {
            url: '/blogs',
            templateUrl: 'src/public/blogs/blogs.html'
        }).state('public.contact', {
            url: '/contact',
            templateUrl: 'src/public/contact/contact.html'
        }).state('public.project', {
            url: '/projects/{pName}',
            templateUrl: 'src/public/projects/project-view.html',
            controller: 'projectDetailController',
            controllerAs: 'pdCtrl',
            resolve: {
                projectDetail: ['$stateParams', 'myCvService', function($stateParams, myCvService) {
                    console.log("inside state resolve" + $stateParams);
                    return myCvService.getProjectDetails($stateParams.pName);
                }]
            }
        });

    };
})();
