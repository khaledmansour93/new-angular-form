import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddService } from './add.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  items = this.addService.getData();

  formValues: any;
  chart: any;

  creationForm = this.formBuilder.group({
    sample1: [''],
    sample2: [''],
    sample3: [''],
    sample4: [''],
    sample5: [''],
    sample6: [''],
    sample7: [''],
    sample8: [''],
    sample9: [''],
    sample10: ['']
  });

  constructor(
    private addService: AddService,
    private formBuilder: FormBuilder
  ) { }

  onSubmit(): void {
    this.formValues = this.creationForm.value;
    const values = Object.values(this.formValues).map(elem => {
      return Number(elem);
    });

    this.chart = new Chart({
      title: {
        text: 'Monthly Average Rainfall'
      },
      subtitle: {
        text: 'Source: WorldClimate.com'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
          'Aug', 'Sep', 'Oct'],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Rainfall (mm)'
        }
      },
      tooltip: {
        headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
          '<td style = "padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>', shared: true, useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        type: 'column',
        name: 'Tokyo',
        data: values
      }]
    });

    this.items = this.addService.clearForm();
    console.warn('Your data has been submitted', this.creationForm.value);
    this.creationForm.reset();
  }

  resetForm() {
    this.creationForm.reset();
  }

  ngOnInit(): void {
  }

}
