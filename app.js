var app = angular.module('Punch', ['ngRoute']);

app.config(['$routeProvider' , function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : 'partials/main.html',
			controller : 'MainCtrl'
		})
		.when('/login' , {
			templateUrl : 'partials/login.html',
			controller : 'LoginController'
		})
		.when('/emplyoee/:employeeId' , {
			templateUrl : 'partials/employee.html',
			controller : 'EmployeeController'
		})
		.otherwise({
			redirectTo : '/'
		});
}]);
