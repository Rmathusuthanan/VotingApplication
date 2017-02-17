/**
 * Created by Mathu on 2/17/2017.
 */
var app = angular.module("colours",[]);

app.controller("MainCtrl", function ($scope) {
    $scope.colour = [{name:"Red"},
        {name:"Blue"},
        {name:"Ornge"},
        {name:"Yellow"}
    ]

});