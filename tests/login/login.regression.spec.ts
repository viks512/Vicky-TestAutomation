import { test, expect } from "@playwright/test";
import { LandingPage } from '../../pages/landingPage';
import { LoginPage } from "../../pages/loginPage";
import { loginData } from "../loginData";


test.describe('Login Regression', () => {
  let landingPage: LandingPage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    await landingPage.navigateToHomepage();
    await landingPage.openLogin();
    loginPage = new LoginPage(page);

  }); //fail condition message;

test('one word login details', async () => {
  await loginPage.login(loginData.oneWordFields.username, loginData.oneWordFields.password);

  await expect(loginPage.alertIcon).toBeVisible();

  });

test('login with username only', async () => {
  await loginPage.login(loginData.invalidUser.username, ' ');

  await expect(loginPage.alertIcon).toBeVisible();// to be disabled
});


test('login with password only', async () => {
  await loginPage.login(' ', loginData.invalidUser.password);

  await expect(loginPage.alertIcon).toBeVisible();


});

  test('wrong login details', async () => {

    await loginPage.login(loginData.wrongUser.username, loginData.wrongUser.password);

    await expect(loginPage.alertIcon).toBeVisible();

  });

  test('login with very long credentials', async () => {

    await loginPage.login(loginData.longInputs.username, loginData.longInputs.password);

    await expect(loginPage.alertIcon).toBeVisible();
  });
});