describe('ตัวอย่างโค๊ดการ simple test script',()=>{
	const keyword = 'poolsawat.com'
	it('visit google website & search poolsawat.com',()=>{
    		cy.visit('https://www.google.com/')
    		.get('[jsaction="paste:puy29d"]').type(keyword)
    		.get('.FPdoLc > center > .gNO89b').click()
    	.get('a').contains(keyword,{timeout : 2000})
	})
})