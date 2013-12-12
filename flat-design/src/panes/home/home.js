"use strict"
var pane = angular.module('app.panes.home', []);

pane.controller('homeCtrl', ['$scope', '$location', function ($scope, $location) {
    window.console.log('new');
}]);
