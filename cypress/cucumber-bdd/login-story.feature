Feature: as a user i should be able to use the login functionality
    as a user i am testing the login functionality, whether its working or not

Scenario: as a user i should be able to login
    Given i successfully navigated to home page
    When i entered the username "Admin"
    And i entered the password "admin123"
    And i clicked on the submit button
    Then i should be successfully logged in and navigated to homepage
