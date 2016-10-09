import { Component } from '@angular/core';
import { MenubarService } from './menubar.service';
@Component({
    selector : 'menu-bar',
    template : require('./menubar.component.html'),
    styles : [require('./menubar.component.css')] ,
    providers : [MenubarService]
})

export class Menubar{
    constructor(private menubarService : MenubarService){

    }
}