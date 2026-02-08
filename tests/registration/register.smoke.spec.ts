import { test, expect } from "@playwright/test";
import { LandingPage } from "../pages/landingPage";
import { RegisterModal } from "../pages/registerModal";
import { Navigation } from "../pages/navigationComponent";

test.describe('Register Smoke Tests', () => {
  let landingPage: LandingPage;
  let registerModal: RegisterModal;
  let navigation: Navigation;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    await landingPage.navigateToHomepage(); // zashto
    registerModal = await landingPage.openRegister();
  });

  test('registration', async ({ page }) => {

    await registerModal.registerUser(
      'v@fsdf.com',
      "Test1234!",
      'TestUser',
      'Test',
      'User',
      '01',
      '01',
      '1990',
      '123 Test St',
      'Test City',
      '12345',
      'US',
      '1234567890'
    );

    await expect(landingPage.getLoggedUserName()).toBeVisible({ timeout: 15000 });
  });


  test('register button visible', async ({ page }) => {

    const registerButton = page.locator('.register-button-holder #buttonHeaderRegister');

    await expect(registerButton).toBeVisible();
  });

});