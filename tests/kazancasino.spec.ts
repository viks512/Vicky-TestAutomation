import {test, expect } from "@playwright/test";

test('login', async ({ page }) => {
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

test('registration', async ({ page }) => {
  await page.goto('https://kazancasino-stage.fsclub.tech/');

    const iframe = page.frameLocator('#newRegistrationIframe');
    const registerButton = page.locator('.register-button-holder #buttonHeaderRegister');

    const usernameEmail = iframe.getByTestId('email');
    const passwordField = iframe.getByTestId('password');
    const usernameField = iframe.getByTestId('userName');
    const firstNameField = iframe.getByTestId('firstName');
    const lastNameField = iframe.getByTestId('lastName');
    const dateOfBirthMonth = iframe.getByTestId('dateOfBirth-MM');
    const dateOfBirthDay = iframe.getByTestId('dateOfBirth-DD');
    const dateOfBirthYear = iframe.getByTestId('dateOfBirth-YYYY');
    const address = iframe.getByTestId('address');
    const city = iframe.getByTestId('city');
    const postalCode = iframe.getByTestId('zipCode');
    const phoneNumber = iframe.getByTestId('phone');
    const termsCheckbox = iframe.getByTestId('acceptTermsAndConditions');
    const attestationCheckbox = iframe.getByTestId('acceptAttestation');

    await registerButton.click();
    await usernameEmail.fill(`${Date.now()}@testttt.testing`);
    await passwordField.fill('Abcd1234!');
    await usernameField.fill(`V${Date.now()}`);
    await firstNameField.fill('fvgs');
    await lastNameField.fill('sdfsdf');
    await dateOfBirthMonth.fill('01');
    await dateOfBirthDay.fill('01');
    await dateOfBirthYear.fill('1990');
    await address.fill('sdfsdf');
    await city.fill('sdfsdf');
    await postalCode.fill('12345');
    await phoneNumber.fill('5556665550');
    await termsCheckbox.click();
    await attestationCheckbox.click();

    const submitButton = iframe.getByTestId('registration-submit-button');
    await submitButton.click();

    const playButton = iframe.getByTestId('play-button');
    await expect(playButton).toBeVisible({ timeout: 15000 });
    await playButton.click();

    await expect(page.getByTestId('loggedUserName')).toBeVisible({ timeout: 15000 });

});

test('wrong registration details', async ({ page }) => {
    await page.goto('https://kazancasino-stage.fsclub.tech/');
    const iframe = page.frameLocator('#newRegistrationIframe');
    const registerButton = page.locator('.register-button-holder #buttonHeaderRegister');

    const usernameEmail = iframe.getByTestId('email');
    const passwordField = iframe.getByTestId('password');
    const usernameField = iframe.getByTestId('userName');
    const firstNameField = iframe.getByTestId('firstName');
    const lastNameField = iframe.getByTestId('lastName');
    const dateOfBirthMonth = iframe.getByTestId('dateOfBirth-MM');
    const dateOfBirthDay = iframe.getByTestId('dateOfBirth-DD');
    const dateOfBirthYear = iframe.getByTestId('dateOfBirth-YYYY');

    await registerButton.click();
    await usernameEmail.fill(`invalidemail@sdd.dedesw`);
    await passwordField.fill('short');
    await usernameField.fill(`V`);
    await firstNameField.fill('');
    await lastNameField.fill('');   
    await dateOfBirthMonth.fill('13');
    await dateOfBirthDay.fill('30');
    await dateOfBirthYear.fill('1890');

    await expect(iframe.getByTestId('input-password-error')).toBeVisible();
    await expect(iframe.getByTestId('input-userName-error')).toBeVisible();
    await expect(iframe.getByTestId('input-firstName-error')).toBeVisible();
    await expect(iframe.getByTestId('input-lastName-error')).toBeVisible();

});

test('existing user registration', async ({ page }) => {
    await page.goto('https://kazancasino-stage.fsclub.tech/');
    const iframe = page.frameLocator('#newRegistrationIframe');
    const registerButton = page.locator('.register-button-holder #buttonHeaderRegister');

    
    const usernameEmail = iframe.getByTestId('email');
    const passwordField = iframe.getByTestId('password');
    const usernameField = iframe.getByTestId('userName');
    const firstNameField = iframe.getByTestId('firstName');
    const lastNameField = iframe.getByTestId('lastName');
    const dateOfBirthMonth = iframe.getByTestId('dateOfBirth-MM');
    const dateOfBirthDay = iframe.getByTestId('dateOfBirth-DD');
    const dateOfBirthYear = iframe.getByTestId('dateOfBirth-YYYY');
    const address = iframe.getByTestId('address');
    const city = iframe.getByTestId('city');
    const postalCode = iframe.getByTestId('zipCode');
    const phoneNumber = iframe.getByTestId('phone');
    const termsCheckbox = iframe.getByTestId('acceptTermsAndConditions');
    const attestationCheckbox = iframe.getByTestId('acceptAttestation');

    await registerButton.click();
    await usernameEmail.fill(`${Date.now()}@testttt.testing`);
    await passwordField.fill('Abcd1234!');
    await usernameField.fill(`V1769431164226`);
    await firstNameField.fill('fvgs');
    await lastNameField.fill('sdfsdf');
    await dateOfBirthMonth.fill('01');
    await dateOfBirthDay.fill('01');
    await dateOfBirthYear.fill('1990');
    await address.fill('sdfsdf');
    await city.fill('sdfsdf');
    await postalCode.fill('12345');
    await phoneNumber.fill('5556665550');
    await termsCheckbox.click();
    await attestationCheckbox.click();


    const submitButton = iframe.getByTestId('registration-submit-button');
    await submitButton.click();
    await expect(iframe.getByTestId('input-userName-error')).toBeVisible();

});

test('no login details', async ({ page }) => {
    await page.goto('https://kazancasino-stage.fsclub.tech/');
    const iframe = page.frameLocator('#newLoginIframe');
    const loginButton = page.locator('.user-login-button #buttonHeaderLogin');

    const usernameField = iframe.getByTestId('userName')
    const passwordField = iframe.getByTestId('password')
    const submitButton = iframe.getByTestId('login-submit-button');

    await loginButton.click();
    await usernameField.fill('');
    await passwordField.fill('');
    await submitButton.click();

    await expect(iframe.getByTestId('input-userName-error')).toBeVisible();
    await expect(iframe.getByTestId('input-password-error')).toBeVisible();

});

test('wrong login details', async ({ page }) => {
    await page.goto('https://kazancasino-stage.fsclub.tech/');
    const iframe = page.frameLocator('#newLoginIframe');
    const loginButton = page.locator('.user-login-button #buttonHeaderLogin');

    const usernameField = iframe.getByTestId('userName')
    const passwordField = iframe.getByTestId('password')
    const submitButton = iframe.getByTestId('login-submit-button');

    await loginButton.click();
    await usernameField.fill('hnfnsfj');
    await passwordField.fill('wejfnwek');
    await submitButton.click();

    await expect(iframe.getByTestId('alert-icon')).toBeVisible();

});

test('navigate to promotions page', async ({ page }) => {
    await page.goto('https://kazancasino-stage.fsclub.tech/');
    const promotionsLink = page.locator('#navPromotions');
    await promotionsLink.click();

    await expect(page).toHaveURL('https://kazancasino-stage.fsclub.tech/promotions');
    
});



