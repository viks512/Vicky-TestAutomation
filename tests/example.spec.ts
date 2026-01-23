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

test('failed login with incorrect password', async ({ page })=> {
  await page.goto('https://the-internet.herokuapp.com');
  await page.getByRole('link', { name: 'Form Authentication' }).click();
  let username = page.getByRole('textbox', {name: 'Username'});
  let password = page.getByRole('textbox', {name: 'Password'});
  let loginButton = page.getByRole('button', {name: 'Login'});

  await username.fill('tomsmith');
  await password.fill('thispasswordwrong');
  await loginButton.click();

  let errorMessage = page.getByText('Your password is invalid!');
  await expect(errorMessage).toBeVisible();
});

test('dropdown selection', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
  await page.getByRole('link', { name: 'Dropdown' }).click();
  let dropdown = page.locator('#dropdown');

  await dropdown.selectOption('Option 2');

  let selectedOption = await dropdown.inputValue();
  await expect(selectedOption).toBe('2');
});

test('checkboxes', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
  await page.getByRole('link', { name: 'Checkboxes' }).click();
  let firstCheckbox = page.getByRole('checkbox').nth(0);
  let secondCheckbox = page.getByRole('checkbox').nth(1);

  await firstCheckbox.click();
  await secondCheckbox.click();

  await expect(firstCheckbox).toBeChecked();
  await expect(secondCheckbox).not.toBeChecked();
});

test('redirection', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
  await page.getByRole('link', { name: 'Redirect Link' }).click();
  await page.getByRole('link', { name: 'here' }).click();

  await expect(page).toHaveURL('https://the-internet.herokuapp.com/status_codes');
});

test('add elements', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
  await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
  let addButton = page.getByRole('button', { name: 'Add Element' });

  await addButton.click();
  await addButton.click();

  let deleteButtons = page.getByRole('button', { name: 'Delete' });
  await expect(deleteButtons).toHaveCount(2);

  await deleteButtons.nth(0).click();
  await expect(deleteButtons).toHaveCount(1);
});

test('modal window', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
  await page.getByRole('link', { name: 'Entry Ad' }).click();
  let modal = page.locator('.modal');
  let closeButton = modal.getByText('Close');

  await expect(modal).toBeVisible();
  await closeButton.click();
  await expect(modal).toBeHidden();
});

test('login in kazancasino', async ({ page }) => {
  await page.goto('https://kazancasino-stage.fsclub.tech/');

  const iframe = page.frameLocator('#newLoginIframe');
  const loginButton = page.locator('.user-login-button #buttonHeaderLogin');

  const usernameField = iframe.getByTestId('userName')
  const passwordField = iframe.getByTestId('password')
  const submitButton = iframe.getByTestId('login-submit-button');

  await loginButton.click();
  await usernameField.fill('vicky');
  await passwordField.fill('Password01');
  await submitButton.click();

  const loggedinUserName = page.getByTestId('loggedUserName');
  await expect(loggedinUserName, 'User is not logged in successfully').toBeVisible({  timeout: 15000 });
  await expect(loggedinUserName).toHaveText('vicky');

});
