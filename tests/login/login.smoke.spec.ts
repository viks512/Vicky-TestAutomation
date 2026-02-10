import { test, expect } from "@playwright/test";
import { LandingPage } from '../../pages/landingPage';
import { LoginPage } from "../../pages/loginPage";
import { loginData } from "../loginData";

test.describe('Login Smoke', () => {
  
  let landingPage: LandingPage;
  let loginPage: LoginPage;
  
  test.beforeEach(async ({ page }) => {
      landingPage = new LandingPage(page);
      loginPage = new LoginPage(page);
      await landingPage.navigateToHomepage();
      await landingPage.openLogin();
  });

  test('login', async ({ page }) => {
    await loginPage.login(loginData.validUser.username, loginData.validUser.password);

    await expect(loginPage.getLoggedUserName()).toBeVisible();
  });

  test('submit button visible', async ({ page }) => {
    await expect(loginPage.submitButton).toBeVisible();
  });
});