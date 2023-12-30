describe("Various examples", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });
  it("multi-page testing", () => {
    cy.getDataTest("nav-why-cypress").click();
    cy.location("pathname").should("equal", "/");
    cy.contains(/Why Cypress?/i).should("exist");

    cy.getDataTest("nav-overview").click();
    cy.location("pathname").should("equal", "/overview");

    cy.getDataTest("nav-fundamentals").click();
    cy.location("pathname").should("equal", "/fundamentals");
  });

  it("intercepts", () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      fixture: "example.json",
    });
    cy.getDataTest("post-button").click();
  });



  it.only("grudges", () => {
    cy.contains(/Add Grudge/i);
    cy.getDataTest("grudge-list-title").as('title').should("have.text", "Add Some Grudges");
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 0);
    });
    cy.getDataTest("clear-button").should("not.exist");


    cy.getDataTest("grudge-input").within(() => {
      cy.get("input").as("grudge-input").type("some hates");
    });



    cy.getDataTest("add-grudge-button").as("add-button").click();

    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").as("list").should("have.length", 1);
    });

     cy.get("@title").should("have.text", "Grudges");

  cy.getDataTest("clear-button").as("clear-button").should("exist");
    cy.get("@grudge-input").type("some likes");
    cy.get("@add-button").click();
    // cy.get('@list').should("have.length", 2);

    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 2);
      cy.get("li").its(0).should("contain.text", "some hates");
    });

    // cy.getDataTest("grudge-list").within(() => {
    //   cy.get("li").its(0).within(()=>{
    //     cy.get('button').click()
    //   })
    // });


    cy.get("@list")
      .its(0)
      .within(() => {
        cy.get("button").click();
      });

    cy.get("@list").should("have.length",1)
    cy.get("@clear-button").should("exist");
    cy.get("@clear-button").click()
    cy.get("@list").should("have.length",0)

    cy.get("@clear-button").should("not.exist");
   cy.getDataTest("grudge-list-title")
     .as("title")
     .should("have.text", "Add Some Grudges");


  });
});
