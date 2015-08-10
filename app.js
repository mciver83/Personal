var app = angular.module('personal', ['ngRoute', 'ui.materialize'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'mainCtrl'
	})
	.otherwise('/')
})