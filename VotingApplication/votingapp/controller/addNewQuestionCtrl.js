var votingModule;
(function (votingModule) {
    "use strict";
    var AddNewQuestionCtrl = (function () {
        function AddNewQuestionCtrl(party, $scope, service, stateService) {
            this.service = service;
            this.stateService = stateService;
            var vm = this;
            this.$scope = $scope;
            this.datePick = new Date();
            this.datePick1 = new Date();
        }
        AddNewQuestionCtrl.prototype.cancel = function () {
            this.stateService.home();
        };
        AddNewQuestionCtrl.id = votingModule.AngularGlobals.votingModule + ".AddNewQuestionCtrl";
        AddNewQuestionCtrl.$inject = ["votingModule.services.VotingModuleService", "votingModule.services.VotingModuleStateService", "$scope"];
        return AddNewQuestionCtrl;
    }());
    votingModule.AddNewQuestionCtrl = AddNewQuestionCtrl;
    angular.module(votingModule.AngularGlobals.votingModule)
        .controller(AddNewQuestionCtrl.id, AddNewQuestionCtrl);
})(votingModule || (votingModule = {}));
//# sourceMappingURL=addNewQuestionCtrl.js.map