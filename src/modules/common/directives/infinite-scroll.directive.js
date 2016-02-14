'use strict';

module.exports = /*@ngInject*/
  function infiniteDirective($rootScope, $window, $timeout) {

    function findPos(obj) {
      var result = {
        left: 0,
        top: 0
      };

      if (obj.offsetParent) {
        do {
          result.left += obj.offsetLeft;
          result.top += obj.offsetTop;
          //(obj = obj.offsetParent)
          obj = obj.offsetParent;
        } while (obj.offsetParent);

      }
      return result;
    }

    return {
      link: function (scope, elem, attrs) {
        var checkWhenEnabled, handler, scrollDistance, scrollEnabled;
        $window = angular.element($window);
        scrollDistance = 0;
        if (attrs.infiniteScrollDistance !== null) {
          scope.$watch(attrs.infiniteScrollDistance, function (value) {
            scrollDistance = parseInt(value, 10);
            return scrollDistance;
          });
        }
        scrollEnabled = true;
        checkWhenEnabled = false;
        if (attrs.infiniteScrollDisabled !== null) {
          scope.$watch(attrs.infiniteScrollDisabled, function (value) {
            scrollEnabled = !value;
            if (scrollEnabled && checkWhenEnabled) {
              checkWhenEnabled = false;
              return handler();
            }
          });
        }
        handler = function () {
          var elementBottom, remaining, shouldScroll, windowBottom;
          windowBottom = window.screen.height + window.pageYOffset;
          elementBottom = findPos(elem[0]).top + elem[0].offsetHeight;
          remaining = elementBottom - windowBottom;
          shouldScroll = remaining <= window.pageYOffset * scrollDistance;
          if (shouldScroll && scrollEnabled) {
            if ($rootScope.$$phase) {
              return scope.$eval(attrs.infiniteScroll);
            } else {
              return scope.$apply(attrs.infiniteScroll);
            }
          } else if (shouldScroll) {
            checkWhenEnabled = true;
            return checkWhenEnabled;
          }
        };
        $window.on('scroll', handler);
        scope.$on('$destroy', function () {
          return $window.off('scroll', handler);
        });
        return $timeout((function () {
          if (attrs.infiniteScrollImmediateCheck) {
            if (scope.$eval(attrs.infiniteScrollImmediateCheck)) {
              return handler();
            }
          } else {
            return handler();
          }
        }), 0);
      }

    };

  };

