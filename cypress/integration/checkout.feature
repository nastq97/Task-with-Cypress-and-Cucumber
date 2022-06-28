Feature: checkout
    
    Background: User is Logged In
        Given I have successfully logged in as a standard user
        And have added 5 items in my cart:
            | name                    |
            | Sauce Labs Backpack     |
            | Sauce Labs Bike Light   |
            | Sauce Labs Bolt T-Shirt |
            | Sauce Labs Fleece Jacket|
            | Sauce Labs Onesie       |
            
    Scenario: Logged in user with 5 items selected verifies items in the Cart
        When I navigate to my Cart
        Then I should see a list of 5 items with their correct price:
            | name                    | price |
            | Sauce Labs Backpack     | 29.99 |
            | Sauce Labs Bike Light   | 9.99  |
            | Sauce Labs Bolt T-Shirt | 15.99 |
            | Sauce Labs Fleece Jacket| 49.99 |
            | Sauce Labs Onesie       | 7.99  |

    Scenario: Validate Items and their price in the checkout page
        And I am on the Cart page
        When I click the Checkout button
        And submit my personal information:
            | firstName |  lastName | postalCode |
            | Anastasia  | Kovalyova  | 5558     |
        Then I should see a list of 5 items with their correct price:
            | name                    | price |
            | Sauce Labs Backpack     | 29.99 |
            | Sauce Labs Bike Light   | 9.99  |
            | Sauce Labs Bolt T-Shirt | 15.99 |
            | Sauce Labs Fleece Jacket| 49.99 |
            | Sauce Labs Onesie       | 7.99  |
        And the total price shoudld be:
            | total |
            | 113.95|
          

    Scenario: Complete the purchase on the checkout page
        And I am on the Checkout page
        When I clcik on the Finish button
        Then I should see the site logo and the following elements displayed:
            | message                                                                                                                  | button    |
            | THANK YOU FOR YOUR ORDERYour order has been dispatched, and will arrive just as fast as the pony can get there!Back Home | Back Home |
        