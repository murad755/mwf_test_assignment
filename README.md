# Playwright Test Runner With Typescript

An example project demonstrating automation of playwright tests using page object design pattern framework.

## Application Under Test
We are using https://practicetestautomation.com/practice-test-login/ as the Application Under Test.

## Prerequisites:
* Node above 8.x.x
* npm

## Local development:
Change directory to the project root. Rename ".env.example" to ".env".

Run the following commands:
```bash
npm install

# Development
npm run dev

# Test in chrome browser with generated report
npm run test:chrome-report
# Test in Firefox browser with generated report
npm run test:firefox-report
# Test in Safari browser with generated report
npm run test:safari-report

# Run all tests in Headed mode
npm run headed:all
```
