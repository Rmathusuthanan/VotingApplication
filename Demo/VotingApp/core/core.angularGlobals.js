var app;
(function (app) {
    var core;
    (function (core) {
        "use strict";
        var AngularGlobals = (function () {
            function AngularGlobals() {
            }
            AngularGlobals.appCore = "app.core";
            AngularGlobals.appCoreConstants = "app.core.Constants";
            AngularGlobals.$HTTP = "$http";
            AngularGlobals.$STATEPARAMS = "$stateParams";
            AngularGlobals.$STATEPROVIDER = "$stateProvider";
            AngularGlobals.$INJECTOR = "$injector";
            return AngularGlobals;
        }());
        core.AngularGlobals = AngularGlobals;
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=core.angularGlobals.js.map