var votingModule;
(function (votingModule) {
    var AngularGlobals = (function () {
        function AngularGlobals() {
        }
        AngularGlobals.votingModule = "votingModule";
        AngularGlobals.votingModuleServices = "votingModule.services";
        AngularGlobals.votes = "votes";
        return AngularGlobals;
    }());
    votingModule.AngularGlobals = AngularGlobals;
})(votingModule || (votingModule = {}));
//# sourceMappingURL=votingModule.angularGlobals.js.map