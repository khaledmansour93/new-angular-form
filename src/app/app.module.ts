import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Module needed to use FormBuilder
import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartComponent } from './highcharts-chart/highcharts-chart.component'; // Module needed to use Highcharts chart
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    HighchartsChartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ChartModule, // add ChartModule to your imports
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
