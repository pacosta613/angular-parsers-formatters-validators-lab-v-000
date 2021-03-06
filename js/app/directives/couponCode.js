function couponCode() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, elem, attr, ngModel) {
      ngModel.$validators.coupon = function (value) {
        return (/\d{2}[a-z]{4}\d{2}/i).test(value);
      };
    }
  }
}

angular
  .module('app')
  .directive('couponCode', couponCode);
