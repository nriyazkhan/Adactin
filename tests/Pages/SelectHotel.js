export class SelectHotel {
    constructor(page) {
        this.page = page;
        this.radiobtn = page.locator("//input[@name='radiobutton_0']")
        this.continuebtn = page.locator("//input[@name='continue']")

    }
    async radioButton() {
        await this.radiobtn.click()
    }
    async continueButton() {
        await this.continuebtn.click()
    }
}