export class ConfirmPage {
    constructor(page) {
        this.page = page;
        this.ItineraryConfirm = page.locator('//input[@name="my_itinerary"]')

    }
    async Itinerary() {
        await this.ItineraryConfirm.click()
    }
}