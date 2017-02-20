module coloursApp {
    "use strict";

    export interface IColours {

        colours:string;
    }

    export class MailCtrl{
        public static id: string = "mainCtrl";
        colours:string;
        static $inject = ["$scope"];
        constructor() {

            this.colours=[{name:"Red"},{name:"Green"}]
        }

       
    }
    
    // register the controller with app
    angular.module("coloursApp")
        .controller(MailCtrl.id, MailCtrl);

}