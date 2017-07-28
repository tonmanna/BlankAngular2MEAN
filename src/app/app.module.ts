import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule, JsonpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { Routing } from "./app.routes";
import { HomePageComponent } from "./Component/HomePage";
import { ConfigPageComponent } from "./Component/ConfigPage";

import { MenubarComponent } from "./Component/MenuBar";
import { ContactUsComponent } from "./Component/ContactUs";

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
        HomePageComponent,
        ConfigPageComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
