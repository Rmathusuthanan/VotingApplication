/**
 * Created by Mathu on 2/10/2017.
 */
///<reference path="../../typings/main.ts"/>
///<reference path="../votingModule.angularGlobals.ts"/>

(():void =>{

   angular.module(votingModule.AngulaGlobals.votingModule,[]);
    angular.module("app").requires.push(votingModule.AngulaGlobals.votingModule);

});