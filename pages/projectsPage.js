const { config } = require("../codecept.conf");
const { I } = inject();

module.exports = {
    newProjectButton: "button#create-project-nav",

    waitForOpen() {
        I.waitInUrl(`${config.baseUrl}/v2/projects/own`);
        I.waitForClickable(this.newProjectButton);
    }
}
