﻿((): void=> {
    "use strict";
    // declare core module and pass in core angular dependencies
    angular
        .module("coloursApp", []);

    angular.module("app").requires.push("coloursApp");
})(); 