import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Mediciones
import { MapaComponent } from './mapa/mapa.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ChoferesComponent } from './choferes/choferes.component';


@NgModule({
    declarations: [
        PagesComponent,
        MapaComponent,
        ChoferesComponent
        // HeaderComponent,
        // SidebarComponent,
        // FooterComponent
    ],
    exports: [
        PagesComponent
    ],
    imports: [

      SharedModule,
        // SelectModule,
        PAGES_ROUTES,
        // ChartsModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ]
})

export class PagesModule { }
