Feature: login
    Background:
        Given I am on the Login page
    
    Scenario Outline: Verify a valud user can log in 
        When I submit my '<username>' and '<password>'
        Then I should be on the '<page>' page with '<pageURL>'

        Examples: Successful Login
            | username                | password     | page     | pageURL                                  |
            | standard_user           | secret_sauce | Products | https://www.saucedemo.com/inventory.html |
            | performance_glitch_user | secret_sauce | Products | https://www.saucedemo.com/inventory.html |                   
            | problem_user            | secret_sauce | Products | https://www.saucedemo.com/inventory.html |
                                        

    Scenario Outline: Verify invalid users cannot sign in
        When I submit my '<username>' and '<password>'
        Then I should be on the '<page>' page with '<pageURL>'
        And see the the '<message>' message
        Examples: Unsuccessful Login
            | username                | password     | pageURL                                 | page     | message                                                                   |
            | locked_out_user         | secret_sauce | https://www.saucedemo.com/              | Login    | Epic sadface: Sorry, this user has been locked out.                       |
 
