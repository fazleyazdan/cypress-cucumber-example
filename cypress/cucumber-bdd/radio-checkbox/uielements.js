
      import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps"


      Given("I navigate to {string}",(url)=>{
        cy.visit(url)
      })
     
      Then("I verify that the {string} checkbox is visible", (checkbox)=>{
        cy.get(`#${checkbox}`).should("be.visible")
      })

      When("I click on {string} checkbox", (checkbox)=>{
        cy.get(`#${checkbox}`).check().should("be.checked")
      })

      Then("it should be checked", () => {
        // Already asserted in the previous step, but can add any additional logic if required.
      });
      
      When("I deselect the {string} checkbox", (checkbox)=>{
        cy.get(`#${checkbox}`).uncheck().should('not.be.checked')
      })

      Then("it should be unchecked", () => {
        // Already asserted in the previous step, but can add any additional logic if required.
      });
       
      When("I select all the checkbox", ()=>{
        cy.xpath("//input[contains(@value,'day')]").check()
      })

      Then("it should be unchecked", () => {
        cy.xpath("//input[contains(@value,'day')]").check().should("be.checked")
      });
      
      When("I select all the checkboxes", ()=>{
        cy.xpath("//input[contains(@value,'day')]").check()
      })

      Then("all the checkboxes should be selected", () => {
        cy.xpath("//input[contains(@value,'day')]").should("be.checked")
      });
      
      When("I deselect all the checkboxes", ()=>{
        cy.xpath("//input[contains(@value,'day')]").uncheck()
      })

      Then("all the checkboxes should be unchecked", () => {
        cy.xpath("//input[contains(@value,'day')]").should("not.be.checked")
      });
      
      When("I select the first checkbox", ()=> {
        cy.xpath("//input[contains(@value,'day')]").first().check()
      })

      And("I select the last checkbox", ()=>{
        cy.xpath("//input[contains(@value,'day')]").last().check()
      })
        
      Then("first and last checkboxes should be selected", ()=> {
        cy.xpath("//input[contains(@value,'day')]").first().should("be.checked")
        cy.xpath("//input[contains(@value,'day')]").last().should("be.checked")

      })
