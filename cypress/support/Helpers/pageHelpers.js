export class Controls {
    /**
     * Locates a text input field and types a given value
     * @param {*} selector the selector of the field
     * @param {*} value the value to be typed in the field
     */
    setTextFieldValue(selector, value){
        cy.get(selector).should('exist').clear().type(value);
    }

    /**
     * Locates a button and clicks it. The button is found only by its locator, not by name!
     * @param {*} selector the locator of the button to be clicked
     */
    clickBtn(selector) {
        cy.get(selector).click();
    }

    /**
     * Navigates to a given URL. Needs improvement:
     *  - add an optional parameter to pass a custom timeout 
     *  - add an optional parameter to wait for a request to be resolved
     * @param {*} pageURL the url of the page to be displayed
     */
    navigateToUrl(pageURL) {
        //If a specific timeoput is not provided use the default Cypress timeout
        cy.visit(pageURL);
    };

    /**
     * Searches for a text on a specific location on the page
     * @param {*} text the message itself
     * @param {*} locator the location of the message
     */
    verifyTextDisplayed(text, locator){
        cy.get(locator)
            .should('contain.text', text);
    };

    /**
     * Finds a given option and clicks it
     * @param {*} option the option to be clicked
     * @param {*} locator the locator of the option
     */
    clickOption(option, locator){
        cy.get(locator)
            .should('contain.text', option)
            .click();
    };

    /**
     * Locates an option and selects it. For options with the type <select>!
     * @param {} option the option to be selected
     * @param {*} locator the locator of the option
     */
    selectOption(option, locator){
        cy.get(locator)
            .select(option);
    };

    /**
     * Comapres a list of items by their numeric values
     * @param {*} locator the common locator for all values to be comapred
     * @param {*} currentValue the variable that each value will be compared to. 
     * The value of this variable will hold the value of each option after it is compared.
     */
    verifyIncreasingOrder(locator, currentValue){
        cy.get(locator)
        .each((item) => {
            var amount = parseFloat(item.text().substring(1));
            cy.wrap(amount).should('be.gte', currentValue);
            cy.log('currentItem: ' + amount)
            currentValue = amount;
        });
    };

    /**
     * Comapres a list of items by their numeric values
     * @param {*} locator the common locator for all values to be comapred
     * @param {*} currentValue the variable that each value will be compared to. 
     * The value of this variable will hold the value of each option after it is compared.
     */
    verifyDecreasingOrder(locator, currentValue){
        cy.get(locator)
                .each((item) => {
                    expect(Number(item) <= Number(currentValue));
                    currentValue = (Number(item));
                });
    };

    /**
     * Finds a button on the page by its nave and locator and verifies it is enabled.
     * @param {*} btnName the name of the button
     * @param {*} btnLocator the locator of the button
     */
    verifyButtonIsPresentAndClickable(btnName, btnLocator){
        cy.get(btnLocator).should('have.text', btnName).
            and('be.enabled');
    };

    /**
     * Finds an image by its locator and verifies its url is the correct one
     * @param {*} elementLocator the locator of the image
     * @param {*} imageUrl the url of the image
     */
    verifyImageDisplayed(elementLocator, imageUrl){
        cy.get(elementLocator).should('have.attr', 'src', imageUrl);
    };
}

