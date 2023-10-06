/** @type {CodeceptJS.MainConfig} */
const { sensitiveData } = require("./credentials.config");

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  baseUrl: 'https://dashboard.visme.co',
  userData: {
    email: sensitiveData.USER_EMAIL,
    password: sensitiveData.USER_PASSWORD,
  },
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://dashboard.visme.co',
      show: true,
      waitForTimeout: 3000,
      waitForAction: 1000,
      waitForNavigation: "load",
    }
  },
  include: {
    loginPage: "./pages/login-page.js",
    projectsPage: "./pages/projectsPage.js",
  },
  timeout: 10000,
  name: 'test_task_login',
  allure: {
    enabled: true,
    require: "allure-codeceptjs",
  },
  retryFailedStep: {
    enabled: false,
    retries: 2
  }
}