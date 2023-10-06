const { config } = require("../codecept.conf");
const { I } = inject();

module.exports = {
    container: ".auth-content",
    fields: {
        email: 'input[type=email]',
        password: 'input[type=password]'
    },
    validationElem: '.error-message',
    loginButton: { css: 'button[type=submit]' },
    loadingButtonSpinner: '[class*="is-loading"]',
    spinnerElement: ".el-loading-spinner",

    openLoginPage() {
        I.amOnPage(config.baseUrl);
        I.waitInUrl(`${config.baseUrl}/v2/login`);
        I.waitForInvisible(this.spinnerElement);
        I.waitForElement(this.container);
    },

    doLogin(email, password) {
        I.waitForElement(this.fields.email);
        I.waitForElement(this.fields.password);
        I.waitForClickable(this.loginButton);
        I.fillField(this.fields.email, email);
        I.fillField(this.fields.password, password);
        I.click(this.loginButton);
        I.waitForInvisible(this.loadingButtonSpinner);
    },

    waitForLoginIsPassed() {
        I.waitForInvisible(this.loginButton);
        I.waitForInvisible(this.spinnerElement);
    },

    seeValidationError(expectedMessage) {
        I.waitForElement(this.validationElem);
        I.see(expectedMessage, this.validationElem);
    },
}
