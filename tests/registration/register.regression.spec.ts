import { test, expect } from "@playwright/test";

test.describe('Register Regression Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://kazancasino-stage.fsclub.tech/');
  });

  test('wrong registration details', async ({ page }) => {

    const iframe = page.frameLocator('#newRegistrationIframe');
    const registerButton = page.locator('.register-button-holder #buttonHeaderRegister');

    await registerButton.click();

    await iframe.getByTestId('email').fill('invalid@test');
    await iframe.getByTestId('password').fill('short');
    await iframe.getByTestId('userName').fill('V');
    await iframe.getByTestId('firstName').fill('');
    await iframe.getByTestId('lastName').fill('');

    await iframe.getByTestId('dateOfBirth-MM').fill('13');
    await iframe.getByTestId('dateOfBirth-DD').fill('30');
    await iframe.getByTestId('dateOfBirth-YYYY').fill('1890');

    await expect(iframe.getByTestId('input-password-error')).toBeVisible();
    await expect(iframe.getByTestId('input-userName-error')).toBeVisible();
  });


  test('existing user registration', async ({ page }) => {

    const iframe = page.frameLocator('#newRegistrationIframe');
    const registerButton = page.locator('.register-button-holder #buttonHeaderRegister');

    await registerButton.click();

    await iframe.getByTestId('email').fill(`v@testttt.testing`);

    await iframe.getByTestId('password').fill('---------');
    await iframe.getByTestId('userName').fill('V1769431164226');

    await iframe.getByTestId('acceptTermsAndConditions').click();
    await iframe.getByTestId('acceptAttestation').click();

    await iframe.getByTestId('registration-submit-button').click();

    await expect(iframe.getByTestId('input-userName-error')).toBeVisible();
  });


  test('register without accepting terms', async ({ page }) => {

    const iframe = page.frameLocator('#newRegistrationIframe');
    const registerButton = page.locator('.register-button-holder #buttonHeaderRegister');

    await registerButton.click();



    await iframe.getByTestId('email').fill(`3123213@test.com`);

    await iframe.getByTestId('password').fill('Abcd1234!');
    await iframe.getByTestId('userName').fill(`Vtest`);

    await iframe.getByTestId('firstName').fill('addsas');
    await iframe.getByTestId('lastName').fill('adasd');

    await iframe.getByTestId('dateOfBirth-MM').fill('01');
    await iframe.getByTestId('dateOfBirth-DD').fill('01');
    await iframe.getByTestId('dateOfBirth-YYYY').fill('1990');

    await iframe.getByTestId('registration-submit-button').click();

    await expect(iframe.getByTestId('acceptTermsAndConditions-error')).toBeVisible();
  });


  test('register with invalid email', async ({ page }) => {

    const iframe = page.frameLocator('#newRegistrationIframe');
    const registerButton = page.locator('.register-button-holder #buttonHeaderRegister');

    await registerButton.click();

    await iframe.getByTestId('email').fill('invalidemail');
    await iframe.getByTestId('password').fill('Abcd1234!');
    await iframe.getByTestId('userName').fill(`sdfdf`);

    await iframe.getByTestId('firstName').fill('Test');
    await iframe.getByTestId('lastName').fill('User');

    await iframe.getByTestId('registration-submit-button').click();

    await expect(iframe.getByTestId('input-email-error')).toBeVisible();
  });


  test('register with weak password', async ({ page }) => {

    const iframe = page.frameLocator('#newRegistrationIframe');
    const registerButton = page.locator(
      '.register-button-holder #buttonHeaderRegister'
    );

    await registerButton.click();

    await iframe.getByTestId('email').fill(`v@test.com`);

    await iframe.getByTestId('password').fill('123');
    await iframe.getByTestId('userName').fill(`hnngf`);

    await iframe.getByTestId('firstName').fill('Test');
    await iframe.getByTestId('lastName').fill('User');

    await iframe.getByTestId('registration-submit-button').click();

    await expect(iframe.getByTestId('input-password-error')).toBeVisible();
  });

});