import { Routes, RouterModule } from '@angular/router';
import { Homepage } from './Page/homepage';
import { Configpage } from './Page/configpage'

const routes: Routes = [
    {path: '', redirectTo: 'homepage', pathMatch : 'full'},
    {path: 'homepage', component: Homepage, data: {storiesType: 'news'}},
    {path: 'homepage/:id', component: Configpage}
];

export const Routing = RouterModule.forRoot(routes);