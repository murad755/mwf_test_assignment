import { Page, Locator } from '@playwright/test';

export enum LoginSelectors {
	UsernameInput = 'input[name="username"]',
	PasswordInput = 'input[name="password"]',
	SubmitButton = '#submit',
	ErrorMessage = '#error',
}

export enum LoginTexts {
	InvalidUsername = 'Your username is invalid!',
	InvalidPassword = 'Your password is invalid!',
	LogOut = 'Log out',
}

export class LoginPage {
	private page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	private get usernameInputField(): Locator {
		return this.page.locator(LoginSelectors.UsernameInput);
	}

	async logIn(username: string, password: string): Promise<void> {
		await this.fillUsername(username);
		await this.fillPassword(password);
		await this.clickSubmitLoginButton();
	}

	async clickSubmitLoginButton(): Promise<void> {
		await this.submitButton.click();
	}

	private get passwordInputField(): Locator {
		return this.page.locator(LoginSelectors.PasswordInput);
	}

	private get submitButton(): Locator {
		return this.page.locator(LoginSelectors.SubmitButton);
	}

	private get logOutButton(): Locator {
		return this.page.getByText(LoginTexts.LogOut);
	}

	private get errorMessage(): Locator {
		return this.page.locator(LoginSelectors.ErrorMessage);
	}

	async isVisible(locator: Locator): Promise<boolean> {
		return locator.isVisible();
	}

	async fillField(locator: Locator, value: string): Promise<void> {
		await locator.fill(value);
	}

	async isUsernameInputFieldVisible(): Promise<boolean> {
		return this.isVisible(this.usernameInputField);
	}

	async isPasswordInputFieldVisible(): Promise<boolean> {
		return this.isVisible(this.passwordInputField);
	}

	async isSubmitButtonVisible(): Promise<boolean> {
		return this.isVisible(this.submitButton);
	}

	async fillUsername(username: string): Promise<void> {
		await this.fillField(this.usernameInputField, username);
	}

	async fillPassword(password: string): Promise<void> {
		await this.fillField(this.passwordInputField, password);
	}

	async isLogOutButtonVisible(): Promise<boolean> {
		return this.isVisible(this.logOutButton);
	}

	async isErrorMessageVisible(): Promise<boolean> {
		return this.isVisible(this.errorMessage);
	}

	async getErrorMessageText(): Promise<string | null> {
		return this.errorMessage.textContent();
	}
}