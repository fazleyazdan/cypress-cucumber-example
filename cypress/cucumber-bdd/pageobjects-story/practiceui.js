
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps"
import pages from "../../pages/uielements" 
import Uielements from "../../pages/uielements"

Given("I navigate to {string}",(url)=>{
  Uielements.visitweb(url)
})

Then("I verify that the {string} checkbox is visible", (checkbox)=>{
  Uielements.verifyVisibility(checkbox)
})

When("I click on {string} checkbox", (checkbox)=>{
  Uielements.selectCheckbox(checkbox).check().should("be.checked")
})

Then("it should be checked", () => {
  // Already asserted in the previous step, but can add any additional logic if required.
});

When("I deselect the {string} checkbox", (checkbox)=>{
  Uielements.unselectCheckbox(checkbox).uncheck().should('not.be.checked')
})

Then("it should be unchecked", () => {
  // Already asserted in the previous step, but can add any additional logic if required.
});
 
When("I select all the checkboxes", ()=>{
  Uielements.AllCheckbox().check()
})

Then("all the checkboxes should be selected", () => {
  Uielements.AllCheckbox().should("be.checked")
});

When("I deselect all the checkboxes", ()=>{
  Uielements.AllCheckbox().uncheck()
})

Then("all the checkboxes should be unchecked", () => {
  Uielements.AllCheckbox().should("not.be.checked")
});

When("I select the first checkbox", ()=> {
  Uielements.AllCheckbox().first().check()
})

And("I select the last checkbox", ()=>{
  Uielements.AllCheckbox().last().check()

})
  
Then("first and last checkboxes should be selected", ()=> {
  Uielements.AllCheckbox().first().should("be.checked")
  Uielements.AllCheckbox().last().should("be.checked")

})

Given("I navigate to {string}",(url)=>{
  Uielements.visitweb(url)
})

When("I click {string} radio button", (mradiobtn)=>{
  Uielements.maleRadioBtn(mradiobtn).click().should("be.checked")
})

Then("it should be selected", ()=>{

})

When("I click {string} radio button", (fradiobtn)=>{
  Uielements.femaleRadioBtn(mradiobtn).click()
})

Then("{string} radio button should be unchecked and {string} radio button should be checked", (mradiobtn,fradiobtn)=>{
  Uielements.maleRadioBtn(mradiobtn).should("not.be.checked")
  Uielements.femaleRadioBtn(fradiobtn).should("be.checked")
})
