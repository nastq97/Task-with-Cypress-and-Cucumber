import {Controls} from "./Helpers/pageHelpers";
import {LoginPageLocators} from "./pageObjects/loginPage";
import {LoginPage} from "./Helpers/routes"

/**
 * Verifies a message is displayed somewhere on the page with some text.
 * @message is the message actual success/error/warning message
 * @locator is the locator of the message
 */
Cypress.Commands.add('VerifyToastMessageDisplayed', (message, locator) => {
        cy.get(locator).should('have.text', message);
});

/**
 * The command verifies the URL is the correct one.
 * @pageURL takes the url to be verified against
 */
Cypress.Commands.add('VerifyUserIsOnCorrectPage', (pageURL) => {
    // Update to get the page name and find the URL from the contants file
    cy.url().should('eq', pageURL);
});


/**
 * Tries to log in with any credentials provided 
 * @username value will be written in for username/email field
 * @password value will written in the password field
 */
Cypress.Commands.add('login', (username, password) => {
        var controls = new Controls();
        controls.setTextFieldValue(LoginPageLocators.EmailField, username);
        controls.setTextFieldValue(LoginPageLocators.PasswordField, password);
        controls.clickBtn(LoginPageLocators.LoginBtn);
});

/**
 * Logs in successfully as a standatd User.
 * No need to provide any data. 
 * Takes the valid credentials from the users.json fixture file
 * Improve to get a user type and to login as the specified user type or add a seperate function for this
 */
Cypress.Commands.add('loginAsAStandardUser', ()=> {
        var controls = new Controls();

        controls.navigateToUrl(LoginPage.loginPageURL);
        cy.fixture("users.json").then((data) => {
                cy.login(data.standard_user.username, data.standard_user.password);
        });
});
