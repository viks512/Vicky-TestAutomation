import { Locator, Page } from "@playwright/test";

export class Navigation {
    constructor(private page: Page) {}

    async navigateToHomepage() {
        await this.page.goto('https://kazancasino-stage.fsclub.tech/');
    }

    async navigateToCasino() {
        await this.page.goto('https://kazancasino-stage.fsclub.tech/new/casino');
    }

    async navigateToLiveCasino() {
        await this.page.goto('https://kazancasino-stage.fsclub.tech/new/live-casino');
    }

    async navigateToPromotions() {
        await this.page.goto('https://kazancasino-stage.fsclub.tech/promotions');
    }

    async navigateToSport() {
        await this.page.goto('https://kazancasino-stage.fsclub.tech/betting');
    }
}