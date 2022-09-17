let rowsLength;
describe ('Data Driven Testing Using Excel FIle', () =>{
  before(() => {
     cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows) => {
        rowsLength = rows.length;
        cy.writeFile("cypress/fixtures/xlsxData.json", {rows})
      })
        //cy.visit(Cypress.config('baseURL'));
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      })
    it ('Data Driven: Register User', () => {
      cy.fixture('xlsxData').then((data) => {

         for ( let i = 0; i ==0; i++) {
          cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.rows[i].username)
          cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.rows[i].password)
          cy.get('.oxd-button').click()
       cy.log(data.rows[i].username)

            
        }
      })     
     })
    })

