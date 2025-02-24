describe("Testing user signup", () => {
  beforeEach(() => {
    cy.fixture("formData").as("formData");
  });
  it("Sould sign a user up and create account", () => {
    cy.get("@formData").then((formData) => {
      //Verify Site Home Page Is Accesbile And Visible
      cy.visit("/");
      cy.contains("Contact List App").should("be.visible");

      //button for signup
      cy.get("#signup").click();

      //Adding User info
      const userFields = (selector, value) => cy.get(selector).type(value);
      const time = Date.now();
      const email = `testing${time}@gmail.com`;

      userFields("#firstName", formData.first_name);
      userFields("#lastName", formData.last_name);
      userFields("#email", email);
      userFields("#password", formData.password );
      
      cy.get('#submit').click();

      //Verify That User Accessed Content
      cy.url().should('include','contactList');
      cy.contains('Contact List').should('be.visible');

    });
  });
});
