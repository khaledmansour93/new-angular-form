# HighchartsApp

The goal of this project is to display form data on a column chart in an Angular app using angular-highcharts library

## How to use angular-highcharts?

For this project, angular-highcharts is included using the [distribution package](https://www.npmjs.com/package/angular-highcharts)

## Development environment

- Nodejs v16.15.1
- npm v8.11.0
- Angular CLI v15.2.5
- IDE: VSCode

## Procedures

1. Create an Angular project called *new-angular-form* using the following command: ng new new-angular-form
2. Download and install [angular-highcharts](https://www.npmjs.com/package/angular-highcharts)
3. Modify *app.module.ts*, *add-form.component.ts* and *add-form.component.html* (For template: Remove *button* element) as described [here](https://www.npmjs.com/package/angular-highcharts)
4. Modify *add-form.component.ts* as described [here](https://www.tutorialspoint.com/angular_highcharts/angular_highcharts_combinations_column.htm)
5. Build app using the following command: ng-serve-o and the output should appear as follows:


![Samples add form](https://user-images.githubusercontent.com/41340307/232092583-d49ef93e-6dcd-40c2-afc3-43c0c4a6a9eb.PNG)

![Column chart highcharts](https://user-images.githubusercontent.com/41340307/232092653-7bd4b095-e218-4555-b583-e3044556822b.PNG)

![Column chart highcharts 2](https://user-images.githubusercontent.com/41340307/232092695-3d0f1eff-7adb-4086-bddb-cc289a71c56b.PNG)
