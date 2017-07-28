import "core-js/es6";
import "core-js/es7/reflect";
import "zone.js/dist/zone";

// angular 2
import "@angular/platform-browser";
import "@angular/platform-browser-dynamic";

import "@angular/core";
import "@angular/common";

import "@angular/http";
import "@angular/router";

//// Angular 2
import "@angular/platform-browser";
import "@angular/platform-browser-dynamic";

import "@angular/core";
import "@angular/common";

import "@angular/http";
import "@angular/router";

// rxJS
// import "rxjs";
import "rxjs/Rx";

if (process.env.ENV === "production") {
    // export
}else {
    Error.stackTraceLimit = Infinity;
    /* tslint:disable no-var-requires */
    require("zone.js/dist/long-stack-trace-zone");
}
