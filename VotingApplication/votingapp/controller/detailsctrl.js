var votingModule;
(function (votingModule) {
    "use strict";
    var DetailCrtl = (function () {
        function DetailCrtl($routeParams, service, stateService) {
            var _this = this;
            this.$routeParams = $routeParams;
            this.service = service;
            var voteResource = service.getVoteById();
            voteResource.get({ voteId: $routeParams.voteId }, function (data) {
                _this.vote = data;
                console.log(_this.vote);
            });
        }
        DetailCrtl.id = votingModule.AngularGlobals.votingModule + ".DetailCrtl";
        DetailCrtl.$inject = ["$routeParams", "votingModule.services.VotingModuleService", "votingModule.services.VotingModuleStateService"];
        return DetailCrtl;
    }());
    votingModule.DetailCrtl = DetailCrtl;
    angular.module(votingModule.AngularGlobals.votingModule)
        .controller(DetailCrtl.id, DetailCrtl);
})(votingModule || (votingModule = {}));
//# sourceMappingURL=detailsctrl.js.map