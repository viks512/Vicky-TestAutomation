import { Locator, Page } from "@playwright/test";

export class BasePage {
    constructor(protected readonly page: Page) {}

    protected getByTestId(testId: string): Locator {
        return this.page.getByTestId(testId);
    }
    
    protected getById(id: string): Locator {
        return this.page.locator(`#${id}`);
    }
    
    protected async clickByTestId(testId: string): Promise<void> {
        await this.getByTestId(testId).click();
    }
    
    protected async fillByTestId(testId: string, value: string): Promise<void> {
        await this.getByTestId(testId).fill(value);
    }
}
