(function() {
  'use strict';
  angular
  .module('StackedTabs')
  .controller('StackedTabsController', function ($scope, $rootScope, StackedTabsService, $routeParams) {
      StackedTabsService.getInfo().success(function(formInfo) {
        $scope.formInfo = formInfo;
        console.log($scope.formInfo);
      })
    $scope.updateInfo = function(formInfo) {
      StackedTabsService.updateInfo(formInfo)
    }
  });
}());
