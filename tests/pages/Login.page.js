import { expect } from "@playwright/test";

export class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto("https://www.redmine.org/login");
    }

    async setLogin(user) {
        await this.page.fill("#username", user.login);
    }
    async setPass(user) {
        await this.page.fill("#password", user.pass);
    }

    async submitForm() {
        await this.page.locator('input[type="submit"]').click();
    }

    async doLogin(user) {
        await this.goto();
        await this.setLogin(user);
        await this.setPass(user);
        await this.submitForm();
    }

    async isLogin(user) {
        if ((await this.page.url()) === "https://www.redmine.org/my/page") {
            await expect(await this.page.locator("a.user.active")).toHaveText(user.login);
            console.log("you have successfully logged in");
        } else {
            console.log("you have not logged in");
        }
    }
}
