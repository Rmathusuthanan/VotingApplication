var votingModule;
(function (votingModule) {
    var rowEditServices = (function () {
        function rowEditServices($modal, editRow) {
            this.$modal = $modal;
            var service = {};
            service.editRow = editRow;
        }
        rowEditServices.$inject = ['$modal'];
        return rowEditServices;
    }());
    votingModule.rowEditServices = rowEditServices;
    angular
        .module(votingModule.AngularGlobals.votingModule)
        .service("rowEditServices", rowEditServices);
})(votingModule || (votingModule = {}));
//# sourceMappingURL=rowEditServices.js.map