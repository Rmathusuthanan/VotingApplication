var votingModule;
(function (votingModule) {
    var models;
    (function (models) {
        'use strict';
        var VotingData = (function () {
            function VotingData( voteId, voteKey, Number, Name, description, effectiveDate, startTime, expiryDate, endTime, managerContactKey, voters, Status, Statuses, 
                // public voterchoice: string,
                voterQuestions, 
                //public answers: any[],
                createdOn, createdBy, lastUpdated, lastUpdateBy, lastUpdateByContactKey, select, questiontype) {
                this.voteId = voteId;
                this.voteKey = voteKey;
                this.Number = Number;
                this.Name = Name;
                this.description = description;
                this.effectiveDate = effectiveDate;
                this.startTime = startTime;
                this.expiryDate = expiryDate;
                this.endTime = endTime;
                this.managerContactKey = managerContactKey;
                this.voters = voters;
                this.Status = Status;
                this.Statuses = Statuses;
                this.voterQuestions = voterQuestions;
                this.createdOn = createdOn;
                this.createdBy = createdBy;
                this.lastUpdated = lastUpdated;
                this.lastUpdateBy = lastUpdateBy;
                this.lastUpdateByContactKey = lastUpdateByContactKey;
                this.select = select;
                this.questiontype = questiontype;
            }
            return VotingData;
        }());
        models.VotingData = VotingData;
    })(models = votingModule.models || (votingModule.models = {}));
})(votingModule || (votingModule = {}));
//# sourceMappingURL=models.js.map