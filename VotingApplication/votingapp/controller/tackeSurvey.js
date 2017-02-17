var votingModule;
(function (votingModule) {
    "use strict";
    var takesurveyCtrl = (function () {
        function takesurveyCtrl(voteid, service, stateService, ngDialog, $scope, $timeout) {
            this.service = service;
            this.ngDialog = ngDialog;
            this.stateService = stateService;
            this.$scope = $scope;
            var vm = this;
            this.voteid = voteid;
            this.getSurveyById(voteid);
        }
        takesurveyCtrl.prototype.cancel = function () {
            this.stateService.home();
        };
        takesurveyCtrl.prototype.getSurveyById = function (voteId) {
            var _this = this;
            var result = this.service.getVoteById(this.voteid);
            result.then(function (response) {
                _this.surveyData = response.data;
                console.log(_this.surveyData);
            });
        };
        takesurveyCtrl.id = votingModule.AngularGlobals.votingModule + ".takesurveyCtrl";
        takesurveyCtrl.$inject = ["voteId", "votingModule.services.VotingModuleService",
            "votingModule.services.VotingModuleStateService", "$scope", "$timeout"];
        return takesurveyCtrl;
    }());
    votingModule.takesurveyCtrl = takesurveyCtrl;
    angular.module(votingModule.AngularGlobals.votingModule)
        .controller(takesurveyCtrl.id, takesurveyCtrl);
})(votingModule || (votingModule = {}));
//# sourceMappingURL=tackeSurvey.js.map