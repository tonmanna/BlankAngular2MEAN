import { Component,ViewEncapsulation  } from '@angular/core';
import '../assest/css/styles.css';
declare var $:any;
@Component({
    selector: 'my-app',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(){
    }
}
