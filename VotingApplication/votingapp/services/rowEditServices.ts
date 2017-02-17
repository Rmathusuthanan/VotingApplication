

module votingModule {

    export interface IRowEditServices {
        editRow: any;
    }


    export class rowEditServices implements IRowEditServices {
        editRow: any;
        static $inject = ['$modal']
        constructor(private $modal: ng.ui.bootstrap.IModalService, editRow) {
            var service = {};
            service.editRow = editRow;


        }
          
     
}

    angular
        .module(votingModule.AngularGlobals.votingModule)
        .service("rowEditServices", rowEditServices);
} 