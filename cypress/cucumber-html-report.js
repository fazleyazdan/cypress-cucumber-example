//! to understand how to generate cucumber html reports, see docs below 

const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json-report',
	reportPath: './reports/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '131.0.6778.86'
        },
        device: 'Local test machine',
        platform: {
            name: 'window 11'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
        ]
    }
});






/* 
By default ‘cypress-cucumber-preprocessor’ plugin generate one cucumber-json file when we execute our BDD test cases.  So on the package.json file we should add the following code as we are just informing that we want a cucumber json report generated on the folder “cypress/cucumber-json”:

"cypress-cucumber-preprocessor": {
  "cucumberJson": {
   "generate": true,
   "outputFolder": "cypress/cucumber-json",
   "filePrefix": "",
   "fileSuffix": ".cucumber"
  }
}

-Save, then run the test cases. Refresh the project. You will see a folder created as  cypress/cucumber-json and Jason files as per feature.

-Get the plugin (Multiple-cucumber-html-reporter) to the system type:

npm install multiple-cucumber-html-reporter --save-dev
–Cucumber HTML Reporter plugin transforms the Cucumber JSON output to a beautiful html report. In order to let this happen add the below piece of code in a new  js file under cyress project as cypress>cucumber-html-report.js

const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './path-to-your-json-output/',
	reportPath: './path-where-the-report-needs-to-be/',
	metadata:{
        browser: {
            name: 'chrome',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
        ]
    }
});
-In this multiple-cucumber-html-reporter.js file needs few path update as:

jsonDir: the folder path of cucumber-json folder

reportPath: inside a new report folder

Example:

‘./reports/cucumber-htmlreport.html’

-You can do more update as browser, platform etc.

-Save the multiple-cucumber-html-reporter.js file.

– To generate the final html report just execute your test cases and Refresh the project. This module converts Cucumber’s JSON format to HTML reports.

– To generate the final html report we need to run this cucumber-html-report.js file. To do that, type and run: node +path of the file, ex: node cypress/cucumber-html-report.js

-Go inside the reports folder and copy the path of index.html file, past on browser; you will see a nice report.

*/