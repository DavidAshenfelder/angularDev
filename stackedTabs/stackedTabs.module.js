(function() {
  'use strict';
  angular
  .module('StackedTabs', [
    'ngRoute',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'stackedTabs/views/stackedTabs.html',
        controller: 'StackedTabsController'
      });
    });
}());
