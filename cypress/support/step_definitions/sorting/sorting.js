import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { Inventory } from "../../Helpers/inventoryHelpers";
import { Controls } from "../../Helpers/pageHelpers";
import { InventoryPageLocators } from "../../pageObjects/inventoryPage";

Given('I have successfully logged in as a standard user', () => {
    cy.loginAsAStandardUser();
});

When('I click on the Sort button', ()=> {
    var controls = new Controls();
    controls.clickBtn(InventoryPageLocators.SortBtn);
});

Then('I should see the following sorting options:', (datatable)=> {
    var inventory = new Inventory();

    datatable.hashes().forEach((item) => {
        inventory.verifySortingOptionPresent(item.option);
    });
});

When('I select the {string} sorting option', (sortOption)=> {
    var inventory = new Inventory();
    inventory.selectSortOption(sortOption);
});

Then('the first product should be {string}', (firstProduct)=> {
    var inventory = new Inventory();
    cy.log(firstProduct);
    inventory.verifyFirstItemNmeInTheTable(firstProduct);
});

Then('the products should be sorted by price', () => {
    var inventory = new Inventory();
    inventory.verifyItemsSortedByPrice(true);
});

And('the last product should be: {string}', (lastProduct)=> {
    var inventory = new Inventory();
    inventory.verifyLastItemNameInTheTable(lastProduct);
});