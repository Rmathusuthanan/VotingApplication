(function () {
    "use strict";
    angular.module(votingModule.AngularGlobals.votingModule, ["ui.bootstrap", "ui.bootstrap.tpls", "moment-picker",
        "votingMock", "ui.grid", "ui.grid.edit", "ui.grid.pagination", "ui.grid.autoResize",
        "ngAnimate", "ngSanitize", "ngTouch", "ngDialog", "ngMessages"]);
    angular.module("app").requires.push(votingModule.AngularGlobals.votingModule);
})();
//# sourceMappingURL=votingModule.Module.js.map