module votingModule {
    "use strict";

    export interface IAddNewQuestion {
        cancel(): void;
        voteListadd(): models.IVotingData;
       
             
    }

export class AddNewQuestionCtrl implements IAddNewQuestion {
        public static id: string = votingModule.AngularGlobals.votingModule + ".AddNewQuestionCtrl";
        stateService: services.IVotingModuleStateService;
       
        successAlert: string;
        datePick: any;
        datePick1: any;
        dateOptions: any;
        formats: any;
        open: any;
        $scope: ng.IScope;

        static $inject = ["votingModule.services.VotingModuleService", "votingModule.services.VotingModuleStateService","$scope"];

        constructor(
            party: models.IVotingData, $scope: ng.IScope,
            private service: services.IVotingModuleService,
            stateService: services.IVotingModuleStateService
            
           
        ) {
            this.stateService = stateService;
            var vm = this;
            this.$scope = $scope;
          
            this.datePick = new Date();
            this.datePick1 = new Date();
            
        }
        cancel(): void {
            this.stateService.home();
        }
       

    }
    angular.module(AngularGlobals.votingModule)
        .controller(AddNewQuestionCtrl.id, AddNewQuestionCtrl);
}


