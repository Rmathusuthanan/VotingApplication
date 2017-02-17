
module votingModule {
    "use strict";
    export interface IVoterChoiceEdit {
        //getresult(): void;
       
    }
    export class VoterChoiceEditCtrl implements IVoterChoiceEdit {
        public static id: string = votingModule.AngularGlobals.votingModule + ".VoterChoiceEditCtrl";
        userObject: any;
        party: models.IVotingData;
        choice: any;
        static $inject = ["votingModule.services.VotingModuleService", "votingModule.DetailController" ]
        constructor(private service: services.IVotingModuleService)
          
            {

            var vm = this;
            this.getresult();
        }
       
        getresult(): void {
            var result = this.service.getVote();
            console.log(result);
            result.then((response: ng.IHttpPromiseCallbackArg<models.IVotingData>): void => {
                this.party = response.data;
                this.userObject = this.party.voterQuestions
              
                console.log(this.party.voterQuestions)
            });
        }

        
   
    }
    

    angular.module(AngularGlobals.votingModule)
        .controller(VoterChoiceEditCtrl.id, VoterChoiceEditCtrl);


}
