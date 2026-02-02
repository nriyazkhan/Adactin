export class BookHotel {
    constructor(page) {
        this.page = page;
        this.namefirst = page.locator("//input[@name='first_name']")
        this.namelast = page.locator("//input[@name='last_name']")
        this.homeaddress = page.locator("//textarea[@name='address']")
        this.ccnum = page.locator("//input[@name='cc_num']")
        this.cctype = page.locator("//select[@name='cc_type']")
        this.emonth = page.locator("//select[@name='cc_exp_month']")
        this.eyear = page.locator("//select[@name='cc_exp_year']")
        this.cvvnum = page.locator("//input[@name='cc_cvv']")
        this.bookedNow = page.locator("//input[@name='book_now']")

    }
    async firstName(startname) {
        await this.namefirst.fill(startname)
    }
    async lastName(endname) {
        await this.namelast.fill(endname)
    }
    async address(addr) {
        await this.homeaddress.fill(addr)
    }
    async creditCardNumber(credit) {
        await this.ccnum.fill(credit)
    }
    async creditCardType(credittype) {
        await this.cctype.selectOption(credittype)
    }
    async expiryMonth(expieryM) {
        await this.emonth.selectOption(expieryM)
    }
    async expiryYear(expieryY) {
        await this.eyear.selectOption(expieryY)
    }
    async cvvNumber(cN) {
        await this.cvvnum.fill(cN)
    }
    async bookNow() {
        await this.bookedNow.click()
    }
}