import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('Home page', () => {
    cy.visit("https://www.google.com/")
    cy.wait(2000)
})