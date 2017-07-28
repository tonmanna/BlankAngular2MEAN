import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

declare var $: any;
@Component({
    template: "<a routerLink='/homepage/1'>HomePage2</a>",
})
export class HomePageComponent {
    constructor(private route: ActivatedRoute) {
        // empty
    }
}
