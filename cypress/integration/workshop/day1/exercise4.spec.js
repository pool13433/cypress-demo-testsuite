/*
1. แก้ไขไฟล์ exercise4.spec.js
2. เขียน testscript assertions 10 เงื่อนไข เช่น contains(‘ข้อความ’) ,should(‘have.value’,’ช้อความ’) ,...
*/

describe('เขียน testscript assertions 10 เงื่อนไข', () => {
    it('ค้นหา ตรวจสอบเคส ตามที่คาดหวัง', () => {
        cy.visit('/table.html')
        // ตรวจสอบข้อความ "World" ในหน้าเว็บ
        // เพิ่มโค๊ดของคุณที่นี่

        // ค้นหา Element ของ "Thailand" และหาอันดับของ Thailand
        // เพิ่มโค๊ดของคุณที่นี่

        // ค้นหา จำนวนประเทศทั้งหมดที่ติดเชื้อ Covid
        cy.get('#covidState>tbody>tr').not('tr:eq(0)').should('have.length',215)      
    });    
    it('ค้นหาจำนวนประเทศที่มีเคสติดเชื่อเกิน 1 ล้านเคส มี 2 ประเทศ', () => {
        cy.visit('/table.html')       

        // ค้นหาจำนวนประเทศที่มีเคสติดเชื่อเกิน 1 ล้านเคส มี 2 ประเทศ
        let countCases = 0
        cy.get('#covidState>tbody>tr').not('tr:eq(0)').each($tr=>{
            const cases = Cypress.$($tr.find('td:eq(2)')).text().length;
            if(cases > 7){
                countCases++;
            }            
        }).then(()=>{
            expect(countCases).to.have.eq(2)
        })        
    });   
    it('ค้นหาจำนวนผู้ป่วยที่เสียชีวิต ของประเทศ Thailand มีเท่ากับจำนวนที่คิดตรวจสอบ', () => {
        cy.visit('/table.html')       

        let deathCase = 0;
        // เพิ่มโค๊ดของคุณที่นี่    


        expect(deathCase).to.have.eq(58)   
    });  
});