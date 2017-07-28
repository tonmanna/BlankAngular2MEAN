import { Component, ViewEncapsulation  } from '@angular/core';
declare var $: any;
@Component({
    selector: 'app-my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor() {
        $('body').append('HELLO');
    }
}
