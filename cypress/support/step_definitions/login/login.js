import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import {Controls} from "../../../support/Helpers/pageHelpers"
import {LoginPage} from "../../Helpers/routes"
import { InventoryPageLocators } from "../../pageObjects/inventoryPage";


Given('I am on the Login page', () => {
    var controls = new Controls();
    controls.navigateToUrl(LoginPage.loginPageURL);
   });

When('I submit my {string} and {string}', (username, password) => {
    cy.login(username, password)
});

Then('I should be on the {string} page with {string}', (page, pageURL) => {
    cy.VerifyUserIsOnCorrectPage(pageURL);
});

And('see the the {string} message', (message)=> {
    cy.VerifyToastMessageDisplayed(message, InventoryPageLocators.ToastMessageLocator);
});




