module votingModule {
    "use strict";

    export interface IDetailctrl {

       
        vote: votingModule.models.IVotingData;
    }

     export interface IVoteparams extends ng.route.IRouteParamsService {
        voteId: number;
    }

    export class DetailCrtl implements IDetailctrl {
        vote: votingModule.models.IVotingData;
        public static id: string = votingModule.AngularGlobals.votingModule + ".DetailCrtl";
       
        static $inject = ["$routeParams","votingModule.services.VotingModuleService", "votingModule.services.VotingModuleStateService"];

        constructor(private $routeParams: IVoteparams,
           
            private service: services.IVotingModuleService,
            stateService: services.IVotingModuleStateService
        ) {

            var voteResource = service.getVoteById();
            voteResource.get({ voteId: $routeParams.voteId },
                (data: votingModule.models.IVotingData) => {
                    this.vote = data;
                    console.log(this.vote)
                });
            
        }

     


    }
    angular.module(AngularGlobals.votingModule)
        .controller(DetailCrtl.id, DetailCrtl);
}


