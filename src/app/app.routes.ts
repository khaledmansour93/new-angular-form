import { Routes } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { HighchartsChartComponent } from './highcharts-chart/highcharts-chart.component';

export const appRoutes: Routes = [
    { path: 'add-form', component: AddFormComponent },
    { path: 'charts', component: HighchartsChartComponent },
    { path: '', redirectTo: 'add-form', pathMatch: 'full' }
];