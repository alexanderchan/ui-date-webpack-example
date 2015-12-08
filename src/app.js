import jQuery from 'jquery';
import angular from 'angular';
import uiDate from './date.js';

// themes required outside of uiDate to allow customization
require('jquery-ui/themes/base/jquery-ui.css');
require('jquery-ui/themes/base/jquery.ui.datepicker.css');

angular.module('MyTest', [uiDate.name])
  .controller('MyCtrl', ['$scope', function($scope) {
    $scope.hello = 'hi';
  }]);
