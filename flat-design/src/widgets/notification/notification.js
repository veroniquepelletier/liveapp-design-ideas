var widget = angular.module('app.widgets.notification', []);

widget.directive('notification', [function () {
    return {
        restrict: 'EA',
        scope: true,
        templateUrl: 'widgets/notification/notification.html',
        replace: false,
        link: function(scope, element) {
            window.console.log('new notif');
        }
    }
}]);
