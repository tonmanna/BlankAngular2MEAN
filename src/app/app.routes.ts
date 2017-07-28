import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './Page/homepage';
import { ConfigpageComponent } from './Page/configpage'

const routes: Routes = [
    {path: '', redirectTo: 'homepage', pathMatch : 'full'},
    {path: 'homepage', component: HomepageComponent, data: {storiesType: 'news'}},
    {path: 'homepage/:id', component: ConfigpageComponent}
];

export const Routing = RouterModule.forRoot(routes);
