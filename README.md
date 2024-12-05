### Behavior Driven Development (BDD) 

Behavior Driven Development (BDD) is an Agile software development process that encourages cooperation between developers and non-technical participants in within the project

**Why use BDD Framework?**
* Before the BDD framework, everyone was using TDD. TDD works fine in software development, provided the stakeholders are familiar with the framework being used and their technical knowledge is sufficient. However, this may not be the case always.

* BDD provides a path that acts as a bridge to overcome the gap between the technical and the non-technical teams because the test cases are commonly written in simple text, i.e. English. The main advantage of BDD is the plain and clearer approach which is easier to understand.

**BDD Format to write test case:**

**Given – When – Then - And** :
* **Given:** Some given context (Preconditions).
* **When:** Some Action is performed (Actions).
* **Then:** Particular outcome/consequence after the above step (Results).
* **And:** Adds additional conditions or actions to Given, When, or Then steps.
* **But:** Specifies exceptions or negative conditions in a step.

**Example**

```gherkin
Feature: User login

  Scenario: Successful login
    Given I am on the login page
    When I enter a valid username and password
    And I click the login button
    Then I should be redirected to the dashboard
    And I should see a welcome message
```