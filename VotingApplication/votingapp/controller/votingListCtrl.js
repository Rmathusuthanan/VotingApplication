var votingModule;
(function (votingModule) {
    "use strict";
    console.log("mid");
    var VotingListCtrl = (function () {
        function VotingListCtrl(service, stateService, $filter, $http) {
            this.service = service;
            this.$http = $http;
            var vm = this;
            this.$http = $http;
            this.setupGrids();
            console.log("service start");
            console.log(service);
            console.log("service end");
            this.getresult();
        }
        VotingListCtrl.prototype.getresult = function () {
            var _this = this;
            var result = this.service.getVote();
            console.log(result);
            result.then(function (response) {
                var anyParties = {};
                anyParties = response.data;
                _this.gridApiOptions.data = anyParties;
                _this.deleteRow = function (row) {
                    var index = this.gridApiOptions.data.indexOf(row.entity);
                    this.gridApiOptions.data.splice(index, 1);
                };
                _this.gridApi.grid.columns[2].filters[0].term;
            });
        };
        VotingListCtrl.prototype.setupGrids = function () {
            var _this = this;
            var options = {
                paginationPageSizes: [1, 2, 3],
                paginationPageSize: 1,
                useExternalPagination: true,
                enableFiltering: true,
            };
            console.log("Page Size " + options.paginationPageSize);
            options.enablePagination = false;
            options.onRegisterApi = function (gridApi) {
                _this.registerApi(gridApi);
                _this.gridApi = gridApi;
            };
            options.enableColumnMenus = false;
            options.userExternalSorting = true;
            options.enableFiltering = true,
                options.columnDefs = [{ name: "", field: 'select', cellTemplate: '<a  href="#/details/{{row.entity[\'voteId\']}}">{{row.entity[col.field]}}</a>' },
                    { displayName: "No", field: "Number" }, { displayName: "Name", field: "Name" },
                    { name: "effectiveDate", cellFilter: 'date:"yyyy-MM-dd"' },
                    { name: "expiryDate", cellFilter: 'date:"yyyy-MM-dd"' },
                    { name: "Status" },
                    { name: "createdBy" },
                    { name: "createdOn", cellFilter: 'date:"yyyy-MM-dd"' },
                    { name: " ", field: "delete", cellTemplate: '<a href="" ng-click="grid.appScope.vm.deleteRow(row)">delete</a>' }],
                options.enableHorizontalScrollbar = 0;
            options.enableVerticalScrollbar = 0;
            this.gridApiOptions = options;
        };
        ;
        VotingListCtrl.prototype.registerApi = function (gridApi) {
            this.gridApi = gridApi;
            console.log('Registering API');
        };
        ;
        VotingListCtrl.prototype.getdata = function () {
        };
        VotingListCtrl.id = votingModule.AngularGlobals.votingModule + ".VotingListCtrl";
        VotingListCtrl.$inject = ["votingModule.services.VotingModuleService"];
        return VotingListCtrl;
    }());
    votingModule.VotingListCtrl = VotingListCtrl;
    angular.module(votingModule.AngularGlobals.votingModule)
        .controller(VotingListCtrl.id, VotingListCtrl).filter(function () { });
})(votingModule || (votingModule = {}));
//# sourceMappingURL=votingListCtrl.js.map