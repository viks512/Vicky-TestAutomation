import { test, expect } from "@playwright/test";
import { LandingPage } from '../../pages/landingPage';
import { LoginPage } from "../../pages/loginPage";
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

  test('logout', async () => {
    await loginPage.login(loginData.validUser.username, loginData.validUser.password);
    await landingPage.logout();

    await expect(landingPage.registerButtonHolder).toBeVisible();
  });

});