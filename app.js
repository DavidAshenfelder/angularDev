(function() {
  'use strict';
  angular
  .module('MyApp', [
    'ngRoute',
    'StackedTabs',
    'ui.bootstrap',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/404', {
        template: '<h6>Error, Page Not Found!<h6>'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
}());
