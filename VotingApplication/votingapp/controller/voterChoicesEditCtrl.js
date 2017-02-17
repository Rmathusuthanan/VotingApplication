var votingModule;
(function (votingModule) {
    "use strict";
    var VoterChoiceEditCtrl = (function () {
        function VoterChoiceEditCtrl(service) {
            this.service = service;
            var vm = this;
            this.getresult();
        }
        VoterChoiceEditCtrl.prototype.getresult = function () {
            var _this = this;
            var result = this.service.getVote();
            console.log(result);
            result.then(function (response) {
                _this.party = response.data;
                _this.userObject = _this.party.voterQuestions;
                console.log(_this.party.voterQuestions);
            });
        };
        VoterChoiceEditCtrl.id = votingModule.AngularGlobals.votingModule + ".VoterChoiceEditCtrl";
        VoterChoiceEditCtrl.$inject = ["votingModule.services.VotingModuleService", "votingModule.DetailController"];
        return VoterChoiceEditCtrl;
    }());
    votingModule.VoterChoiceEditCtrl = VoterChoiceEditCtrl;
    angular.module(votingModule.AngularGlobals.votingModule)
        .controller(VoterChoiceEditCtrl.id, VoterChoiceEditCtrl);
})(votingModule || (votingModule = {}));
//# sourceMappingURL=voterChoicesEditCtrl.js.map