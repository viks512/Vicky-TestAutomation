import { Locator, Page } from '@playwright/test';
import { RegisterModal } from './registerModal';
import { BasePage } from './basePage';
import { LoginModal } from './loginModal';

const LANDING_SELECTORS = {
  registerButton: '.register-button-holder #buttonHeaderRegister',
  loginButton: '.user-login-button #buttonHeaderLogin;',
  loggedUserName: '[data-testid="loggedUserName"]',
};

export class LandingPage extends BasePage {
  constructor(page: Page) {
    super(page);
  } 

  private registerButton(): Locator {
    return this.page.locator(LANDING_SELECTORS.registerButton);
  }

  private loginButton(): Locator {
    return this.page.locator(LANDING_SELECTORS.loginButton);
  }

  async openRegister(): Promise<RegisterModal> {
    await this.registerButton().click();

    return new RegisterModal(this.page);
  }

  async openLogin(): Promise<LoginModal> {
    await this.loginButton().click();

    return new LoginModal(this.page);
  }

  getLoggedUserName(): Locator {
    return this.page.locator(LANDING_SELECTORS.loggedUserName);
  }
}

//obekti vmesto voidove na promisite
//spomagatelni funkcii za klikvane na butoni i popalvane na formi
//drugi testove prim casino
//tablica kak se izpolzvat clasovete i koi kogo inheritva
//kak se izpolzvat base pageovete v drugite clasove i testove
//metoda koito navigira do casino stranica trqbva da vrushta casino stranica ??