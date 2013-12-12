'use strict';

var app = angular.module('app', [
    'app.panes.home',
    'app.panes.about',
    'app.flashcards.info',
    'app.widgets.editor',
    'app.widgets.notification',
    'app.widgets.slideshow',
    'app.widgets.titlebar'
]);

app.config(['$provide', '$routeProvider', function($provide, $routeProvider) {
    $provide.factory('$routeProvider', function () {
        return $routeProvider;
    });
}]);

app.run(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/panes/home/home.html'
    }).when('/about', {
        templateUrl: '/panes/about/about.html'
    }).otherwise({
        redirectTo: '/'
    });
}]);

app.controller('appCtrl', function ($scope) {
    window.console.log('new editor');
    $scope.editMode = true;

    $scope.$on('toggleEditor', function() {
        $scope.editMode = !$scope.editMode;
    })

    less.modifyVars({'@TC1': 'blue'});
    less.refreshStyles();
})
