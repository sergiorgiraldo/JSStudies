> npm init

> npm install http-server --save-dev

> npm install cypress --save-dev

In package.json

    "scripts": {
        "start": "http-server",
        "cypress": "cypress open"
    }

> npx cypress open
    
* follow the instructions from the Cypress application
* adjust the configuration in the _cypress.config.js_ file
* add tests to the _cypress/e2e_ folder
