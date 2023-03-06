describe('Amazon Shopping Cart Example', () => {

    it('should begin adding to the shopping cart check', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        // Navigate to home page
        cy.visit('https://www.amazon.com/')
        // Interact with the search to find an apple watch
        cy.get('#twotabsearchtextbox').type('Apple Watch Series 8')
        // Submit the search
        cy.get('#nav-search-submit-button').click()
        // Select the apple watch "Givin more time I would work to shorten the selector and interact with the grid scruture"
        cy.get('[data-asin="B0BDHWBB6Z"] > :nth-child(1) > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium').click()
        // Confirm the apple watch page has loaded
        cy.get('#productTitle').contains('Apple Watch Series 8')
        // Add item to shopping cart
        cy.get('#add-to-cart-button').click()
        // Select to add apple care 
        cy.get(':nth-child(2) > .a-box-inner > .a-fixed-left-grid > .a-fixed-left-grid-inner > .a-fixed-left-grid-col.a-col-left > .a-row > .a-checkbox > label > .a-icon').click()
        // Add protection to cart
        cy.get('#attachSiAddCoverage > span > input').click()
        // Click to navigate to your cart
        cy.get('#attach-sidesheet-view-cart-button').contains('Cart')
        // Should reload screen (Doing this because I want to confirm the shopping cart view is updated correctly)
        cy.reload()
        // Should confirm the shopping cart is reflecting the correct number
        cy.get('#nav-cart-count').contains('2')
        // Navigate to shopping cart
        cy.get('.nav-cart-icon').click({ force: true })
        // Confirm two items are ready for checkout 
        cy.get('#sc-subtotal-label-buybox').contains('Subtotal (2 items)')
        // Navigate to check out
        cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click()
        // Confirm landing on sign in page
        cy.get('.a-padding-extra-large > .a-spacing-small').contains('Sign in')
        // Navigate back to homepage
        cy.get('.a-link-nav-icon > .a-icon').click()
        // Interact with the search to find an apple watch case to find by ASIN
        cy.get('#twotabsearchtextbox').type('B0BGG6P5F2')
        // Click search
        cy.get('#nav-search-submit-button').click()
        // Confirm the correct item is displayed then click the item
        cy.get('.a-size-base-plus').contains('24 Pcs Case').click()
        // Confirm the correct ASIN number is displayed
        cy.get(':nth-child(3) > .prodDetAttrValue').contains('B0BGG6P5F2')
        // Add to shopping cart
        cy.get('#add-to-cart-button').click()
        // Should confirm the shopping cart is reflecting the correct number
        cy.get('#nav-cart-count').contains('3')
        // Navigate to shopping cart
        cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
        // Confirm two items are ready for checkout 
        cy.get('#sc-subtotal-label-buybox').contains('Subtotal (3 items)')
        // Navigate to check out
        cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click()
        // Confirm landing on sign in page
        cy.get('.a-padding-extra-large > .a-spacing-small').contains('Sign in')
    })
})