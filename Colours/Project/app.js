/**
 * Created by Mathu on 2/17/2017.
 */
var app;
(function (app) {
    angular.module("colours", []).controller("MainCtrl", function ($scope) {
        $scope.colour = [{ name: "Red" },
            { name: "Blue" },
            { name: "Ornge" },
            { name: "Yellow" }
        ];
    });
})(app || (app = {}));
//# sourceMappingURL=app.js.map