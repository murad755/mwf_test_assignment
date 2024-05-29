import {test, expect} from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';
import { Credentials } from '../fixtures/credentials';
import { LoginTexts } from '../page-objects/loginPage';
test.beforeEach(async ({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
})

test.describe('Check elements visibility', () => {

    test('Verify "Username" input is visible', async ({page}) => {
        const loginPage = new LoginPage(page);
        const usernameInputFieldIsVisible = await loginPage.isUsernameInputFieldVisible();

        expect(usernameInputFieldIsVisible).toBe(true);
    })

    test('Verify "Password" input is visible', async ({page}) => {
        const loginPage = new LoginPage(page);
        const passwordInputFieldIsVisible = await loginPage.isPasswordInputFieldVisible();

        expect(passwordInputFieldIsVisible).toBe(true);
    })

    test('Verify "Submit" button visibility', async ({page}) => {
        const loginPage = new LoginPage(page);
        const sumbitButtonIsVisible = await loginPage.isSubmitButtonVisible();

        expect(sumbitButtonIsVisible).toBe(true);
    })
})

test.describe('Verify "Log in" functionality', () => {
    const successfullyLoggedURL = '/logged-in-successfully/';

    test('Log in - valid credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.logIn(Credentials.valid.username, Credentials.valid.password);
        await expect(page).toHaveURL(successfullyLoggedURL);
        const logOutButtonIsVisible = await loginPage.isLogOutButtonVisible();
        expect(logOutButtonIsVisible).toBe(true);
    })

    test('Log in - invalid username', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.logIn(Credentials.invalid.username, Credentials.valid.password);
        const errorMessageVisible = await loginPage.isErrorMessageVisible();
        expect(errorMessageVisible).toBe(true);
        const actualInvalidUsernameErrorMessageText = await loginPage.getErrorMessageText();
        expect(actualInvalidUsernameErrorMessageText).toBe(LoginTexts.InvalidUsername);
    })

    test('log in - invalid password', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.logIn(Credentials.valid.username, Credentials.invalid.password);
        const errorMessageIsVisible = await loginPage.isErrorMessageVisible();
        expect(errorMessageIsVisible).toBe(true);
        const actualInvalidPasswordErrorMessageText = await loginPage.getErrorMessageText();
        expect(actualInvalidPasswordErrorMessageText).toBe(LoginTexts.InvalidPassword);
    })

    test('Log in - empty log in form', async ({page}) => {
        const loginPage = new LoginPage(page);
        const errorMessageIsVisible = await loginPage.isErrorMessageVisible();
        expect(errorMessageIsVisible).toBe(true);
        const actualInvalidUsernameErrorMessageText = await loginPage.getErrorMessageText();
        expect(actualInvalidUsernameErrorMessageText).toBe(LoginTexts.InvalidUsername);
    })
})