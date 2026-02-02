export class LogoutPage {
    constructor(page) {
        this.page = page;
        this.checkB = page.locator('//input[@name="check_all"]')
        this.logoutP = page.locator("//input[@name='logout']")

    }
    async logOutPage() {
        await this.logoutP.click()
    }
    async checkBox() {
        await this.checkB.click()
    }

}