/**
 * Created by Mathu on 2/10/2017.
 */
///<reference path="../../typings/main.ts"/>
///<reference path="../votingModule.angularGlobals.ts"/>
var votingModule;
(function (votingModule) {
    var votingListCtrl = (function () {
        function votingListCtrl($scope) {
            var vm = this;
            this.name = "Mathu";
        }
        votingListCtrl.id = votingModule.AngulaGlobals.votingModule + ".votingListCtrl";
        votingListCtrl.$inject = ["$scope"];
        return votingListCtrl;
    }());
    votingModule.votingListCtrl = votingListCtrl;
})(votingModule || (votingModule = {}));
//# sourceMappingURL=votingListCtrl.js.map