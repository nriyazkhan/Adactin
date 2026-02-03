export class SecondPage {
    constructor(page) {
        this.page = page;
        this.locationInput = page.locator('//select[@name="location"]')
        this.hotelName = page.locator('//select[@name="hotels"]')
        this.roomType = page.locator("//select[@name='room_type']")
        this.number = page.locator("//select[@name='room_nos']")
        this.checkIn = page.locator("//input[@name='datepick_in']")
        this.checkOut = page.locator("//input[@name='datepick_out']")
        this.adultRoom = page.locator("//select[@name='adult_room']")
        this.childrenRoom = page.locator("//select[@name='child_room']")
        this.searchBtn = page.locator("//input[@name='Submit']")

    }
    async selectLocation(place) {
        await this.locationInput.selectOption(place)
    }
    async selectHotel(hotel) {
        await this.hotelName.selectOption(hotel)
    }
    async selectRoomType(type) {
        await this.roomType.selectOption(type)
    }
    async numberOfRooms(count) {
        await this.number.selectOption(count)
    }
    async checkInDate(indate) {
        await this.checkIn.fill(indate)
    }
    async checkOutDate(outdate) {
        await this.checkOut.fill(outdate)
    }
    async adultPerRoom(adults) {
        await this.adultRoom.selectOption(adults)
    }
    async childrenPerRoom(children) {
        await this.childrenRoom.selectOption(children)
    }
    async searchbutton() {
        await this.searchBtn.click();
    }
}

//--riyazkhan--