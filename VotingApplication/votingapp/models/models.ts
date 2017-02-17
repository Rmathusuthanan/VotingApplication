module votingModule.models {
    'use strict';
    export interface IVotingData {
        _id:number
        voteId: number,
        voteKey: string;
        Number: string;
        Name: string;
        description: string;
        effectiveDate: Date;
        startTime: string;
        expiryDate: Date,
        endTime: string;
        managerContactKey: string;
        voters: any[]
        Status: string;
        Statuses: any[];
        //voterchoice: string; 
        voterQuestions: any[];
       // answers: any[];
        createdOn: Date;
        createdBy: string;
        lastUpdated: Date;
        lastUpdateBy: string;
        lastUpdateByContactKey: string;
        select: string;
        questiontype: any[];

    }

    export class VotingData implements IVotingData {
        constructor(
            public _id:number,
            public voteId: number,
            public voteKey: string,
            public Number: string,
            public Name: string,
            public description: string,
            public effectiveDate: Date,
            public startTime: string,
            public expiryDate: Date,
            public endTime: string,
            public managerContactKey: string,
            public voters: any[],
            public Status: string,
            public Statuses: any[],
           // public voterchoice: string,
            public voterQuestions: any[],
           //public answers: any[],
            public createdOn: Date,
            public createdBy: string,
            public lastUpdated: Date,
            public lastUpdateBy: string,
            public lastUpdateByContactKey: string,
            public select: string,
            public questiontype: any[]

        ) {
        }

    }
}