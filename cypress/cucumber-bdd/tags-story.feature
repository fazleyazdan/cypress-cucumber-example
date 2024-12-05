Feature: as a user i should be able to use the login functionality and select different option on homepage
    as a user i am testing the login functionality, whether its working or not

# To execute specific scenario out of multiple scenario, we can use focus tag. this will execute scenario having focus tag 
  @focus                                 
  Scenario: Successfully logging in
    Given I successfully navigate to the home page
    When I enter the username "Admin"
    And I enter the password "admin123"
    And I click on the submit button
    Then I should be successfully logged in and navigated to the homepage

  Scenario: Navigating to Admin Dashboard
    Given I am logged in as "Admin" with password "admin123"
    When I click on the Admin option
    Then I should be navigated to the Admin Dashboard
