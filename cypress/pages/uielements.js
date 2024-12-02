class Uielements{

    static visitweb(url)
    {
        cy.visit(url)
    }

    static verifyVisibility(checkbox)
    {
       cy.get(`#${checkbox}`).should("be.visible")
    }

    static selectCheckbox(checkbox)
    {
       return cy.get(`#${checkbox}`)
    }

    static unselectCheckbox(checkbox)
    {
        return cy.get(`#${checkbox}`)
    }

    static AllCheckbox()
    {
       return cy.xpath("//input[contains(@value,'day')]")
    }

    static maleRadioBtn(mradiobtn)
    {
        return cy.get(`#${mradiobtn}`)
    }

    static femaleRadioBtn(fradiobtn)
    {
        return cy.get(`#${fradiobtn}`)
    }

}

export default Uielements