import { test, expect } from "@playwright/test";

test.describe('Login Regression', () => {

  test('no login details', { tag: '@regression' }, async ({ page }) => {

    await page.goto('https://kazancasino-stage.fsclub.tech/');
    const iframe = page.frameLocator('#newLoginIframe');

    await page.locator('.user-login-button #buttonHeaderLogin').click();

    await iframe.getByTestId('login-submit-button').click();

    await expect(iframe.getByTestId('input-userName-error')).toBeVisible();
    await expect(iframe.getByTestId('input-password-error')).toBeVisible();

  });

  test('login with username only', { tag: '@regression' }, async ({ page }) => {

  await page.goto('https://kazancasino-stage.fsclub.tech/');
  const iframe = page.frameLocator('#newLoginIframe');

  await page.locator('.user-login-button #buttonHeaderLogin').click();

  await iframe.getByTestId('userName').fill('testuser');
  await iframe.getByTestId('password').fill('');
  await iframe.getByTestId('login-submit-button').click();

  await expect(iframe.getByTestId('input-password-error')).toBeVisible();

});

test('login with password only', { tag: '@regression' }, async ({ page }) => {

  await page.goto('https://kazancasino-stage.fsclub.tech/');
  const iframe = page.frameLocator('#newLoginIframe');

  await page.locator('.user-login-button #buttonHeaderLogin').click();

  await iframe.getByTestId('userName').fill('');
  await iframe.getByTestId('password').fill('Test1234!');
  await iframe.getByTestId('login-submit-button').click();

  await expect(iframe.getByTestId('input-userName-error')).toBeVisible();

});

  test('wrong login details', { tag: '@regression' }, async ({ page }) => {

    await page.goto('https://kazancasino-stage.fsclub.tech/');
    const iframe = page.frameLocator('#newLoginIframe');

    await page.locator('.user-login-button #buttonHeaderLogin').click();

    await iframe.getByTestId('userName').fill('hnfnsfj');
    await iframe.getByTestId('password').fill('wejfnwek');
    await iframe.getByTestId('login-submit-button').click();

    await expect(iframe.getByTestId('alert-icon')).toBeVisible();

  });

  test('login with very long credentials', { tag: '@regression' }, async ({ page }) => {

  await page.goto('https://kazancasino-stage.fsclub.tech/');
  const iframe = page.frameLocator('#newLoginIframe');

  await page.locator('.user-login-button #buttonHeaderLogin').click();

  await iframe.getByTestId('userName').fill('a'.repeat(100));
  await iframe.getByTestId('password').fill('b'.repeat(100));
  await iframe.getByTestId('login-submit-button').click();

  await expect(iframe.getByTestId('alert-icon')).toBeVisible();

});

});