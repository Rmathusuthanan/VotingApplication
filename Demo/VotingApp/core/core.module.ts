///<reference path="../typings/main.ts"/>
///<reference path="app.module.ts"/>
///<reference path="core.angularGlobals.ts"/>




((): void=> {
    "use strict";
    // declare core module and pass in core angular dependencies
    angular.module(app.core.AngularGlobals.appCore, [
        "ngSanitize",
        "ui.router",
        "ngLoadingSpinner"
    ]);
})();