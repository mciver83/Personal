var app = angular.module('personal');

app.directive('mainHeader', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/mainHeader.html',
		transclude: true,
		link: function(scope, element, attrs, $document){
			$document.on('scrolldown', function(){
				element.addClass('background-white')
			})
		},
		controller: function($scope){
			$scope.navbarItems = [
				{
					name: 'ABOUT',
					hash: '#/#about'
				},
				{
					name: 'SKILLS',
					hash: '#/#skills'
				},
				{
					name: 'PORTFOLIO',
					hash: '#/#portfolio'
				},
				{
					name: 'CONTACT',
					hash: '#/#contact'
				}
			]
		}
	}
})