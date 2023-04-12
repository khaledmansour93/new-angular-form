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


![Column chart highcharts](https://user-images.githubusercontent.com/41340307/231448624-1c327a70-021c-44d1-971c-cc8ad950600a.PNG)

![Column chart highcharts 2](https://user-images.githubusercontent.com/41340307/231448747-c4d56d05-4e88-4fc3-8c06-765a2e8a8c4c.PNG)

![Column chart highcharts 3](https://user-images.githubusercontent.com/41340307/231448762-fcc9cc62-0d26-45e5-b57f-069f7021fe4a.PNG)
