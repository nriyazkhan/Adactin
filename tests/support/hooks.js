import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { LoginPage } from "../Pages/LoginPage.js";
import { SecondPage } from "../Pages/SecondPage.js";
import { SelectHotel } from "../Pages/SelectHotel.js";
import { ConfirmPage } from "../Pages/ConfirmPage.js";
import { BookHotel } from "../Pages/BookHotel.js";
import { LogoutPage } from "../Pages/LogoutPage.js";

setDefaultTimeout(100000)

Before(async function () {
    await this.openBrowser()
    this.LoginPage = new LoginPage(this.page)
    this.SecondPage = new SecondPage(this.page)
    this.SelectHotel = new SelectHotel(this.page)
    this.BookHotel = new BookHotel(this.page)
    this.ConfirmPage = new ConfirmPage(this.page)
    this.LogoutPage = new LogoutPage(this.page)
})

After(async function () {
    await this.closeBrowser()
})