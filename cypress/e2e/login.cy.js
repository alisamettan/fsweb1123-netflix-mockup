describe("Login Page:", () => {
  it("opens the app", () => {
    cy.visit("http://127.0.0.1:5173/");
  });

  it("opens the sign up page on signin button click", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5173/");

    //Act
    cy.get('[data-test-id="signin-button"]').as("signinButton").click();

    //Assert
    cy.url().should("be.equal", "http://127.0.0.1:5173/login");
  });

  it("gets error on sign up page for name input", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5173/");
    cy.get('[data-test-id="signin-button"]').click();

    //Act
    cy.get('[data-test-id="name-input"]').type("emr");

    //Assert
    cy.get('[data-test-id="error"]').should("have.length", 1);
  });

  it("gets error on sign up page for email input", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5173/");
    cy.get('[data-test-id="signin-button"]').click();

    //Act
    cy.get('[data-test-id="email-input"]').type("emr");

    //Assert
    cy.get('[data-test-id="error"]').should("have.length", 1);
  });
});

describe("Login Page Signup button tests", () => {
  it.only("disabled", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5173/login");

    //Act
    cy.get('[data-test-id="name-input"]').type("emr");
    cy.get('[data-test-id="email-input"]').type("emr");

    //Assert
    cy.get('[data-test-id="signup-button"]').should("be.disabled");
  });

  it.only("enabled", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5173/login");

    //Act
    cy.get('[data-test-id="name-input"]').type("emre");
    cy.get('[data-test-id="email-input"]').type("emre@wit.com");
    cy.get('[data-test-id="terms-checkbox"]').check();

    //Assert
    cy.get('[data-test-id="signup-button"]').should("not.be.disabled");
    cy.get('[data-test-id="signup-button"]').should("be.enabled");
  });
});

describe("browse page", () => {
  it.only("opens welcome page on successful sign up", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5173/login");
    cy.get('[data-test-id="name-input"]').type("emre");
    cy.get('[data-test-id="email-input"]').type("emre@wit.com");
    cy.get('[data-test-id="terms-checkbox"]').check();

    //Act
    cy.get('[data-test-id="signup-button"]').click();

    //Assert
    cy.url().should("be.contains", "/welcome");
  });

  it.only("opens cannot visit welcome page", () => {
    //Act
    cy.visit("http://127.0.0.1:5173/welcome");

    //Assert
    cy.url().should("be.contains", "/login");
  });
});
