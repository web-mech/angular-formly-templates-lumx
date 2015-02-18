(function () {
  'use strict';
  angular.module('demo')
    .directive('shmckFormData', shmckFormData);

  function shmckFormData() {
    return {
      templateUrl: 'app/components/formData.tmpl.html',
      scope: {
        formData: '='
      }
    };
  }

}());
