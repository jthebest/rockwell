
# Web application Cron schedule

Build a simple web application that will act as a task scheduler for simple tasks.  Specifically, the task is to ping a website and scrape the headers (or first 1000 characters).  The application should take a Cron syntax expression and a URL as input, and then execute the job according to the schedule.

Use any language (C#, Java, Javascript, Go, etc.)

Provide a web API (REST, GraphQL, etc.)

You can build the application to run locally, or in a public cloud (Azure, AWS, GCP) using whatever technology stacks are available for you in that environment.

You do not need to include authentication.

UI is mandatory (Angular is a plus)

You must keep your code in a source control repository (GitHub, Bitbucket, etc.)

Do not build a Cron expression parser, there are many to choose from.

1. For this application the language used by Angular 14,  typescript 4, Python 3.7, python 3.10.

2. The web application was developed in Angular and the principal componente was scrape.componente.ts, it have the api gateway link h ttps://hg7xygvm17.execute-api.us-east-2.amazonaws.com/five/crontaskrock  that invoke lambda function, and generated the script to execute in WSL too.

3. The Web API was REST in angular and connect by API gateway a lambda function in AWS in python that scrape the header from url, the API was export into carpet AWS from this respository.

4. Windows subsystem for linux was installed on Windows to execute the cron in python,  that scripts scriptCron2WSL.py for execute the cron and scriptScap2WSL for execute the task both files was generated by Angular after invoke ascyn lambda_function.lambda_handler and into carpet WSL those is saved from to respository.

5. The source control was created in github (<https://github.com/jthebest/rockwell.git>), by  alias jthebest

# rockwell

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
