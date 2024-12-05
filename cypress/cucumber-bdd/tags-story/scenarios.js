import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

// Reusable login function
const login = (username, password) => {
  cy.visit("https://opensource-demo.orangehrmlive.com/");
  cy.get("input[placeholder='Username']").clear().type(username);
  cy.get("input[placeholder='Password']").clear().type(password);
  cy.get("button[type='submit']").click();
  cy.title().should("include", "OrangeHRM");
};

Given("I successfully navigate to the home page", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/");
});

When("I enter the username {string}", (username) => {
  cy.get("input[placeholder='Username']").clear().type(username);
});

And("I enter the password {string}", (password) => {
  cy.get("input[placeholder='Password']").clear().type(password);
});

And("I click on the submit button", () => {
  cy.get("button[type='submit']").click();
});

Then("I should be successfully logged in and navigated to the homepage", () => {
  cy.title().should("include", "OrangeHRM");
});

Given("I am logged in as {string} with password {string}", (username, password) => {
  // reuseable functions
    login(username, password);
});

When("I click on the Admin option", () => {
  cy.xpath("//a[normalize-space()='Admin']").click();
});

Then("I should be navigated to the Admin Dashboard", () => {
  cy.url().should("contain", "/admin");
});
