var votingModule;
(function (votingModule) {
    var services;
    (function (services) {
        "use strict";
        var VotingModuleService = (function () {
            function VotingModuleService($http, clientContext) {
                this.$http = $http;
                this.URL = "/api/votes";
                this.List = "api/votingapp";
            }
            VotingModuleService.prototype.getVote = function () {
                return this.$http.get(this.List)
                    .then(function (response) {
                    return response;
                });
            };
            VotingModuleService.prototype.getVoteById = function (voteId) {
                return this.$http.get(this.URL + "/" + voteId)
                    .then(function (response) {
                    return response;
                });
            };
            VotingModuleService.prototype.saveData = function (voteId, party) {
                return this.$http.post(this.URL + "/" + voteId, party)
                    .then(function (response) {
                    return response;
                });
            };
            VotingModuleService.injection = function () {
                return [app.core.AngularGlobals.$HTTP, app.core.AngularGlobals.appCoreConstants,
                    function (h, c) { return new VotingModuleService(h, c); }];
            };
            VotingModuleService.id = votingModule.AngularGlobals.votingModuleServices + ".VotingModuleService";
            return VotingModuleService;
        }());
        services.VotingModuleService = VotingModuleService;
        angular
            .module(votingModule.AngularGlobals.votingModule)
            .factory(VotingModuleService.id, VotingModuleService.injection());
    })(services = votingModule.services || (votingModule.services = {}));
})(votingModule || (votingModule = {}));
//# sourceMappingURL=votingModule.service.js.map