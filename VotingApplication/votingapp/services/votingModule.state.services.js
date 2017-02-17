//This class wraps our generic state service and allows us to keep state switching
// logic / code out of the controller
'use strict';
var votingModule;
(function (votingModule) {
    var services;
    (function (services) {
        var StateService = app.core.routing.StateService;
        var VotingModuleStateService = (function () {
            function VotingModuleStateService(state) {
                this.state = state;
            }
            VotingModuleStateService.prototype.editData = function (voteId) {
                console.log("change state");
                //this.state.go("listsVotes.edit", { Id: Id });
                this.state.go("detailsVote", { voteId: voteId });
                this.state.go("takeSurvey", { voteId: voteId });
                console.log("changed");
            };
            VotingModuleStateService.prototype.home = function () {
                this.state.go("listsVotes");
            };
            VotingModuleStateService.injection = function () {
                return [StateService.id,
                    function (rss) { return new VotingModuleStateService(rss); }];
            };
            VotingModuleStateService.id = votingModule.AngularGlobals.votingModuleServices + ".VotingModuleStateService";
            return VotingModuleStateService;
        }());
        services.VotingModuleStateService = VotingModuleStateService;
        angular
            .module(votingModule.AngularGlobals.votingModule)
            .factory(VotingModuleStateService.id, VotingModuleStateService.injection());
    })(services = votingModule.services || (votingModule.services = {}));
})(votingModule || (votingModule = {}));
//# sourceMappingURL=votingModule.state.services.js.map