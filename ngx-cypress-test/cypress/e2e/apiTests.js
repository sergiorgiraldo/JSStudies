
describe("Tests with backend", () => {

    beforeEach("login to application", () => {
        cy.loginToApplication();
    });

    it("should log in", () =>{
        cy.log("yeeyah")
    });
});