import angular from 'angular';
import uiDate from 'angular-ui-date';

// themes required outside of uiDate to allow customization
require('jquery-ui/themes/base/jquery-ui.min.css');
// require('jquery-ui/themes/ui-darkness/jquery-ui.min.css');

export default angular.module('MyTest', [uiDate.name])
  .controller('MyCtrl', ['$scope', function($scope) {
    $scope.hello = 'hi';
  }]);
