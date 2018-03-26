import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { Graficas1Component } from './graficas1/graficas1.component';
import { Pages_Routes } from './pages.routes';


@NgModule({


  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  exports:[
    
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
    
  ],
  imports:[SharedModule,Pages_Routes]
  
})
export class PagesModule { }
