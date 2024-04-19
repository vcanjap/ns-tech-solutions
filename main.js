nsApp=angular.module("nsApp", ['ngRoute']);


nsApp.controller('nsMainController', () => {

});

// ROUTES
nsApp.config(function ($routeProvider, $locationProvider) {
   
    $locationProvider.hashPrefix('');
    
    $routeProvider
       .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeController'
        })
        .when('/solutions', {
            templateUrl: 'views/solutions.html',
            controller: 'solutionsController'
        })
        .when('/staffing', {
            templateUrl: 'views/staffing.html',
            controller: 'staffingController'
        })
        .when('/careers', {
            templateUrl: 'views/careers.html',
            controller: 'careersController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'aboutController'
        })
        .when('/privacy', {
            templateUrl: 'views/privacy.html',
            controller: 'privacyController'
        })
});


// CONTROLLERS
nsApp.controller('homeController', ['$scope', function($scope) {
    
}]);

nsApp.controller('aboutController', ['$scope', function($scope) {
    
}]);