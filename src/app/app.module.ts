import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Routing } from './app.routes';
import { HomepageComponent } from './Page/homepage'
import { ConfigpageComponent } from './Page/configpage'

import { MenubarComponent} from './Component/MenuBar/menubar.component'
import { ContactUsComponent} from './Component/ContactUs/contactus.component'

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
        MenubarComponent,
        ContactUsComponent,
        HomepageComponent,
        ConfigpageComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
