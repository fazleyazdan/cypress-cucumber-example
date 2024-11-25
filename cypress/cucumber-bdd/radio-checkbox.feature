Feature: testing UI elements
    Here I am am testing radio buttons & checkbox to validate wether its working fine

    Scenario: Testing checkboxes on the test automation practice page
        Given I navigate to "https://testautomationpractice.blogspot.com/"
        Then I verify that the "sunday" checkbox is visible
        When I click on "sunday" checkbox
        Then it should be checked
        When I deselect the "sunday" checkbox
        Then it should be unchecked
        When I select all the checkboxes
        Then all the checkboxes should be selected
        When I deselect all the checkboxes
        Then all the checkboxes should be unchecked
        When I select the first checkbox
        And I select the last checkbox
        Then first and last checkboxes should be selected
        
    Scenario: Testing Radio buttons on the test automation practice page