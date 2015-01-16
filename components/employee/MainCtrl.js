(function () {
	'use strict';
	var app = angular.module('Punch');

	app.controller('MainCtrl', ['$scope', 'employees', function($scope, employees){

		$scope.model = employees;

	    $scope.toggleEditEmployee = function(employee){
	      employee.edit = !employee.edit;
	    };

		$scope.addEmployee = function(newEmployee) {
			newEmployee = angular.copy(newEmployee);
			$scope.model.employees.push(newEmployee);
		};

		$scope.deleteEmployee = function(index) {
			$scope.model.employees.splice(index, 1);
		};

		$scope.getTitle = function(id) {
			return $scope.model.jobs[id];
		};

	}]);

}());

