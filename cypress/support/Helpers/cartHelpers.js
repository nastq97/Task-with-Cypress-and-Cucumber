import { CartPageLocators } from "../pageObjects/cartPage";

export class Cart {
    /**
     * Loops through all items on the Cart page and search for a given item
     * @param {*} itemName is the item we search for
     */
    verifyItemIsListed(itemName){
        cy.get(CartPageLocators.CartList).within((list) => {
            expect(list).to.contain(itemName.toString());
        });
    };

    /**
     * Finds a particular item and checks if its price is correct
     * @param {*} itemName is the item we are searching for
     * @param {*} itemPrice is the price this item should have
     */
    verifyItemHasCorrectPrice(itemName, itemPrice){
            cy.contains(itemName)
                .parents(CartPageLocators.CartItemDescription)
                .within((description)=> {
                    expect(description).to.contain(itemPrice.toString());
                });
    
    };
}