module votingModule {
    "use strict";


    export interface ISurvey {
        getSurvey(): void;



    }

    export class surveyCtrl implements ISurvey {
        public static id: string = votingModule.AngularGlobals.votingModule + ".surveyCtrl";
        stateService: services.IVotingModuleStateService;
        $scope: any;
        status: any;
        questions: models.IVotingData;
        surveylist: any[];
        answer: any[];
        questype: any[];
        results: any[];
        surve: any;

        static $inject = ["votingModule.services.VotingModuleService", "votingModule.services.VotingModuleStateService", "$scope"]

        constructor(private service: services.IVotingModuleService,
            stateService: services.IVotingModuleStateService, $scope: ng.IScope ) {
            this.stateService = stateService;
            this.$scope = $scope;
            var vm = this;
            this.getSurvey();
           

        }
         onchange():void{
            
    }

        getSurvey(): void {
            var result = this.service.getVote();
            result.then((response: ng.IHttpPromiseCallbackArg<models.IVotingData>): void => {
                this.questions = response.data;
                this.surve = this.questions;
                this.results = this.questions[0];
                this.$scope.survey = angular.copy(this.questions[0])
                
            }

            )
        }




    }

    angular.module(AngularGlobals.votingModule)
        .controller(surveyCtrl.id, surveyCtrl).filter(() => { })

}



