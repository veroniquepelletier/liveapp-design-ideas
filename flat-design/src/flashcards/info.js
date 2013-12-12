var card = angular.module('app.flashcards.info', []);

card.directive('info', [function () {
    return {
        restrict: 'EA',
        scope: true,
        templateUrl: 'flashcards/info.html',
        replace: false,
        link: function(scope, element) {
            scope.img_src = "assets/img.jpg";
        }
    }
}]);
