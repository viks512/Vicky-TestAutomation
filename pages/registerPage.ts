import { FrameLocator, Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

const REGISTER_MODAL_SELECTORS = {
    iframe: `iframe#newRegistrationIframe`,
    userCountryCodeSelect: '[data-testid="userCountryCode"]',
};

const REGISTER_MODAL_TEST_IDS = {
    email: 'email',
    password: 'password',
    userName: 'userName',
    firstName: 'firstName',
    lastName: 'lastName',
    dateOfBirthMM: 'dateOfBirth-MM',
    dateOfBirthDD: 'dateOfBirth-DD',
    dateOfBirthYYYY: 'dateOfBirth-YYYY',
    address: 'address',
    city: 'city',
    zipCode: 'zipCode',
    phone: 'phone',
    acceptTermsAndConditions: 'acceptTermsAndConditions',
    acceptAttestation: 'acceptAttestation',
    registrationSubmitButton: 'registration-submit-button',

    playButton: 'play-button',
    emailInputError: 'input-email-error',
    passwordInputError: 'input-password-error',
    userNameInputError: 'input-userName-error',

};

export class RegisterPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private iframe():FrameLocator {
        return this.page.frameLocator(REGISTER_MODAL_SELECTORS.iframe);
    }
    
    private readonly emailField: Locator = this.iframe().getByTestId(REGISTER_MODAL_TEST_IDS.email);
    private readonly passwordFieldInput: Locator = this.iframe().getByTestId(REGISTER_MODAL_TEST_IDS.password);
    private readonly usernameFieldInput: Locator = this.iframe().getByTestId(REGISTER_MODAL_TEST_IDS.userName);
    private readonly firstNameFieldInput: Locator = this.iframe().getByTestId(REGISTER_MODAL_TEST_IDS.firstName);
    private readonly lastNameFieldInput: Locator = this.iframe().getByTestId(REGISTER_MODAL_TEST_IDS.lastName)
    private readonly birthdayMonthFieldInput: Locator = this.iframe().getByTestId(REGISTER_MODAL_TEST_IDS.dateOfBirthMM);
    private readonly birthdayDayFieldInput: Locator = this.iframe().getByTestId(REGISTER_MODAL_TEST_IDS.dateOfBirthDD)
    private readonly birthdayYearFieldInput: Locator = this.iframe().getByTestId(REGISTER_MODAL_TEST_IDS.dateOfBirthYYYY);
    private readonly addressInput: Locator = this.iframe().getByTestId(REGISTER_MODAL_TEST_IDS.address);
    private readonly cityFieldInput: Locator = this.iframe().getByTestId(REGISTER_MODAL_TEST_IDS.city)
    private readonly zipCodeFieldInput: Locator = this.iframe().getByTestId(REGISTER_MODAL_TEST_IDS.zipCode);
    private readonly countryDropdown: Locator = this.iframe().getByTestId(REGISTER_MODAL_SELECTORS.userCountryCodeSelect);
    private readonly phoneFieldInput: Locator = this.iframe().getByTestId(REGISTER_MODAL_TEST_IDS.phone);
    private readonly termsCheckbox: Locator = this.iframe().getByTestId(REGISTER_MODAL_TEST_IDS.acceptTermsAndConditions);
    private readonly infoCheckbox: Locator = this.iframe().getByTestId(REGISTER_MODAL_TEST_IDS.acceptAttestation);
    private readonly createAccountButton: Locator = this.iframe().getByTestId(REGISTER_MODAL_TEST_IDS.registrationSubmitButton);

    private readonly playButton: Locator = this.iframe().getByTestId(REGISTER_MODAL_TEST_IDS.playButton);
    private readonly emailError: Locator = this.iframe().getByTestId(REGISTER_MODAL_TEST_IDS.emailInputError);
    private readonly passwordError: Locator = this.iframe().getByTestId(REGISTER_MODAL_TEST_IDS.passwordInputError);
    private readonly userNameError: Locator = this.iframe().getByTestId(REGISTER_MODAL_TEST_IDS.userNameInputError);

    

     async registerUser( 
        email: string,
        password:  string,
        username: string,
        firstName: string,
        lastName: string,
        birthMonth: string,
        birthDay: string,
        birthYear: string,
        address: string,
        city: string,
        zipCode: string,
        phone: string
    ) {
        this.fillRegistrationFormField(
            email,
            password,
            username,
            firstName,
            lastName,
            birthMonth,
            birthDay,
            birthYear,
            address,
            city,
            zipCode,
            phone
        );
 
        await this.createAccountButton.click();
    }
 
    async fillRegistrationFormField(
        email: string,
        password:  string,
        username: string,
        firstName: string,
        lastName: string,
        birthMonth: string,
        birthDay: string,
        birthYear: string,
        address: string,
        city: string,
        zipCode: string,
        phone: string
    ) {
        await this.emailField.fill(email);
        await this.passwordFieldInput.fill(password);
        await this.usernameFieldInput.fill(username);
        await this.firstNameFieldInput.fill(firstName);
        await this.lastNameFieldInput.fill(lastName);
        await this.birthdayMonthFieldInput.fill(birthMonth);
        await this.birthdayDayFieldInput.fill(birthDay);
        await this.birthdayYearFieldInput.fill(birthYear);
        await this.addressInput.fill(address);
        await this.cityFieldInput.fill(city);
        await this.zipCodeFieldInput.fill(zipCode);
        await this.phoneFieldInput.fill(phone);
        await this.termsCheckbox.check();
        await this.infoCheckbox.check();
    }

        async fillRegistrationFormFieldWithWrongDetails(
        email: string,
        password:  string,
        username: string,
        firstName: string,
        lastName: string,
        birthMonth: string,
        birthDay: string,
        birthYear: string,
    ) {
        await this.emailField.fill(email);
        await this.passwordFieldInput.fill(password);
        await this.usernameFieldInput.fill(username);
        await this.firstNameFieldInput.fill(firstName);
        await this.lastNameFieldInput.fill(lastName);
        await this.birthdayMonthFieldInput.fill(birthMonth);
        await this.birthdayDayFieldInput.fill(birthDay);
        await this.birthdayYearFieldInput.fill(birthYear);
    }

        async fillRegistrationFormFieldWithoutCheckboxes(
        email: string,
        password:  string,
        username: string,
        firstName: string,
        lastName: string,
        birthMonth: string,
        birthDay: string,
        birthYear: string,
        address: string,
        city: string,
        zipCode: string,
        phone: string
    ) {
        await this.emailField.fill(email);
        await this.passwordFieldInput.fill(password);
        await this.usernameFieldInput.fill(username);
        await this.firstNameFieldInput.fill(firstName);
        await this.lastNameFieldInput.fill(lastName);
        await this.birthdayMonthFieldInput.fill(birthMonth);
        await this.birthdayDayFieldInput.fill(birthDay);
        await this.birthdayYearFieldInput.fill(birthYear);
        await this.addressInput.fill(address);
        await this.cityFieldInput.fill(city);
        await this.zipCodeFieldInput.fill(zipCode);
        await this.phoneFieldInput.fill(phone);
    }


    async getEmailError() {
        return this.emailError;
    }
        
    async getPasswordError() {
        return this.passwordError;
    }

    async getUsernameError() {
        return this.userNameError;
    }

    async getCreateAccountButton() {
        return this.createAccountButton;
    }
}
