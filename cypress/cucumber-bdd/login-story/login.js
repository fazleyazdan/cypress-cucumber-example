import { Given,When,And,Then } from "cypress-cucumber-preprocessor/steps";

Given("i successfully navigated to home page", ()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/")
})

When("i entered the username {string}", (Username)=>{
    cy.get("input[placeholder='Username']").clear().type(Username)
})

And("i entered the password {string}", (password)=>{
    cy.get("input[placeholder='Password']").clear().type(password)
})

And("i clicked on the submit button", ()=>{
    cy.get("button[type='submit']").click()
})

Then("i should be successfully logged in and navigated to homepage", ()=>{

    cy.title().should("include", "OrangeHRM")
})

