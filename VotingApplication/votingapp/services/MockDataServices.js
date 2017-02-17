var votingModule;
(function (votingModule) {
    var service;
    (function (service) {
        var votingDataservices = (function () {
            function votingDataservices($resource) {
                this.$resource = $resource;
            }
            votingDataservices.prototype.getProductResource = function () {
                return this.$resource("/api/votes/:voteId");
            };
            votingDataservices.$inject = ["$resource"];
            return votingDataservices;
        }());
        service.votingDataservices = votingDataservices;
        angular
            .module(votingModule.AngularGlobals.votingModule)
            .factory("votingDataservices", votingDataservices);
    })(service = votingModule.service || (votingModule.service = {}));
})(votingModule || (votingModule = {}));
//# sourceMappingURL=MockDataServices.js.map