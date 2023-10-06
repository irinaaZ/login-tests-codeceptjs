const faker = require('@faker-js/faker');
const constants = require("../pages/constants");
const { config } = require("../codecept.conf");

Feature('Login');
Scenario('Validation error should be shown while login without entered email', ({ I, loginPage }) => {
    loginPage.openLoginPage();
    loginPage.doLogin('', '');
    loginPage.seeValidationError(constants.validationMessages.emptyEmail);
});

Scenario('Validation error should be shown while login without entered password', ({ I, loginPage }) => {
    loginPage.openLoginPage();
    loginPage.doLogin(faker.faker.internet.email(), '');
    loginPage.seeValidationError(constants.validationMessages.emptyPassword);
});

Scenario('Validation error should be shown while login with invalid credentials', async ({ I, loginPage }) => {
    loginPage.openLoginPage();
    loginPage.doLogin(faker.faker.internet.email(), faker.faker.string.alpha(3));
    loginPage.seeValidationError(constants.validationMessages.invalidCredentials);
});

Scenario('Login should be done with valid credentials', ({ I, loginPage, projectsPage }) => {
    loginPage.openLoginPage();
    loginPage.doLogin(config.userData.email, secret(config.userData.password));
    loginPage.waitForLoginIsPassed();
    projectsPage.waitForOpen();
});