describe('ตัวอย่างโค๊ดการ command request ', () => {
    it('ทดสอบ Call RESTful API', () => {
        cy.request('https://coronavirus-19-api.herokuapp.com/countries')
        .should(response =>{
            //console.log('response ::=='+JSON.stringify(response))
            expect(response.body).to.have.length(216)
            expect(response).to.have.property('headers')
            expect(response.status).to.have.eq(200)
            expect(response.headers['content-type']).to.contain('application/json;')

            expect(response.body).to.exist    
            expect(response.body).to.have.length.greaterThan(100)      
            expect(response.body[0]).to.have.property('country')  
        })
    });
});