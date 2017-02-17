///<reference path="../typings/main.ts"/>
///<reference path="core.angularGlobals.ts"/>
///<reference path="core.constants.ts"/>
///<reference path="core.module.ts"/>
var app;
(function (app) {
    var core;
    (function (core) {
        var Services;
        (function (Services) {
            'use strict';
            // ReSharper disable once InconsistentNaming
            var IPartSettingsService = (function () {
                function IPartSettingsService($http, clientContext) {
                    this.$http = $http;
                    this.baseUrl = clientContext.baseUrl;
                    this.authToken = clientContext.authToken;
                }
                //Get the published iPart settings for the given contentItem (iPart) on the content.
                IPartSettingsService.prototype.getSettings = function (contentKey, contentItemKey) {
                    return this.$http.get(this.baseUrl + "api/ContentTypeSettings", {
                        params: { contentKey: contentKey, contentItemKey: contentItemKey },
                        headers: { 'RequestVerificationToken': this.authToken }
                    }).then(function (response) {
                        if (response.data)
                            return response.data;
                        return response.data;
                    });
                };
                IPartSettingsService.injection = function () {
                    return [core.AngularGlobals.$HTTP, core.AngularGlobals.appCoreConstants,
                        function (h, c) { return new IPartSettingsService(h, c); }];
                };
                IPartSettingsService.id = core.AngularGlobals.appCore + ".IPartSettingsService";
                return IPartSettingsService;
            }());
            Services.IPartSettingsService = IPartSettingsService;
            // register service with main module
            angular
                .module(core.AngularGlobals.appCore)
                .factory(IPartSettingsService.id, IPartSettingsService.injection());
        })(Services = core.Services || (core.Services = {}));
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=core.Services.iPartSettingsService.js.map