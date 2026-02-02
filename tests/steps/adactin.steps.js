import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../Pages/LoginPage.js";
import { SecondPage } from "../Pages/SecondPage.js";
import { SelectHotel } from "../Pages/SelectHotel.js";
import { BookHotel } from "../Pages/BookHotel.js";
import { ConfirmPage } from "../Pages/ConfirmPage.js";
import { LogoutPage } from "../Pages/LogoutPage.js";

let loginpage;
let secondpage;
let bookhotel;
let confirmpage;
let selecthotel;
let logoutpage;


Given('navigate to adactin application', async function () {
    loginpage = new LoginPage(this.page)
    await loginpage.visitUrl()
});
When('enter the username in username field', async function () {
    await loginpage.userName('riyazkhan00')
});
When('enter the password in password field', async function () {
    await loginpage.userPassword('Riyaz@123')
});
Then('click the login button and it navigate to search hotel page', async function () {
    await loginpage.clickButton()
});
When('Select the Location', async function () {
    secondpage = new SecondPage(this.page);
    await secondpage.selectLocation({ index: 1 })
});
When('Select the Hotel Name', async function () {
    await secondpage.selectHotel({ index: 1 })
});
When('Select the Room Type', async function () {
    await secondpage.selectRoomType({ index: 1 })
});
When('Select the Number Of Rooms', async function () {
    await secondpage.numberOfRooms({ index: 1 })
});
When('Enter the Check In Date', async function () {
    await secondpage.checkInDate('01/10/2025')
});
When('Enter the Check Out Date', async function () {
    await secondpage.checkOutDate('03/10/2025')
});
When('Select the Adults per Room', async function () {
    await secondpage.adultPerRoom({ index: 1 })
});
When('Select the Children per Room', async function () {
    await secondpage.childrenPerRoom({ index: 1 })
});
Then('Click the Search Button And It Navigates to Select Hotel Page', async function () {
    await secondpage.searchbutton()
});
When('Click The checkbox', async function () {
    selecthotel = new SelectHotel(this.page);
    await selecthotel.radioButton()
});
Then('Click The Continue Button And It Navigates to Personal Detail page', async function () {
    await selecthotel.continueButton()
});
When('Enter The First Name', async function () {
    bookhotel = new BookHotel(this.page);
    await bookhotel.firstName('Riyaz')
});
When('Enter The Last Name', async function () {
    await bookhotel.lastName('N')
});
When('Enter The Billing Address', async function () {
    await bookhotel.address('Vandavasi')
});
When('Enter The Credit Card Number', async function () {
    await bookhotel.creditCardNumber('1234567890123456')
});
When('Select The Credit Card Type', async function () {
    await bookhotel.creditCardType({ index: 1 })
});
When('Select The Expiry Date Of Credit Cards Month', async function () {
    await bookhotel.expiryMonth({ index: 1 })
});
When('Select The Expiry Date Of Credit Cards Year', async function () {
    await bookhotel.expiryYear({ index: 18 })
});
When('Enter CCV Number', async function () {
    await bookhotel.cvvNumber('123')
});
Then('Click The Book Now Button And It Navigate To Booking Confirmation Page', async function () {
    await bookhotel.bookNow()
});
Then('Click My Itinerary Button And It Navigate To Booked Itinerary Page', async function () {
    confirmpage = new ConfirmPage(this.page);
    await confirmpage.Itinerary()
});
When('Select The Particular Order Id', async function () {
    logoutpage = new LogoutPage(this.page);
    await logoutpage.checkBox()
});
Then('Click The Logout Button And It Will Logout The Page', async function () {
    await logoutpage.logOutPage()
});


//scerario outline

Given('navigate to adaction application', async function () {
    loginpage = new LoginPage(this.page)
    await loginpage.visitUrl()

});



When('enter the {string} in username field', async function (username) {
    await loginpage.userName(username)
});

When('enter the {string} in password field', async function (password) {
    await loginpage.userPassword(password)
});

/////////////////////

When('Select the Location As {string}', async function (Location) {
    secondpage = new SecondPage(this.page)
    await secondpage.selectLocation(Location)
});
When('Select the Hotel Name As {string}', async function (hotelName) {
    await secondpage.selectHotel(hotelName)
});
When('Select the Room Type As {string}', async function (roomType) {
    await secondpage.selectRoomType(roomType)
    
});
When('Select the Number Of Rooms As {string}', async function (noOfRooms) {
    await secondpage.numberOfRooms(noOfRooms)
});
When('Enter the Check In Date As {string}', async function (checkInDate) {
    await secondpage.checkInDate(checkInDate)
});
When('Enter the Check Out Date As {string}', async function (checkOutDate) {
    await secondpage.checkOutDate(checkOutDate)
});
When('Select the Adults per Room As {string}', async function (adultPerRoom) {
   await secondpage.adultPerRoom(adultPerRoom)
});
When('Select the Children per Room As {string}', async function (childPerRoom) {
    await secondpage.childrenPerRoom(childPerRoom)
});
Then('Click the Search Button And It Navigates to Select Hotel Page As', async function () {
    await secondpage.searchbutton()
});
