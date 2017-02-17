///<reference path="../typings/main.ts"/>
///<reference path="core.angularGlobals.ts"/>
var app;
(function (app) {
    var core;
    (function (core) {
        "use strict";
        var data = angular.element(document.querySelector("#__ClientContext")).val();
        var context = angular.fromJson(data);
        //Auth token is stored in the page in another field
        context.authToken = angular.element(document.querySelector("#__RequestVerificationToken")).val();
        angular.module(core.AngularGlobals.appCore)
            .constant(core.AngularGlobals.appCoreConstants, context);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=core.constants.js.map