# Cypress-CucumberTask

# NOTE!:
This project is written on Cypress version 7.3.0. I you have a newer version installed on your machine you need to execute the following command:
```bash
npm install cypress@7.3.0
```

## Technology
Cypress, Cucumber, Javascript

## Framework Architecture Description

**Features:** all feature files with all their scenarious described in steps. Theese files are the ones displayed on the Cypress runner.
	
**Step Definitions:** The feature steps implementation. Each .feature file has a folder with the same name under the step_definitions folder. In each of the step definitions subfolders there are .js files with the scenarious implementations. In these files only the general steps are described. They are calling all the logic from the Page Helps or Commands files. No locators, variables or other logic is exposed in the step definitions.
	
**Commands:** here we are adding new cypress commands or overwriting existing ones. A cypress command is an action that can be performed throughout all pages or elements (eg. Login, type, click).
	
**Helpers:** these are the helper funtions specific for a particular page. Each of the pages has its own file(s) where all page manipulations are described. The majority of the logic is in these files, but it can use functions from the general pageHelpers (has functions, applicable for all pages). It uses data from the Fixtures files and gets all URLs from the routes.js file.
	
**pageHelpers:** here all general functions are described. They can be reused from all pages. They are used from the Page Helpers and the cypress commands.
	
**Routes.js:** an example helper folder that contains all URLs from the system
	
**Page Objects:** the locators and the names of all elements on all testable pages. Each page has its own file where the locators and names of all used elements are described. 

![My Image](https://user-images.githubusercontent.com/95483945/175565598-8aa978cf-51a4-4409-bfad-5116c0d067f1.png)



## Prerequisites:
Node.js
some IDE


## Local Dev Setup
Clone the repository to your local computer

```bash
git clone 
```

Use the package manager npm to install dependencies:
```bash
npm install
```

Run the API automation tests:
```bash
npx cypress open
```
## Open the Html Report:
Execute the command 
```bash
node cucumber-html-report.js
```

Find the report in cypress/reports/cucumber-html.report.js and open in browser

![My Image](https://user-images.githubusercontent.com/95483945/175564162-8b100381-bb59-4f49-9891-0425d854b2b3.png)

See all different test results and test metadata on the report.

Open thereport for a paeticular feature file

![My Image](https://user-images.githubusercontent.com/95483945/175564897-6d1d3c68-37d0-4065-8439-ba212c8a7f78.png)

Expand each statement to see the commands executes

 ![My Image](https://user-images.githubusercontent.com/95483945/175565111-5214e99c-50d3-41cd-939e-b50f711885c9.png)



