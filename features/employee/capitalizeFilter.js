app.filter('capitalize', [function() {
	'use strict';
  return function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
}]);
