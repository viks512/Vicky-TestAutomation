import { FrameLocator, Locator, Page } from "@playwright/test";
import { LandingPage } from "./landingPage";

const LOGIN_MODAL_SELECTORS = {
    iframe: '#newLoginIframe',
};

const LOGIN_MODAL_TEST_IDS = {
    email: 'userName',
    password: 'password',
    submitButton: 'login-submit-button',
    userNameErrorMessage: 'input-userName-error',
    passwordErrorMessage: 'input-password-error',
    alertIcon: 'alert-icon',
}

export class LoginPage extends LandingPage {
    
    constructor(page: Page) {
        super(page);
    }


    private iframe(): FrameLocator {
        return this.page.frameLocator(LOGIN_MODAL_SELECTORS.iframe);
    }

    get emailField(): Locator {
        return this.iframe().getByTestId(LOGIN_MODAL_TEST_IDS.email);
    }

    get passwordField(): Locator {
        return this.iframe().getByTestId(LOGIN_MODAL_TEST_IDS.password);
    }

    get submitButton(): Locator {
        return this.iframe().getByTestId(LOGIN_MODAL_TEST_IDS.submitButton);
    }

    get userNameErrorMessage(): Locator {
        return this.iframe().getByTestId(LOGIN_MODAL_TEST_IDS.userNameErrorMessage);
    }

    get passwordErrorMessage(): Locator {
        return this.iframe().getByTestId(LOGIN_MODAL_TEST_IDS.passwordErrorMessage);
    }

    get alertIcon(): Locator {
        return this.iframe().getByTestId(LOGIN_MODAL_TEST_IDS.alertIcon);
    }


    async login(username: string, password: string) {
        await this.fillLoginDetails(username, password);

        await this.submitButton.click(); 
    }

    async fillLoginDetails(username: string, password: string) {
        await this.emailField.fill(username);
        await this.passwordField.fill(password);
    }

    async deleteLoginDetails() {
        await this.emailField.fill(''); // or .clear() if available
        await this.passwordField.fill('');
    }

    async getUserNameErrorMessage() {
        return this.userNameErrorMessage;
    }

    async getPasswordErrorMessage() {
        return this.passwordErrorMessage;
    }

}
