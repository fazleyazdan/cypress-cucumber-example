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
        cy.get(`#${checkbox}`).check().should("be.checked")
    }

    static unselectCheckbox(checkbox)
    {
        cy.get(`#${checkbox}`).uncheck().should("not.be.checked")
    }

    static selectAllCheckbox()
    {
        cy.xpath("//input[contains(@value,'day')]").check()
    }

    
    

}

export default Uielements