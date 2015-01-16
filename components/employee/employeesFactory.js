(function () {
	'use strict';
	var app = angular.module('Punch');

	app.factory('employees', [function(){
		var model = {
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
		return model;
	}]);
}());

