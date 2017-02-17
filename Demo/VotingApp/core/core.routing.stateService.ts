///<reference path="../typings/main.ts"/>
///<reference path="core.angularGlobals.ts"/>

module app.core.routing {
    'use strict';

    export interface IStateService {
        go(to: string, params?: {}): void;
    }

    export class StateService implements IStateService {
        public static id: string = AngularGlobals.appCore + ".StateService";

        constructor(private $injector: angular.auto.IInjectorService) {

        }

        go(to: string, params?: {}): void {
            var state = <ng.ui.IStateService>this.$injector.get("$state");
            state.go(to, params);
        }

        public static injection(): any[] {
            return [AngularGlobals.$INJECTOR,
                (i) => new StateService(i)];
        }
    }

    // register service with main module
    angular
        .module(AngularGlobals.appCore)
        .factory(StateService.id, StateService.injection());
}