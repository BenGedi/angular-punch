app.factory('employees', [function(){
	'use strict';
	function getEmployees () {
		return [1,2,3];
	}
	return {
		getEmployees: getEmployees
	};
}]);
