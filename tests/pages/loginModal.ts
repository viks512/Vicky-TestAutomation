import { FrameLocator, Locator, Page } from "@playwright/test";

const LOGIN_MODAL_SELECTORS = {
    iframe: '#newLoginIframe',
};

const LOGIN_MODAL_TEST_IDS = {
    email: 'userName',
    password: 'password',
    submitButton: 'login-submit-button',
    userNameErrorMessage: 'input-userName-error',
    passwordErrorMessage: 'input-password-error',
};

export class LoginModal {
    constructor(private page: Page) {}  

    private iframe(): FrameLocator {
        return this.page.frameLocator(LOGIN_MODAL_SELECTORS.iframe);
    }

    private readonly emailField: Locator = this.iframe().getByTestId(LOGIN_MODAL_TEST_IDS.email);
    private readonly passwordField: Locator = this.iframe().getByTestId(LOGIN_MODAL_TEST_IDS.password)
    private readonly submitButton: Locator = this.iframe().getByTestId(LOGIN_MODAL_TEST_IDS.submitButton);
    private readonly userNameErrorMessage: Locator = this.iframe().getByTestId(LOGIN_MODAL_TEST_IDS.userNameErrorMessage)
    private readonly passwordErrorMessage: Locator = this.iframe().getByTestId(LOGIN_MODAL_TEST_IDS.passwordErrorMessage);

    async login(username: string, password: string) {
        this.fillLoginDetails(username, password);

        await this.submitButton.click(); 
    }

    async fillLoginDetails(username: string, password: string) {
        await this.emailField.fill(username);
        await this.passwordField.fill(password);
    }

    async getUserNameErrorMessage() {
        return this.userNameErrorMessage;
    }

    async getPasswordErrorMessage() {
        return this.passwordErrorMessage;
    }
};

    
