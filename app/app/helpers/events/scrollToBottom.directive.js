(function(){
  'use strict';

  angular
  .module('helpers')
  .directive('scrollToBottom', [function(){

    function linker(scope, element, attrs){

      if (scope.$last){
        var parent = element.parent();
        parent.animate({scrollTop: parent[0].scrollHeight}, 'slow');
      }

    }

    return {
      restrict: 'A',
      link: linker
    };

  }]);

})();
