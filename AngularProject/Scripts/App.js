var myApp = angular.module('myApp', ['ui.bootstrap', 'ngAnimate']);
myApp.animation('.slide', [function () {
    return {

        enter: function (element, doneFn) {
            jQuery(element).fadeIn(1000, doneFn);
            jQuery(element).fadeOut(3000, doneFn);

        },

        leave: function (element, doneFn) {
            jQuery(element).fadeOut(1000, doneFn);
        }
    }
}
]);
