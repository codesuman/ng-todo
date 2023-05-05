import { initInterceptors } from "./util/interceptors";

const DEBUG_DELAY: number = 1000; // In milli-seconds


describe('Todo App', () => {
  beforeEach(() => {
    initInterceptors();
  });

  it('Visit List Page & Evaluate Header', () => {
    cy.visit('/')
    cy.contains('My Todo List')
  });

  it('Visit List Page & Evaluate Data list', () => {
    cy.visit('/')
  
    cy.log('Waiting for 2 secs before opening API intercepts')
    cy.wait(DEBUG_DELAY)

    // https://docs.cypress.io/api/commands/wait#Nesting
    // cy.wait(['@getOne, @getTwo, @getThree])
    
    cy.wait(['@getTodoList']).its('response.statusCode').should('eq', 200)
    
    cy.contains('My Todo List')

    cy.get(`ul`).should('have.length', 3)
  });
})
