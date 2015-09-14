(function() {
  'use strict';
  angular
  .module('StackedTabs')
  .factory('StackedTabsService', function ($http,$rootScope) {

    var url = 'https://davidserver.herokuapp.com/collections/resumeBuilder';

    var getInfo = function() {
      return $http.get(url)
    };

    var updateInfo = function(formInfo) {
      return $http.post(url, formInfo)
    };
    getInfo();
    return {
      getInfo:getInfo,
      updateInfo:updateInfo,
    };
  });
}());
