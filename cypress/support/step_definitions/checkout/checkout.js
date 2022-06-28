import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import {Controls} from "../../../support/Helpers/pageHelpers"
import {CartPage} from "../../Helpers/routes";
import {Inventory} from "../../Helpers/inventoryHelpers"
import {InventoryPageLocators} from "../../pageObjects/inventoryPage";
import {CartPageLocators} from "../../pageObjects/cartPage";
import {Cart} from "../../Helpers/cartHelpers";
import {Checkout, CheckoutConfirmation} from "../../Helpers/checkoutHelpers"
import {CheckoutConfirmPageLocators } from "../../pageObjects/checkoutConfirmationPage";
import {CheckoutPageLocators} from "../../pageObjects/checkoutPage"

Given('I have successfully logged in as a standard user', () => {
    cy.loginAsAStandardUser();
});

And('have added 5 items in my cart:', (datatable) => {
    var inventory = new Inventory();

    datatable.hashes().forEach((item) => {
        inventory.addItemToCart(item.name);
    });
});

And('I am on the Cart page', () => {
    var controls = new Controls();
    controls.navigateToUrl(CartPage.cartPageURL);
});

And('submit my personal information:', (datatable) => {
    var checkoutConfirmation = new CheckoutConfirmation();
    var controls = new Controls();

    datatable.hashes().forEach((person) => {
        checkoutConfirmation.enterPersonalInformation(person.firstName, person.lastName, person.postalCode);
    });
    controls.clickBtn(CheckoutConfirmPageLocators.ContinueBtn);
});

And('I am on the Checkout page', ()=> {  
    var checkoutConfirmation = new CheckoutConfirmation();
    checkoutConfirmation.navigateToCheckout();
});

When('I clcik on the Finish button', () => {
    var controls = new Controls();
     controls.clickBtn(CheckoutPageLocators.FinishBtn);
});

And('the total price shoudld be:', (datatable) => {
    var controls = new Controls();

    datatable.hashes().forEach((item) => {
        controls.verifyTextDisplayed(item.total ,CheckoutPageLocators.ItemTotal);
    });
})

When('I navigate to my Cart', ()=> {
    var controls = new Controls();
    controls.clickBtn(InventoryPageLocators.CartBtn);
});

When('I click the Checkout button', () => {
    var controls = new Controls();
    controls.clickBtn(CartPageLocators.CheckoutBtn);
});

Then('I should see a list of 5 items with their correct price:', (datatable) => {
    var cart = new Cart();

    datatable.hashes().forEach((item) => {
        cart.verifyItemIsListed(item.name);
        cart.verifyItemHasCorrectPrice(item.name, item.price);
    });
});

Then('I should see the site logo and the following elements displayed:', (datatable) => {
    var checkout = new Checkout();
    datatable.hashes().forEach((element) => {
        checkout.verifyElementsAreDisplayed(element.message, element.button);
    });
});