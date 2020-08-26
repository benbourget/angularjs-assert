(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name conta.assert
     */
    angular.module('conta.assert', []);

    /**
     * @ngdoc provider
     * @name csAssert
     *
     * @description
     * The module provides a set of assertion functions for verifying invariants.
     */
    angular.module('conta.assert').provider('csAssert', function () {
        var defaultMessage = 'Assertion failed!';
        var service = {
            ok: ok,
        };

        this.ok = ok;

        /**
         * Returns instance of service.
         */
        this.$get = function () {
            return service;
        }

        /**
         * @ngdoc method
         * @name ok
         * @methodOf csAssert
         *
         * @description
         * Checks the assertion:
         * If it's false then throws an Error with custom or default message.
         * Otherwise does nothing.
         *
         * @param {boolean} assertion The assertion to be checked.
         * @param {string} message Custom message to be thrown.
         *
         * @usage
         * csAssert.ok(angular.isObject(result), 'Result should be and object');
         */
        function ok(assertion, message) {
            if (!assertion) {
                var buildArgs = '';
                var args = Array.prototype.slice.call(arguments, 2);

                if (args.length > 0) {
                    args.forEach(function (element, index) {
                        buildArgs += '\n' + index + ': ' + JSON.stringify(element);
                    });
                }

                throw new Error((message || defaultMessage) + buildArgs);
            }
        }
    });
}());