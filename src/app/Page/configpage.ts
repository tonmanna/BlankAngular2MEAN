import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var $:any;
@Component({
    template: '<h1>HELLO2</h1>',
})
export class Configpage implements OnInit {
    constructor(private route: ActivatedRoute){
    }
    ngOnInit(){

    }
}
