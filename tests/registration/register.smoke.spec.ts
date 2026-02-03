import { test, expect } from "@playwright/test";

test.describe('Register Smoke', () => {

  test('registration', { tag: '@smoke' }, async ({ page }) => {

    await page.goto('https://kazancasino-stage.fsclub.tech/');

    const iframe = page.frameLocator('#newRegistrationIframe');
    const registerButton = page.locator('.register-button-holder #buttonHeaderRegister');

    await registerButton.click();

    await iframe.getByTestId('email').fill(`${Date.now()}@testttt.testing`);

    await iframe.getByTestId('password').fill('-------'); 
    await iframe.getByTestId('userName').fill(`V${Date.now()}`);

    await iframe.getByTestId('firstName').fill('fvgs');
    await iframe.getByTestId('lastName').fill('sdfsdf');

    await iframe.getByTestId('dateOfBirth-MM').fill('01');
    await iframe.getByTestId('dateOfBirth-DD').fill('01');
    await iframe.getByTestId('dateOfBirth-YYYY').fill('1990');

    await iframe.getByTestId('address').fill('sdfsdf');
    await iframe.getByTestId('city').fill('sdfsdf');
    await iframe.getByTestId('zipCode').fill('12345');
    await iframe.getByTestId('phone').fill('5556665550');

    await iframe.getByTestId('acceptTermsAndConditions').click();
    await iframe.getByTestId('acceptAttestation').click();

    await iframe.getByTestId('registration-submit-button').click();

    await expect(page.getByTestId('loggedUserName')).toBeVisible({ timeout: 15000 });
  });


  test('register button visible', { tag: '@smoke' }, async ({ page }) => {

    await page.goto('https://kazancasino-stage.fsclub.tech/');

    await expect(page.locator('.register-button-holder #buttonHeaderRegister')).toBeVisible();
  });

});