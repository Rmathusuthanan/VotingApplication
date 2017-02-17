//This class wraps our generic state service and allows us to keep state switching
// logic / code out of the controller
'use strict';
module votingModule.services {
    import StateService = app.core.routing.StateService;


    export interface IVotingModuleStateService {
        editData(voteId: string): void;
        home(): void;
    }

    export class VotingModuleStateService implements IVotingModuleStateService {
        public static id: string = AngularGlobals.votingModuleServices + ".VotingModuleStateService";

        constructor(private state: app.core.routing.IStateService) {
        }

        editData(voteId: string): void {
          console.log("change state");
            //this.state.go("listsVotes.edit", { Id: Id });
          this.state.go("detailsVote", { voteId: voteId });
          this.state.go("takeSurvey", { voteId: voteId })
            console.log("changed");
        }

        home(): void {
            this.state.go("listsVotes");
        }

        public static injection(): any[] {
            return [StateService.id,
                (rss) => new VotingModuleStateService(rss)];
        }
    }

        angular
        .module(AngularGlobals.votingModule)
        .factory(VotingModuleStateService.id, VotingModuleStateService.injection());
} 