import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('Home page', () => {
    cy.visit("https://www.saucedemo.com/")
    cy.wait(7000)
})