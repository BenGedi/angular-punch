	'use strict';
var app = angular.module('Punch');

app.filter('capitalize', [function() {
  return function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
}]);
