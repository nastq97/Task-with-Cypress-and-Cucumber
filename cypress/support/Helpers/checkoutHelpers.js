import {CheckoutConfirmPageLocators}from "../pageObjects/checkoutConfirmationPage";
import {Controls} from "../Helpers/pageHelpers";
import {CartPage} from "../Helpers/routes"
import {CartPageLocators} from "../pageObjects/cartPage"
import {CheckoutPage} from "../Helpers/routes";
import { CheckoutPageLocators } from "../pageObjects/checkoutPage";

export class CheckoutConfirmation {
    /**
     * Enters the personal information before going to the Final checkout page.
     * All fields are required!
     * @param {*} firstName is the First Name of the purchaser
     * @param {*} lastName is the Last Name of the purchaser
     * @param {*} postalCode is the Postal/ZIP code of the purchaser
     */
    enterPersonalInformation(firstName, lastName, postalCode){
        var controls = new Controls();

        controls.setTextFieldValue(CheckoutConfirmPageLocators.FirstName, firstName);
        controls.setTextFieldValue(CheckoutConfirmPageLocators.LastName, lastName);
        controls.setTextFieldValue(CheckoutConfirmPageLocators.PostalCode, postalCode);
     };

     /**
      * Enters valid personal information of a standard user and goes to the Final checkout page.
      * No parameters needed. All data is gathered from the "personalInformation.json" fixture file.
      */
    navigateToCheckout(){
        var controls = new Controls();

        controls.navigateToUrl(CartPage.cartPageURL);
        controls.clickBtn(CartPageLocators.CheckoutBtn);
        cy.fixture("personalInformation.json").then((data) => {
            this.enterPersonalInformation(
                data.correctPI.firstName, 
                data.correctPI.lastName, 
                data.correctPI.postalCode
            );
        });
        controls.clickBtn(CheckoutConfirmPageLocators.ContinueBtn);
     }
};

export class Checkout {
    /**
     * Verifies the following elements are displayed: Test Messages, Back Home button, Site Logo.
     * Site logo is a static element so it is not passed as a parameter.
     * The locations of the elements are static so they are not passed as parameters.
     * @param {*} text the message we are searching on the page
     * @param {*} btnName the name of the button we are searching on the page
     */
    verifyElementsAreDisplayed(text, btnName){
        var controls = new Controls();

        controls.verifyTextDisplayed(text, CheckoutPageLocators.CheckoutContainer);
        controls.verifyButtonIsPresentAndClickable(btnName, CheckoutPageLocators.BackBtn);
        controls.verifyImageDisplayed(CheckoutPageLocators.CheckoutLogo, CheckoutPage.logoURL);
    };
};