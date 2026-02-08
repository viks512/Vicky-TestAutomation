import { Locator, Page } from "@playwright/test";
import { Navigation } from "./navigationComponent";

export abstract class BasePage {
    protected navigation: Navigation;

    constructor(protected page: Page) {
        this.navigation = new Navigation(page);
    }

    protected readonly casinoNavButton = this.getById('navCasino');
    protected readonly liveCasinoNavButton = this.getById('navLiveCasino');
    protected readonly promotionsNavButton = this.getById('navPromotions');

    protected getByTestId(testId: string): Locator {
        return this.page.getByTestId(testId);
    }

    protected getById(id: string): Locator {
        return this.page.locator(`#${id}`);
    }

    protected async clickByTestId(testId: string) {
        await this.getByTestId(testId).click();
    }

    protected async fillByTestId(testId: string, value: string) {
        await this.getByTestId(testId).fill(value);
    }


}
