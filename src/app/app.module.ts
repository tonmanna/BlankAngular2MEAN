import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Routing } from './app.routes';
import { Homepage } from './Page/homepage'
import { Configpage } from './Page/configpage'

import { Menubar} from './Component/MenuBar/menubar.component'
import { ContactUs} from './Component/ContactUs/contactus.component'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        Routing
    ],
    declarations: [
        AppComponent,
        Menubar,
        ContactUs,
        Homepage,
        Configpage
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
