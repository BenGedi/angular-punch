app.filter('searchBy', [function() {
	'use strict';
	return function(arr, searchText, prop) {
		if (!searchText) {
			return arr;
		}
		return arr.filter(function(item){
			return item[prop].indexOf(searchText) > -1;
		});
	};
}]);
