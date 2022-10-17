import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { MapaComponent } from './mapa/mapa.component';
import { ChoferesComponent } from './choferes/choferes.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        // canActivate: [LoginGuardGuard, AdminGuard, VerificaTokenGuard],
        children: [
            { path: 'mapa', component: MapaComponent },
            { path: 'choferes', component: ChoferesComponent },
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
