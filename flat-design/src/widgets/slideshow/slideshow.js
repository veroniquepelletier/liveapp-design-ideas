var widget = angular.module('app.widgets.slideshow', []);

widget.directive('slideshow', [function () {
    return {
        restrict: 'EA',
        scope: true,
        templateUrl: 'widgets/slideshow/slideshow.html',
        replace: false,
        link: function(scope, element) {
            scope.slides = [
                {url: '../../assets/img.jpg'},
                {url: '../../assets/land2.jpg'},
                {url: '../../assets/land3.jpg'},
                {url: '../../assets/land4.jpg'},
                {url: '../../assets/land5.jpg'},
                {url: '../../assets/land6.jpg'}
            ]

            scope.selected = scope.slides[0];
        }
    }
}]);
