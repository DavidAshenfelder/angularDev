(function() {
  'use strict';
  angular
  .module('StackedTabs')
  .controller('StackedTabsController', function ($scope, $rootScope, StackedTabsService, $routeParams) {

      StackedTabsService.getInfo().success(function(interview) {
        $scope.interview = interview[1];
        console.log($scope.interview);
      });

    $scope.updateInfo = function(formInfo) {
      var id = $scope.interview._id;
      var interview = $scope.interview;
      if (interview) {
        StackedTabsService.updateInfo(formInfo, id)
      } else {
        StackedTabsService.postInfo(formInfo)
      }
    }
  });
}());
