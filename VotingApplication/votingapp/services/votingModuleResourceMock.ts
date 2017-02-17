
module votingModule.services {
    "use strict";
    var mockResource = angular
        .module("votingMock", ["ngMockE2E"]);
    mockResource.run(mockRun);
    mockRun.$inject = ["$httpBackend"];
    function mockRun($httpBackend: ng.IHttpBackendService): void {
        var votes: models.IVotingData[] = [];
        var vote: models.IVotingData;

        vote = new models.VotingData(1, "1", "111", "Iphone 7 Review", "Iphone Launched at Nov 2006", new Date(2016,12,10),"9:00", new Date(2016, 12, 12),"17:00", "001",
            [{ "Name": "Robles Boyle", "Id": "10001" }, { "Name": "Davis", "Id": "10002" },
                { "Name": "Hamilton", "Id": "10003" }, { "Name": "Watson", "Id": "10004" },
                { "Name": "Linda", "Id": "10005" }],"Active", [{ "detail": "Active" },
                { "detail": "Hold" }, { "detail": "Closed" }],
                [{ "Id": 101, "name": "What are the feature of Iphone 7 ?", "type": "checkbox", "answers": [{ "quesId": 101, "Id": 101, "name": "Fingerprint" }, { "quesId": 101, "Id": 102, "name": "accelerometer" }, { "quesId": 101, "Id": 103, "name": "barometer" }, { "quesId": 101, "Id": 104, "name": "gyro" }]},
                    { "Id": 102, "name": "The Process is faster then IPhone 6 ?", "type": "radioButton", "answers": [{ "quesId": 102, "Id": 101, "name": "Yes" }, { "quesId": 102, "Id": 102, "name": "No" }]}]
            , new Date(2016, 10, 1, 10), "Manager", new Date(2016, 10, 1), "Manager", "001", "select", [{ "Id": 1, "option": "Text Field" }, { "Id": 2, "option": "radioButton" }, {"Id":3, "option": "CheckBox" }]);
        votes.push(vote);
     
        vote = new models.VotingData(2, "2", "112", "Samsung Note 7", "Samsung Note 7 Review", new Date(2016, 11, 28), "10:00", new Date(2016, 11, 30), "18:00", "002",
            [{ "Name": "Robles Boyle", "Id": "10001" }, { "Name": "Davis", "Id": "10002" },
            { "Name": "Hamilton", "Id": "10003" }, { "Name": "Watson", "Id": "10004" },
            { "Name": "Linda", "Id": "10005" }],"Active", [{ "detail": "Active" },
                { "detail": "Hold" }, { "detail": "Closed" }],
            [{ "Id": 101, "name": "Quality of  Samsung note 7", "type": "radioButton", "answers": [{ "quesId": 101, "Id": 101, "name": "Excelent" }, { "quesId": 101, "Id": 102, "name": "Good" }, { "quesId": 101, "Id": 103, "name": "Better" }] }],
            new Date(2016, 11, 20), "Manager", new Date(2016, 11, 20, 14.00), "Manager", "002", "select", [{ "Id": 1, "option": "Text Field" }, { "Id": 2, "option": "radioButton" }, { "Id": 3, "option": "CheckBox" }]);
        votes.push(vote);


        var votingURL = "/api/votes";

        $httpBackend.whenGET(votingURL).respond(votes);
        console.log(votes)

        var editingRegex = new RegExp(votingURL + "/[0-9][0-9]*", '');

        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var vote = { "voteId": 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < votes.length; i++) {
                    if (votes[i].voteId == id) {
                        vote = votes[i];
                        break;
                    }
                }
            }
            return [200, vote, {}];
        });


        $httpBackend.whenGET(/api/).respond(function (method, url, data) {
            return [200, votes, {}];
        });

        $httpBackend.whenPOST(editingRegex).respond(function (method, url, data, headers) {
            console.log('Received these data:', method, url, data, headers)
            var vote = angular.fromJson(data);

            if (!vote.voteId) {
               
                vote.voteId = votes[votes.length - 1].voteId + 1;
                votes.push(vote);
            }
            else {
                
                for (var i = 0; i < votes.length; i++) {
                    if (votes[i].voteId == vote.voteId) {
                        votes[i] = vote;
                        break;
                    }
                };
            }
            return [200, vote, {}];
        });


        $httpBackend.whenGET(/templates/).passThrough();
    }
}




