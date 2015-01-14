var app = angular.module('Punch', []);

app.controller('MainCtrl', ['$scope', 'employees', function($scope, employees){
	console.log(employees.getEmployees());

	$scope.model = {
		employees : [{
			id: 3289123456,
			fname: 'aLIce',
			lname: 'Cooper',
			title: 'fed',
			hours: 200
		},
		{
			id: 3289234567,
			fname: 'Bob',
			lname: 'Smith',
			title: 'proj',
			hours: 20
		}],

		jobs : {
			fed: 'Front-End Developer',
			proj: 'Project Manager'
		}
	};

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

app.filter('searchBy', [function() {
	return function(arr, searchText, prop) {
		if (!searchText) {
			return arr;
		}
		return arr.filter(function(item){
			return item[prop].indexOf(searchText) > -1;
		});
	};
}]);


app.filter('capitalize', [function() {
  return function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
}]);

app.factory('employees', [function(){
	function getEmployees () {
		return [1,2,3];
	}
	return {
		getEmployees: getEmployees
	};
}]);
