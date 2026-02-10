import { test, expect } from "@playwright/test";
import { LandingPage } from '../../pages/landingPage';
import { LoginPage } from "../../pages/loginPage2";
import { loginData } from "../loginData";

test.describe('Logout', () => {
  
  let landingPage: LandingPage;
  let loginPage: LoginPage;
  
  test.beforeEach(async ({ page }) => {
      landingPage = new LandingPage(page);
      loginPage = new LoginPage(page);
      await landingPage.navigateToHomepage();
      await landingPage.openLogin();
  });

  test('logout', async ({ page }) => {
    await loginPage.login(loginData.validUser.username, loginData.validUser.password);

    await expect(loginPage.getLoggedUserName()).toBeVisible();

    await landingPage.logout();

    await expect(landingPage.registerButtonHolder).toBeVisible();
  });

});