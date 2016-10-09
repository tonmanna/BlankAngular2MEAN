import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Menubar} from './Component/MenuBar/menubar.component'
import { ContactUs} from './Component/ContactUs/contactus.component'
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        Menubar,
        ContactUs,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
