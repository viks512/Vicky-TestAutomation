import { test, expect } from '@playwright/test';

test('successful login', async ({page})=> {
  await page.goto('https://the-internet.herokuapp.com');
  await page.getByRole('link', { name: 'Form Authentication' }).click();
  let username = page.getByRole('textbox', {name: 'Username'});
  let password = page.getByRole('textbox', {name: 'Password'});
  let loginButton = page.getByRole('button', {name: 'Login'});

  await username.fill('tomsmith');
  await password.fill('SuperSecretPassword!');
  await loginButton.click();

  let successMessage = page.getByText('You logged into a secure area!');
  await expect(successMessage).toBeVisible();
});