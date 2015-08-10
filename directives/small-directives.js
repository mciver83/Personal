var app = angular.module('personal');

app.directive('hover', function(){
	return {
		scope: {
			toggle: '@',
			untoggle: '@'
		},
		restrict: 'A',
		link: function (scope, element, attrs) {
			// var textColor = 'text-red';
			element.on('mouseover', function(){
				element.addClass(scope.toggle);
				element.removeClass(scope.untoggle);
			})
			element.on('mouseout', function(){
				element.removeClass(scope.toggle);
				element.addClass(scope.untoggle);
			})
		}
	};
});

app.directive('scroll', function ($window) {
    return function (scope, element, attrs) {
        angular.element($window).bind("scroll", function () {
             if (this.pageYOffset >= 420) {
                 element.addClass('background-white');
                 console.log('Scrolled below header.');
             } else {
                 element.removeClass('background-white');
                 console.log('Header is in view.');
             }
        });
    };
});

// app.directive('portfolio', function () {
// 	return {
// 		restrict: 'A',
// 		link: function (scope, element, attrs) {
// 			element.on('mouseover', function(){
// 				element.addClass(textColor);
// 			})
// 			element.on('mouseout', function(){
// 				element.removeClass(textColor);
// 			})
// 		}
// 	}
// })