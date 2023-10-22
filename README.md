# AngularNotesTakingAppUsingASPMinimalAPI
## Client (named note-taking-app in the Repo)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

### Build

Before building the project the packages have to be installed : `npm install`

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

For Github Pages to load the live Angular link we have to build the Angular app using the command `ng build --output-path docs --base-href /AngularNotesTakingAppUsingASPMinimalAPI/` which will create the artifacts under `doc/` directory under root of the repo. Github Pages use `doc` directory to run the Angular app. Github runs pipeline as a trigger to update the pages for every commit in the repo. The live link for Angular app is `https://misbahadam.github.io/AngularNotesTakingAppUsingASPMinimalAPI/notes`.

### Run

Run `ng serve` for starting the Angular server and navigate to `http://localhost:4200/`.

## Server (named Backend in the Repo)

This project was generated using Visual Studio and it used ASP.NET Core Minimal Web API.

### Build

On Visual Studio Code go to 'Run and Debug' or use 'Ctrl+Shift+D' and use '.NET Core Launch (Web)', it will open a server on `https://localhost:7169`

If IIS is setup then it can also run on it on the url: `https://localhost:13629`

The Github workflow has been implemented in this repo which builds continuously for every commit made on the `main` branch. CI/CD Pipeline was implemented as part of it and it builds and deploys the ASP.NET app on the Azure Web App using the publish profile secret stored under secrets of Github.
The live link for Web app is `https://dotnetbackendangular.azurewebsites.net`

### Nuget Packages

If the build fails due to Nuget packages then following Nuget packages have to be installed by using 'Manage Nuget Packages for Solution' under solution settings.

  - Microsoft.AspNetCore.OpenApi
  
  - Microsoft.EntityFrameworkCore
  
  - Microsoft.EntityFrameworkCore.Design
  
  - Microsoft.EntityFrameworkCore.Sqlite
  
  - Swahsbuckle.AspNetCore

Swashbuckle is used to generate swagger and we are using Sqlite which makes it easy to have the Database as part of the Repo. Since the application usage is in small scale Sqlite has been used.

## Extra features

This application also has code for Tracking and Analytics, but I commented this due to non supportive Google Analytics Library with the latest Angular Version. It only had support till version `@angular/core@"^8.0.0"`.
If this project is downgraded anytime in the future then the Google Analytics can be used, if not we have to find other feasible Analytics solution like adding a marker to each Http request for example.

## Problems faced

The API.NET Webapp is using SqLite as a database storage and the azure deployment has not connected the deployed webapp to the database which is on the repo. We can use SQL Server to use this app but due to cost of the usage had to discard it for now. The connection string can be found under the app settings in the repo. 

Another problem faced was with the CORS which is already enabled but still the Github pages cannot reach the azure webapp. In order to reach the azure webapp without such restriction we have to open a chrome instance using following command under the command prompt:

`chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security`

Eventually web security was causing the CORS denial on azure webapp.

## Tracking and Analytics of the live application

Tracking is a way to analyze the user behaviour and also the application behaviour.

What do we measure?

We can measure following:

  - User Behaviour and engagement
  - Performance metrics
  - Errors

How do we measure them?

We can use the following methods:

  - Using JavaScript libraries like Google Analytics or any custom tracking solution script.
  - Log client side actions like page views and events.
  - Log server side events like for example API requests. Also performance monitoring by using for example Datadog.
  - Error handling implemented on the server side with the help of logs.

How do we visualize the Data?

We can follow these ways:

  - Implementing Dashboards as in Google Analytics.
  - Reports that can provide insights.
  - Creating alerts as in the cloud for monitoring the application behaviour.
  - We can also use User feedback as in some applications where they ask users about the site usage experience.

Ways to implement the tracking solution:

  - We can use Google Analytics as mentioned earlier or there is a microsoft solution too.
  - Implementing logs and error reporting (Can use cloud monitoring tools and App Insights along with log analytics for this) and can setup an alert by creating action groups (can provide email alerts)
  - Report generation which can be achieved with tools that allow to create dashboards and alerts.
