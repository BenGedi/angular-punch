(function(){
	'use strict';





app.factory('employees', [function(){
	function getEmployees () {
		return [1,2,3];
	}
	return {
		getEmployees: getEmployees
	};
}]);

})();
