describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', () => {
  it('Checks checks if next and prev buttons work', () => {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    // cy.get('.swiper-slide-active img').should('have.attr', 'src', 'https://images.unsplash.com/photo-1599557041284-7e2a15610388?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    cy.get('.swiper-slide-active').should('have.attr', 'data-swiper-slide-index', '1');
    cy.get('.swiper-button-prev').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('have.attr', 'data-swiper-slide-index', '0');
    // cy.get('.swiper-slide-active img').should('have.attr', 'src', 'https://images.unsplash.com/photo-1565854713475-6e297773a53f?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  });
});

describe('Swiper Gallery Test', () => {
  it('Checks if title and description is valid', () => {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active img').should('be.visible');
    cy.get('.swiper-slide-active .card-description h1').should('have.text', 'Rome');
    cy.get('.swiper-slide-active .card-description p').should('have.text', 'Italy');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active img').should('be.visible');
    cy.get('.swiper-slide-active .card-description h1').should('have.text', 'London');
    cy.get('.swiper-slide-active .card-description p').should('have.text', 'United Kingdom');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active img').should('be.visible');
    cy.get('.swiper-slide-active .card-description h1').should('have.text', 'Paris');
    cy.get('.swiper-slide-active .card-description p').should('have.text', 'France');
  });
});
