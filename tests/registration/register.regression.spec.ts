import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/registerPage';
import { LandingPage } from '../../pages/landingPage';


test.describe('Register Regression Tests', () => {
  let landingPage: LandingPage;
  let registerPage: RegisterPage;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    registerPage = new RegisterPage(page);
    await landingPage.navigateToHomepage();
    await landingPage.openRegister();

  });

  test('wrong registration details', async () => {
    await registerPage.fillRegistrationFormFieldWithWrongDetails(
      "invalidemail", "weak", 
      "weak", "John", "Doe", "01", "01", "1990");

    await expect(await registerPage.getEmailError()).toBeVisible();
    await expect(await registerPage.getPasswordError()).toBeVisible();
    await expect(await registerPage.getUsernameError()).toBeVisible();
  });

  test('existing user registration', async () => {
    await registerPage.registerUser("existinguser@example.com", "Abcd1234!", 
      "existinguser", "Existing", "User", "01", "01", "1990", "123 Main St", "New York", "12345", "5231092821");

    await expect(await registerPage.getUsernameError()).toBeVisible();
  });

  test('register without accepting terms', async () => {
    await registerPage.fillRegistrationFormFieldWithoutCheckboxes(
      "testuser@example.com", "StrongPass123!", "testuser", "Test", "User", "01", "01", "1990", "123 Main St", "New York", "12345", "5231092821"
    );

    await expect(await registerPage.getCreateAccountButton()).toBeDisabled();
  });

  test('register with invalid email', async () => {
    await registerPage.fillRegistrationFormFieldWithWrongDetails(
      "testuser", "weak", "testuser", "Test", "User", "01", "01", "1990");

    await expect(await registerPage.getEmailError()).toBeVisible();
  });

  test('register with weak password', async () => {
    await registerPage.fillRegistrationFormFieldWithWrongDetails(
      "testuser@example.com", "weak", "testuser", "Test", "User", "01", "01", "1990");

    await expect(await registerPage.getPasswordError()).toBeVisible();
  });
});
