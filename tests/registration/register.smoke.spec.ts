import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../pages/registerPage";
import { LandingPage } from '../../pages/landingPage';



test.describe('Register Smoke Tests', () => {
  let landingPage: LandingPage;
  let registerPage: RegisterPage;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    await landingPage.navigateToHomepage();
    registerPage = await landingPage.openRegister();
  });

  test('registration', async ({ page }) => {

    await registerPage.fillRegistrationFormFieldWithWrongDetails(
      '-------',
      '------',
      'TestUser',
      'Test',
      'User',
      '01',
      '01',
      '1990'
    );

    await expect(landingPage.getLoggedUserName()).toBeVisible({ timeout: 15000 });
  });


  test('register button visible', async ({ page }) => {

    await expect(landingPage.registerButtonHolder).toBeVisible( { timeout: 10000 });

    
  });

});