var coloursApp;
(function (coloursApp) {
    "use strict";
    var MailCtrl = (function () {
        function MailCtrl() {
            this.colours = [{ name: "Red" }, { name: "Green" }];
        }
        MailCtrl.id = "mainCtrl";
        MailCtrl.$inject = ["$scope"];
        return MailCtrl;
    }());
    coloursApp.MailCtrl = MailCtrl;
    // register the controller with app
    angular.module("coloursApp")
        .controller(MailCtrl.id, MailCtrl);
})(coloursApp || (coloursApp = {}));
//# sourceMappingURL=colours.js.map