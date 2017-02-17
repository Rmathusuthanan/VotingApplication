
module votingModule {
    "use strict";

    export interface IVotingListCtrl {
        getresult(): void;
        pagedResult: models.IVotingData;
        gridApiOptions: uiGrid.IGridOptionsOf<uiGrid.pagination.IGridPaginationApi>;
        gridApi: uiGrid.IGridApiOf<uiGrid.pagination.IGridPaginationApi>;
        registerApi(gridApi: uiGrid.IGridApiOf<uiGrid.pagination.IGridPaginationApi>): void;
        getdata(): void;

    }
    console.log("mid")
    export class VotingListCtrl implements IVotingListCtrl {
        public static id: string = AngularGlobals.votingModule + ".VotingListCtrl";
        gridApi: uiGrid.IGridApiOf<uiGrid.pagination.IGridPaginationApi>;
        pagedResult: models.IVotingData;
        gridApiOptions: uiGrid.IGridOptionsOf<uiGrid.pagination.IGridPaginationApi>;
        deleteRow;
       

        static $inject = ["votingModule.services.VotingModuleService"];

        constructor(private service: services.IVotingModuleService,
            stateService: services.IVotingModuleStateService, $filter,
            public $http: ng.IHttpService
        ) {

            var vm = this
            this.$http = $http;
            this.setupGrids();
            console.log("service start");
            console.log(service);
            console.log("service end");
            this.getresult();

        }



        getresult(): void {
            var result = this.service.getVote();
            console.log(result);
            result.then((response: ng.IHttpPromiseCallbackArg<models.IVotingData>): void => {
                var anyParties = <any>{};
                anyParties = response.data
              
                this.gridApiOptions.data = anyParties;
                this.deleteRow = function (row) {
                    var index = this.gridApiOptions.data.indexOf(row.entity);
                    this.gridApiOptions.data.splice(index, 1);
                }

                this.gridApi.grid.columns[2].filters[0].term;
                

            });

        }

        setupGrids(): void {
            var options = <uiGrid.IGridOptionsOf<uiGrid.pagination.IGridPaginationApi>>{
                paginationPageSizes: [1, 2, 3],
                paginationPageSize: 1,
                useExternalPagination: true,
                enableFiltering: true,
            };
            console.log("Page Size " + options.paginationPageSize);
            options.enablePagination = false;
            options.onRegisterApi = (gridApi) => {
                this.registerApi(gridApi);
                this.gridApi = gridApi;

            }

            options.enableColumnMenus = false;
            options.userExternalSorting = true;
        
            options.enableFiltering = true,

            options.columnDefs = [{ name: "", field: 'select', cellTemplate: '<a  href="#/details/{{row.entity[\'voteId\']}}">{{row.entity[col.field]}}</a>'},
                    { displayName: "No", field: "Number" }, { displayName: "Name", field: "Name" },
                    { name: "effectiveDate", cellFilter: 'date:"yyyy-MM-dd"'},
                    { name: "expiryDate", cellFilter: 'date:"yyyy-MM-dd"'},
                    { name: "Status" },
                    { name: "createdBy" },
                    { name: "createdOn", cellFilter: 'date:"yyyy-MM-dd"' },
                    { name: " ", field: "delete", cellTemplate: '<a href="" ng-click="grid.appScope.vm.deleteRow(row)">delete</a>'}],
               
            options.enableHorizontalScrollbar = 0;
            options.enableVerticalScrollbar = 0;
            this.gridApiOptions = options;

        };

        registerApi(gridApi: uiGrid.IGridApiOf<uiGrid.pagination.IGridPaginationApi>): void {
            this.gridApi = gridApi;
            console.log('Registering API');
        };
        getdata(): void {


        }

    }

    angular.module(AngularGlobals.votingModule)
        .controller(VotingListCtrl.id, VotingListCtrl).filter(function () { });


}
