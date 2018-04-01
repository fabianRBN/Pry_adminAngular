import {URLSearchParams} from '@angular/http';
import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const pagesRoutes: Routes = [
    {
        path:'',
        component:PagesComponent,
        children: [
            {path:'dashboard'  , component: DashboardComponent},
            {path:'progress'  , component: ProgressComponent},
            {path:'grafica'  , component: Graficas1Component},
            {path: 'accout-settings', component: AccountSettingsComponent},
            {path: '', redirectTo:'/dashboard',pathMatch:'full'}
        ]
    },
    
] 
export const Pages_Routes = RouterModule.forChild(pagesRoutes);