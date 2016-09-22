import { Component } from '@angular/core';
import { MenubarService } from './menubarservice';
@Component({
    selector : 'menu-bar',
    templateUrl : './views/components/menu/menubar.html',
    providers : [MenubarService]
})
export class Menubar{
    constructor(public menubarservice : MenubarService){

    }
}
