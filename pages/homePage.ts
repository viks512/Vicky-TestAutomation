import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    protected readonly casinoNavButton = this.getById('navCasino');
    protected readonly liveCasinoNavButton = this.getById('navLiveCasino');
    protected readonly promotionsNavButton = this.getById('navPromotions');
    protected readonly sportNavButton = this.getById('navSport');
    
    protected readonly baseURL = 'https://kazancasino-stage.fsclub.tech/';

    async navigateToHomepage(): Promise<void> {
        await this.page.goto(this.baseURL);
    }

    async navigateToCasino(): Promise<void> {
        await this.page.goto(`${this.baseURL}`);
        await this.casinoNavButton.click();
    }

    async navigateToLiveCasino(): Promise<void> {
        await this.page.goto(`${this.baseURL}`);
        await this.liveCasinoNavButton.click();
    }

    async navigateToPromotions(): Promise<void> {
        await this.page.goto(`${this.baseURL}`);
        await this.promotionsNavButton.click();
    }

    async navigateToSport(): Promise<void> {
        await this.page.goto(`${this.baseURL}`);
        await this.sportNavButton.click();
    }
}


