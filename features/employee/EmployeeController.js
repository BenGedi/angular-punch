app.controller('EmployeeController' , ['$scope' , '$routeParams' , function($scope, $routeParams){
	'use strict';
	$scope.employeeID = $routeParams.employeeId;
}]);
