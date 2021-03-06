(function(){
  'use strict';

  angular
  .module('settings')
  .controller('ModulesCtrl', ['$rootScope', '$scope', 'restFulService', '$translate', ModulesCtrl]);

  function ModulesCtrl($rootScope, $scope, restFulService, $translate){

    $scope.modules = [];

    /**
    * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    * Methods
    * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    */
    function getModules()
    {
      restFulService.get('module/all')
      .then(function(response){
        $scope.modules = response;
      });
    }

    /**
    * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    * Events
    * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    */
    $scope.treeOptions = {
      beforeDrop: function(e) {
        restFulService.put('module/saveOrder', $scope.modules)
        .then(function(response){
          $scope.modules = response;
          $rootScope.modules = response;
          $translate('MESSAGES.SUCCESS').then(function (translate) {
            $.smkAlert({
              text: translate,
              type: 'success',
              position: 'bottom-left'
            });
          });
        });
        return true;
      },
    };

    $scope.toggleModule = function(item)
    {
      item.active = !item.active;
      restFulService.put('module/update/'+ item.id, {'active':item.active} )
      .then(function(response){
        $rootScope.modules = response;
        $translate('MESSAGES.SUCCESS').then(function (translate) {
          $.smkAlert({
            text: translate,
            type: 'success',
            position: 'bottom-left'
          });
        });
      });
    };

    /**
    * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    * Watch end Calls
    * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    */
    getModules();

  }

})();
