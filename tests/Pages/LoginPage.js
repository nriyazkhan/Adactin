import { TIMEOUT } from "node:dns";

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.name = page.locator('//input[@name="username"]')
        this.password = page.locator('//input[@name="password"]')
        this.loginButton = page.locator('//input[@name="login"]')

    }

    async visitUrl() {
        await this.page.goto('https://adactinhotelapp.com/')
    }

    async userName(uname) {
        await this.name.fill(uname)
    }

    async userPassword(upassword) {
        await this.password.fill(upassword)
    }

    async clickButton() {
        await this.loginButton.click()
        
    }

}