(function () {
    "use strict";
    angular
        .module(votingModule.AngularGlobals.votingModule)
        .config(config);
    config.$inject = [app.core.AngularGlobals.$STATEPROVIDER, app.core.AngularGlobals.appCoreConstants, "$urlRouterProvider"];
    function config($stateProvider, constants, $urlRouterProvider) {
        var baseUrl = constants.baseUrl;
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("listsVotes", {
            url: "/",
            templateUrl: baseUrl + "Areas/VotingApplication/votingapp/templates/votingList.html",
            controller: votingModule.VotingListCtrl.id,
            controllerAs: "vm",
            resolve: {
                voteid: ['$stateParams', function ($stateParams) { return $stateParams.voteId; }],
                votes: resolveBatch
            }
        })
            .state("detailsVote", {
            url: "/details/:voteId",
            templateUrl: baseUrl + "Areas/VotingApplication/votingapp/templates/votingdetails.html",
            controller: votingModule.DetailController.id,
            controllerAs: "vm",
            resolve: {
                voteId: ['$stateParams', function ($stateParams) { return $stateParams.voteId; }]
            }
        })
            .state("addNewQuestion", {
            url: "/NewForm",
            templateUrl: baseUrl + "Areas/VotingApplication/votingapp/templates/addNewSurvey.html",
            controller: votingModule.AddNewQuestionCtrl.id,
            controllerAs: "vm",
            resolve: {
                voteid: ['$stateParams', function ($stateParams) { return $stateParams.voteId; }],
                votes: resolveBatch
            }
        })
            .state("Survey", {
            url: "/survey",
            templateUrl: baseUrl + "Areas/VotingApplication/votingapp/templates/Survey.html",
            controller: votingModule.surveyCtrl.id,
            controllerAs: "vm",
            resolve: {
                voteid: ['$stateParams', function ($stateParams) { return $stateParams.voteId; }],
                votes: resolveBatch
            }
        })
            .state("takeSurvey", {
            url: "/takesurvey/:voteId",
            templateUrl: baseUrl + "Areas/VotingApplication/votingapp/templates/takeSurvey.html",
            controller: votingModule.takesurveyCtrl.id,
            controllerAs: "vm",
            resolve: {
                voteId: ['$stateParams', function ($stateParams) { return $stateParams.voteId; }],
                votes: resolveBatch
            }
        })
            .state("Result", {
            url: "/result",
            templateUrl: baseUrl + "Areas/VotingApplication/votingapp/templates/Resultpage.html",
            controller: votingModule.surveyCtrl.id,
            controllerAs: "vm",
            resolve: {
                voteId: ['$stateParams', function ($stateParams) { return $stateParams.voteId; }],
                votes: resolveBatch
            }
        });
    }
    function resolveBatch($stateParams, service) {
        return service.getVote()
            .then(function (response) {
            if (response) {
                return response;
            }
            return null;
        });
    }
    resolveBatch.$inject = [app.core.AngularGlobals.$STATEPARAMS, "votingModule.services.VotingModuleService"];
})();
//# sourceMappingURL=votingModule.routes.js.map