import { test, expect } from "@playwright/test";

test.describe('Login Smoke', () => {

  test('login', { tag: '@smoke' }, async ({ page }) => {

    await page.goto('https://kazancasino-stage.fsclub.tech/');

    const iframe = page.frameLocator('#newLoginIframe');
    const loginButton = page.locator('.user-login-button #buttonHeaderLogin');

    await loginButton.click();

    await iframe.getByTestId('userName').fill('------');
    await iframe.getByTestId('password').fill('--------');
    await iframe.getByTestId('login-submit-button').click();

    const loggedinUserName = page.getByTestId('loggedUserName');

    await expect(loggedinUserName).toBeVisible({ timeout: 15000 });
    await expect(loggedinUserName).toHaveText('vicky');
  });


  test('login button visible', { tag: '@smoke' }, async ({ page }) => {

    await page.goto('https://kazancasino-stage.fsclub.tech/');

    await expect(page.locator('.user-login-button #buttonHeaderLogin')).toBeVisible();

  });

});