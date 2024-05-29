import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
dotenv.config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  expect: {
    timeout: 20000,
  },
  timeout: 30000,
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',


    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

      /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */


  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: `Chrome`,
      use: {
        browserName: `chromium`,
        channel: `chrome`,
        viewport: { width: 1720, height: 850 },
        ignoreHTTPSErrors: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        baseURL: 'https://practicetestautomation.com/',
      }
    },

    {
      name: `Firefox`,
      use: {
        browserName: `firefox`,
        viewport: { width: 1720, height: 850 },
        ignoreHTTPSErrors: true,
        headless: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        baseURL: 'https://practicetestautomation.com/',
      }
    },

    {
      name: `Safari`,
      use: {
        browserName: `webkit`,
        viewport: { width: 1720, height: 850 },
        ignoreHTTPSErrors: true,
        baseURL: 'https://practicetestautomation.com/',
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`
      }
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
