var votingModule;
(function (votingModule) {
    "use strict";
    var surveyCtrl = (function () {
        function surveyCtrl(service, stateService, $scope) {
            this.service = service;
            this.stateService = stateService;
            this.$scope = $scope;
            var vm = this;
            this.getSurvey();
        }
        surveyCtrl.prototype.onchange = function () {
        };
        surveyCtrl.prototype.getSurvey = function () {
            var _this = this;
            var result = this.service.getVote();
            result.then(function (response) {
                _this.questions = response.data;
                _this.surve = _this.questions;
                _this.results = _this.questions[0];
                _this.$scope.survey = angular.copy(_this.questions[0]);
            });
        };
        surveyCtrl.id = votingModule.AngularGlobals.votingModule + ".surveyCtrl";
        surveyCtrl.$inject = ["votingModule.services.VotingModuleService", "votingModule.services.VotingModuleStateService", "$scope"];
        return surveyCtrl;
    }());
    votingModule.surveyCtrl = surveyCtrl;
    angular.module(votingModule.AngularGlobals.votingModule)
        .controller(surveyCtrl.id, surveyCtrl).filter(function () { });
})(votingModule || (votingModule = {}));
//# sourceMappingURL=surveyctrl.js.map