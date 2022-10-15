import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

import { MapaComponent } from './mapa/mapa.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        // canActivate: [LoginGuardGuard, AdminGuard, VerificaTokenGuard],
        children: [
            { path: 'mapa', component: MapaComponent },
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
