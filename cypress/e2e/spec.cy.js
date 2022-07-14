/// <reference types="cypress" />

import isEven from 'is-even'

describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')

    expect(isEven(2)).to.be.true;
  })
})
