(function () {
	'use strict';
	var app = angular.module('Punch');

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
}());
