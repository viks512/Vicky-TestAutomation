import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async navigateToHomepage() {
        await this.navigation.navigateToHomepage();
    }

    async navigateToCasino() {
        await this.casinoNavButton.click();
    }

    async navigateToLiveCasino() {
        await this.liveCasinoNavButton.click();
    }

    async navigateToPromotions() {
        await this.promotionsNavButton.click();
    }
}


