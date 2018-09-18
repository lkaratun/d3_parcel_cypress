describe("Plot", () => {
  before(() => {
    cy.visit("http://localhost:1234");
  });
  it("Triggers the callback function on click", () => {
    cy.window().then(window => {
      const callbackSpy = cy.spy(window, "callback");

      cy.get("#plot")
        .get("circle")
        .click()
        .then(() => {
          expect(callbackSpy).to.be.called;
        });
    });
  });
});
