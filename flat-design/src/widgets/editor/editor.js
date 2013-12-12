var widget = angular.module('app.widgets.editor', []);

widget.directive('editor', ['$rootScope', function ($rootScope) {
    return {
        restrict: 'EA',
        scope: true,
        templateUrl: 'widgets/editor/editor.html',
        replace: false,
        link: function(scope, element) {
            console.log('new editor');
            scope.cardTypes = [
                {name:'info', directive:'dark'},
                {name:'quiz', directive:'light'},
                {name:'poll', directive:'dark'},
                {name:'gallery', directive:'dark'},
                {name:'countdow', directive:'light'}
            ];

            scope.quadrants = [
                {name:'x', class:'quadrant-top-left'},
                {name:'x', class:'quadrant-top-center'},
                {name:'x', class:'quadrant-top-right'},
                {name:'<'},
                {name:'x', class:'quadrant-center'},
                {name:'>'},
                {name:'x', class:'quadrant-bottom-left'},
                {name:'x', class:'quadrant-bottom-center'},
                {name:'x', class:'quadrant-bottom-right'},
            ];

            scope.type = scope.cardTypes[0];

            scope.onTapQuadrant = function (value) {
                if (value.class) {
                    $rootScope.$broadcast('updateClass', {type: 'quadrant', class: value.class});
                }
            };
        }
    }
}]);

widget.directive('editable', ['$rootScope', function ($rootScope) {
    return {
        link: function(scope, element) {
            scope.$on('updateClass', function (ev, data) {
                element.removeAttr('class');
                element.attr('class', '');
                element.addClass(data.class);
                less.modifyVars({'@TC1': 'blue'});  // not working grrr
            });
        }
    }
}]);
