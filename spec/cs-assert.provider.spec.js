describe('Provider: csAssert', function () {
    'use strict';

    var defaultMessage = 'Assertion failed!';
    var service;

    beforeEach(function () {
        module('conta.assert');

        inject(function ($injector) {
            service = $injector.get('csAssert');
        });
    });

    it('should exist', function () {
        expect(service).toBeTruthy();
    });

    describe('ok(assertion, message)', function () {
        it('should throw an Error with default message if assertion failed', function () {
            expect(function () {
                service.ok(false);
            }).toThrow(new Error(defaultMessage));
        });

        it('should throw an Error with custom message if assertion failed', function () {
            var customMessage = 'Some custom message';

            expect(function () {
                service.ok(false, customMessage);
            }).toThrow(new Error(customMessage));
        });

        it('should throw an Error with custom message and params if assertion failed', function () {
            var customMessage = 'Some custom message';
            var param1 = [1, 2, 3];
            var param2 = { abc: 'test' };

            expect(function () {
                service.ok(false, customMessage, param1, param2);
            }).toThrow(new Error(customMessage + '\n0: ' + JSON.stringify(param1) + '\n1: ' + JSON.stringify(param2)));
        });

        it('otherwise should not throw any Error', function () {
            expect(function () {
                service.ok(true);
            }).not.toThrow();
        });
    });
});