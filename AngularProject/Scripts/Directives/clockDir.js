myApp.directive('timeDir', function ($timeout) {
    return {
        restrict: 'E',     
        templateUrl: 'TimeTemp.html',
        scope: {
            text: '@',
            timetype: '=',
            timefunction: '&',
            cancel:'&'
        },
        link: function (scope, element, attribute)
        {
           
            scope.timetype = new Date();
        }
    }
});