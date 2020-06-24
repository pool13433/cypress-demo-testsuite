/*
1. แก้ไขไฟล์ exercise5.spec.js
2. เขียน testscript เงื่อนไขตรวจจับการ click window.alert 5 ครั้ง
*/

describe('เขียน testscript ตรวจจับเงื่อนไขของ เหตุการณ์ต่าง (Events)', () => {
    it('ค้นหา ตรวจสอบเคส จำนวนการ click alert จากหน้าจอ', () => {
        let countAlert = 0
        cy.visit('/window.html')
        cy.on('window:alert', () => {
            // เพิ่มโค๊ดของคุณที่นี่
        })
        cy.get('#btnAlert').as('btnClick')
            .get('@btnClick').click()
            // เพิ่มโค๊ดของคุณที่นี่
            .then(() => {
                expect(countAlert).to.have.eq(5)
            })
    });
});