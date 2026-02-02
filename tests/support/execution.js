import { chromium } from 'playwright';
import { setWorldConstructor } from '@cucumber/cucumber';
class Execution {
    constructor() {
        this.browser = null;
        this.context = null;
        this.page = null;
    }

    async openBrowser() {
        this.browser = await chromium.launch({ headless: false })
        this.context = await this.browser.newContext()
        this.page = await this.context.newPage()
    }

    async closeBrowser() {
        await this.browser.close()
        await this.context.close()
        await this.page.close()
    }
}

setWorldConstructor(Execution)