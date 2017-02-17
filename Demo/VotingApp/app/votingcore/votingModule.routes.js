/**
 * Created by Mathu on 2/10/2017.
 */
///<reference path="../../typings/main.ts"/>
///<reference path="votingModule.module.ts"/>
///<reference path="../controller/votingListCtrl.ts"/>
(function () {
    "use strict";
    angular.module(votingModule.AngulaGlobals.votingModule).
        config(config);
    config.$inject = [app.core.AngularGlobals.$STATEPROVIDER, app.core.AngularGlobals.appCoreConstants, "$urlRouterProvider"];
    function config($stateProvider, constant, $urlRouterProvider) {
        var baseUrl = constant.baseUrl;
        $urlRouterProvider.otherwise("/");
        $stateProvider.state("listVotes", {
            url: '/',
            templateUrl: baseUrl + "Areas/xx/xx/html",
            controller: votingModule.votingListCtrl.id,
            controllerAs: "vm"
        });
    }
});
//# sourceMappingURL=votingModule.routes.js.map