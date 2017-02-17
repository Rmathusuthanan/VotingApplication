var votingModule;
(function (votingModule) {
    "use strict";
    var takesurveyCtrl = (function () {
        function takesurveyCtrl(voteid, service, stateService, $scope, $timeout) {
            var _this = this;
            this.stateService = stateService;
            this.service = service;
            this.$scope = $scope;
            this.$scope.score = 0;
            var vm = this;
            this.voteid = voteid;
            this.getSurveyById(voteid);
            this.$scope.load = function () {
                var scores = [];
                for (var i = 0; i < _this.$scope.score; i++) {
                }
            };
        }
        takesurveyCtrl.prototype.cancel = function () {
            this.stateService.home();
        };
        takesurveyCtrl.prototype.getSurveyById = function (voteId) {
            var _this = this;
            var result = this.service.getVoteById(this.voteid);
            result.then(function (response) {
                _this.surveyData = response.data;
                _this.$scope.ques = _this.surveyData.voterQuestions;
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
//# sourceMappingURL=takeSurvey.js.map