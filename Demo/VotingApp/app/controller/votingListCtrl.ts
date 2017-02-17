/**
 * Created by Mathu on 2/10/2017.
 */
    ///<reference path="../../typings/main.ts"/>
    ///<reference path="../votingModule.angularGlobals.ts"/>


module votingModule {

    export interface IVotingListCtrl {}

    export class votingListCtrl implements IVotingListCtrl {
        public static id: string = votingModule.AngulaGlobals.votingModule +".votingListCtrl";
        name:string;
        static $inject = ["$scope"];

        constructor($scope: ng.IScope){
            var vm = this;
            this.name = "Mathu"

        }

    }

}