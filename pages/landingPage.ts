import { Locator, Page } from '@playwright/test';
import { HomePage } from './homePage';

const LANDING_SELECTORS = {
  registerButton: '.register-button-holder #buttonHeaderRegister',
  loginButton: '.user-login-button #buttonHeaderLogin',
  loggedUserName: '[data-testid="loggedUserName"]',
  loggedUserAvatar: '[data-testid="loggedUserAvatar"]',
};

const LANDING_TEST_IDS = {
  loggedUserName: 'loggedUserName',
  loggedUserAvatar: 'loggedUserAvatar',
  logoutButton: 'logout',
};

export class LandingPage extends HomePage {
  constructor(page: Page) {
    super(page);
  } 

  private registerButton(): Locator {
    return this.page.locator(LANDING_SELECTORS.registerButton);
  }

  private loginButton(): Locator {
    return this.page.locator(LANDING_SELECTORS.loginButton);
  }

  async openRegister(): Promise<void> {
    await this.registerButton().click();
  }

  async openLogin(): Promise<void> {
    await this.loginButton().click();
  }

  getLoggedUserName(): Locator {

    return this.page.locator(LANDING_SELECTORS.loggedUserName);
  }

  getLoggedUserAvatar(): Locator { 

    return this.page.locator(LANDING_SELECTORS.loggedUserAvatar);
  } 

  get registerButtonHolder(): Locator {
    return this.registerButton();
  }

  get logoutButton(): Locator {
    return this.page.getByTestId(LANDING_TEST_IDS.logoutButton);
  }

  async logout(): Promise<void> {
    await this.getLoggedUserAvatar().click();
    await this.logoutButton.click();
  }
}