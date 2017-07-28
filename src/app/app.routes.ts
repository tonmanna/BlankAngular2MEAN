import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./Component/HomePage";
import { ConfigPageComponent } from "./Component/ConfigPage";

const routes: Routes = [
    {path: "", redirectTo: "homepage", pathMatch : "full"},
    {path: "homepage", component: HomePageComponent, data: {storiesType: "news"}},
    {path: "homepage/:id", component: ConfigPageComponent}
];

export const Routing = RouterModule.forRoot(routes);
