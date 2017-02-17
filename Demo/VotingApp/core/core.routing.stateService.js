///<reference path="../typings/main.ts"/>
///<reference path="core.angularGlobals.ts"/>
var app;
(function (app) {
    var core;
    (function (core) {
        var routing;
        (function (routing) {
            'use strict';
            var StateService = (function () {
                function StateService($injector) {
                    this.$injector = $injector;
                }
                StateService.prototype.go = function (to, params) {
                    var state = this.$injector.get("$state");
                    state.go(to, params);
                };
                StateService.injection = function () {
                    return [core.AngularGlobals.$INJECTOR,
                        function (i) { return new StateService(i); }];
                };
                StateService.id = core.AngularGlobals.appCore + ".StateService";
                return StateService;
            }());
            routing.StateService = StateService;
            // register service with main module
            angular
                .module(core.AngularGlobals.appCore)
                .factory(StateService.id, StateService.injection());
        })(routing = core.routing || (core.routing = {}));
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=core.routing.stateService.js.map