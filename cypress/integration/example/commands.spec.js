describe('API Commands Examples', () => {
  
  // API Command as & check
	it.skip('(as,check)', () => {
    	cy.visit('/register.html').get('[name="gender"]').as('asGenderRadios')
        	.get('@asGenderRadios').eq(0).check()
        	.get('@asGenderRadios').eq(1).check()

  });
  
  // API Command as & check
	it.skip('(click)', () => {
    	cy.visit('/')
    	.get('[data-tab="third"]').click()
    	.get('a[data-tab="first"]').click()
    	.get('[data-tab="second"]').click()
    	.get('[data-tab="five"]').click()
	});

  // API Command as & check
	it.skip('(contains)', () => {
    	cy.visit('/change-password.html')
    	.get('[data-tab="first"]').contains('New Password')
	});

  // API Command as & check
	it.skip('(log)', () => {
    	cy.log('command 0001')
    	cy.log('command 0002')
    	cy.log('command 0003')
    	cy.log('command args', ['one', 'two', 'three'])
  });
  
  // API Command as & check
	it.skip('(not)', () => {
    	cy.visit('/register.html')
    	.get('[type="text"]')
    	.not('#firstName')
    	.should('have.length',2)
	});

  // API Command as & check
	it.skip('(request)', () => {
    	cy.request('GET','/table.html').then(res => {
        	expect(res.body).contains('Today Cases')
        	expect(res).to.have.property('headers')
        	expect(res).to.have.property('duration')
        	expect(res.status).to.eq(200)
    	})
	});

  // API Command as & check
	it.skip('(screenshot)', () => {
    	cy
    	.visit('/register.html').screenshot('screenshot-register')
    	.visit('/window.html').screenshot('screenshot-window')
    	.visit('/login.html').screenshot('screenshot-login')
    	.visit('/change-password.html').screenshot('screenshot-change-password')
    	.visit('/table.html').screenshot('screenshot-table')
	});

  // API Command as & check
	it.skip('(select)', () => {
    	cy.visit('/register.html')
    	.get('select[name="occupation"]').select('driver')
	});

  // API Command as & check
	it('(should)', () => {
    	const firstName = 'poolsawat.com'
    	cy.visit('/register.html')
    	.get('[name="occupation"]').should('have.value','cook')
    	.get('[name="gender"]').should('have.length',2)

    	.get('[name="firstName"]').as('firstName')
    	.get('@firstName').type(firstName)
    	.get('@firstName').should('have.value',firstName)
    	.get('@firstName').should(($input)=>{
        	expect($input).to.have.value(firstName)
    	})
    	.get('[name="age"]').type(30)
    	.get('[name="age"]').should('have.gt',30)
	});


  

	/*it('(route)', () => {
    	cy
    	.server()
    	.route('/authen',{
        	message : 'OK',
        	code : '001'
    	}).as('authenSuccess')

    	//cy.wait('@authenSuccess')

    	cy.request('http://localhost:9999/authen').then(res => {
        	expect(res.body).to.have.property('message')
    	})
	});*/
});
