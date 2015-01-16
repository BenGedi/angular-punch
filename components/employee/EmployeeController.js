(function () {
	'use strict';
	var app = angular.module('Punch');

	app.controller('EmployeeController' , ['$scope' , '$routeParams' , function($scope, $routeParams){
		$scope.employeeID = $routeParams.employeeId;
	}]);
}());

