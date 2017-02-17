
    module votingModule.service {
       export interface IVotingModuleService {
            getProductResource(): ng.resource.IResourceClass<any>;
        }

      

        export class votingDataservices
            implements IVotingModuleService {

            static $inject = ["$resource"];
            constructor(private $resource: ng.resource.IResourceService) {

            }

            getProductResource(): ng.resource.IResourceClass<any> {
                return this.$resource("/api/votes/:voteId");
            }
        }
        angular
            .module(votingModule.AngularGlobals.votingModule)
            .factory("votingDataservices", votingDataservices);

    }


