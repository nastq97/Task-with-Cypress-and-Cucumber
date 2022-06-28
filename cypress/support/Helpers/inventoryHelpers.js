import { InventoryItemNames, InventoryPageLocators, InventoyItemLocators } from "../pageObjects/inventoryPage"
import { Controls } from "./pageHelpers";
export class Inventory {

    /**
     * Searches for an item by name and adds it in the card
     * @param {*} itemName the name of the item we are searching
     */
    addItemToCart(itemName){

        cy.contains(itemName)
            .parents(InventoyItemLocators.InventoryItemDescription)
            .within(() => {
                cy.contains(InventoryItemNames.AttToCartBtn).click();
            });

    };

    /**
     * Opens the 'Sorting' filter and searches for a particular option
     * @param {} option the option we are searching for
     */
    verifySortingOptionPresent(option){
        var controls = new Controls();
        controls.verifyTextDisplayed(option, InventoryPageLocators.SortContainer);
    };

    /**
     * Opens the 'Sort' filter and selects the given option
     * @param {*} sortOption the option to be selected
     */
    selectSortOption(sortOption){
        var controls = new Controls();
        controls.clickBtn(InventoryPageLocators.SortBtn);
        controls.selectOption(sortOption, InventoryPageLocators.SortContainer);
    };

    /**
     * Verifies a particular item is the first oneon the page
     * @param {*} itemName the item we want to see first on the page
     */
    verifyFirstItemNmeInTheTable(itemName){
        var controls = new Controls();

        cy.get(InventoyItemLocators.InventoryItemDescription)
            .first()
            .within(() => {
                controls.verifyTextDisplayed(itemName, InventoyItemLocators.InventoryItemNameLocator)
            });
    };

    /**
     * Verifies a particular item is the last one on the page.
     * @param {*} itemName the item we want to be last on the page
     */
    verifyLastItemNameInTheTable(itemName) {
        var controls = new Controls();

        cy.get(InventoyItemLocators.InventoryItemDescription)
        .last()
        .within(() => {
            controls.verifyTextDisplayed(itemName, InventoyItemLocators.InventoryItemNameLocator)
        });
    };

    /**
     * Verifies that the items on the page are sorted in either increasing or descreasing order
     * @param {} increasing bool parameter. True = increasing order. False = descreasing order.
     * @param {*} currentPrice not passed as a parameter. Updates the current price with the value
     * of the last checked price and compared the next one with it.
     */
    verifyItemsSortedByPrice(increasing, currentPrice = 0.0){
        var controls = new Controls();

        cy.get(InventoyItemLocators.InventoryItemPriceLocator)
        .first()
        .then(($value) => {
            this.currentPrice = $value;
        });
            
        if(increasing){
            controls.verifyIncreasingOrder(InventoyItemLocators.InventoryItemPriceLocator, currentPrice);
        } else {
            controls.verifyDecreasingOrder(InventoyItemLocators.InventoryItemPriceLocator, currentPrice);
        }
    };
}