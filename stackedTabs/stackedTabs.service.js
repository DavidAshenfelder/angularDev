(function() {
  'use strict';
  angular
  .module('StackedTabs')
  .factory('StackedTabsService', function ($http,$rootScope) {

    var url = 'https://davidserver.herokuapp.com/collections/resumebuilder1';

    var getInfo = function() {
      return $http.get(url)
    };

    var updateInfo = function(formInfo, id) {
      return $http.put(url + '/' + id, formInfo)
    };

    var postInfo = function(formInfo) {
      return $http.post(url, formInfo)
    };

    getInfo();
    return {
      getInfo:getInfo,
      updateInfo:updateInfo,
      postInfo:postInfo,
    };
  });
}());
