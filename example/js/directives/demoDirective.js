define(['ng-registry'], function (registry) {
  registry.directive('formatPrice', function () {
    return {
      link: function (scope, element, attrs) {
        scope.$watch(attrs.formatPrice, function(value) {
          if(angular.isDefined(value)) {
            value = value.toFixed(2).toString().replace(".", ",");
            element.html(value);
          }
        });
      }
    };
  });
});