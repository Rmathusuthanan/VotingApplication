module votingModule {
    "use strict";

    export interface Itakesurvey {
        cancel(): void;
        getSurveyById(voteId): void;
        

    }

    export class takesurveyCtrl implements Itakesurvey {
        public static id: string = votingModule.AngularGlobals.votingModule + ".takesurveyCtrl";
        stateService: services.IVotingModuleStateService;
        service: services.IVotingModuleService;
        voteid: any
        surveyData: models.IVotingData;
        $scope: any;


        static $inject = ["voteId", "votingModule.services.VotingModuleService",
            "votingModule.services.VotingModuleStateService", "$scope", "$timeout"];

        constructor(
            voteid: string,
             service: services.IVotingModuleService,
            stateService: services.IVotingModuleStateService,
            $scope: ng.IScope, $timeout: ng.ITimeoutService
        ) {
            this.stateService = stateService;
            this.service = service;
            this.$scope = $scope;
             this.$scope.score = 0
            var vm = this;
            this.voteid = voteid;
            this.getSurveyById(voteid);

            this.$scope.load = () => {
              var scores=[]
                for (var i = 0; i < this.$scope.score; i++){

                  
                }
            }


        }
      
        

        cancel(): void {
            
            this.stateService.home();
        }

        getSurveyById(voteId): void {
            var result = this.service.getVoteById(this.voteid);
            result.then((response: ng.IHttpPromiseCallbackArg<models.IVotingData>): void => {
                this.surveyData = response.data;
                this.$scope.ques = this.surveyData.voterQuestions
                console.log(this.surveyData)


            });

        }



    }
    angular.module(AngularGlobals.votingModule)
        .controller(takesurveyCtrl.id, takesurveyCtrl);
}



