module votingModule.services {

    "use strict"

    export interface IVotingModuleService {
        getVote(): ng.IPromise<models.IVotingData>;
        getVoteById(voteId: string): ng.IPromise<models.IVotingData>
        saveData(voteId: string, party: models.IVotingData): ng.IPromise<models.IVotingData>;
        
     }
     
    export class VotingModuleService implements IVotingModuleService {
        public static id: string = AngularGlobals.votingModuleServices + ".VotingModuleService";
        URL: string;
        List: string;
        constructor(private $http: ng.IHttpService,
            clientContext: app.core.IConstants)
            {
            this.URL = "/api/votes";
            this.List = "api/votingapp"
            }
           
        getVote(): ng.IPromise<models.IVotingData> {
            
            return this.$http.get(this.List)
                .then((response: ng.IHttpPromiseCallbackArg<models.IVotingData>): any => {
                    return response;
              });
            
        }
        getVoteById(voteId: string): ng.IPromise<models.IVotingData> {

            return this.$http.get(this.URL +"/"+ voteId)
                .then((response: ng.IHttpPromiseCallbackArg<models.IVotingData>): any => {
                    return response;
                });

        }
        saveData(voteId: string, party: models.IVotingData): ng.IPromise<models.IVotingData> {
            return this.$http.post(this.URL + "/" + voteId, party)
              .then((response: ng.IHttpPromiseCallbackArg<models.IVotingData>): any => {
                    return response;
                    
                });
            
        }
       
      
        public static injection(): any[] {
            return [app.core.AngularGlobals.$HTTP, app.core.AngularGlobals.appCoreConstants,
                (h, c) => new VotingModuleService(h, c)];
        }
           
        
    }

    angular
        .module(votingModule.AngularGlobals.votingModule)
        .factory(VotingModuleService.id, VotingModuleService.injection());
    
    
}



