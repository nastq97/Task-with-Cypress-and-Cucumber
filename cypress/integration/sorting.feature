Feature: Sort Products by Name/Price

    Background: 
        Given I have successfully logged in as a standard user
  
    Scenario: Check sorting option
        When I click on the Sort button
        Then I should see the following sorting options:
            | option              |
            | Name (A to Z)       |
            | Name (Z to A)       |
            | Price (low to high) |
            | Price (high to low) |

    Scenario: Sort items by name (Z-A)
        When I select the "Name (Z to A)" sorting option
        Then the first product should be "Test.allTheThings() T-Shirt (Red)"
        And the last product should be: "Sauce Labs Backpack"

    Scenario: Sort item by price (low to high)
        When I select the "Price (low to high)" sorting option
        Then the products should be sorted by price
