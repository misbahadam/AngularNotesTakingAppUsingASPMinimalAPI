# AngularNotesTakingAppUsingASPMinimalAPI
## Client (named note-taking-app in the Repo)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

### Build

Before building the project the packages have to be installed : `npm install`

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Run

Run `ng serve` for starting the Angular server and navigate to `http://localhost:4200/`.

## Server (named Backend in the Repo)

This project was generated using Visual Studio and it used ASP.NET Core Minimal Web API.

### Build

On Visual Studio Code go to 'Run and Debug' or use 'Ctrl+Shift+D' and use '.NET Core Launch (Web)', it will open a server on `https://localhost:7169`

If IIS is setup then it can also run on it on the url: `https://localhost:13629`

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
