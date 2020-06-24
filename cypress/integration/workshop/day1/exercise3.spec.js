/*
1. แก้ไขไฟล์ exercise3.spec.js
2. เขียน testscript capture screen หน้าจอ ตาม tabs ทั้งหมด ประกอบไปด้วย index ,register ,register ,Rregister list ,window ,...
3. หน้า /window.html ต้องการให้ capture screen ส่วนของปุ่ม “Window Alert และ Window Confirm” เท่านั้น ตามภาพ
*/

describe('เขียน testscript capture screen หน้าจอ', () => {
    it('screencapture page /index.html', () => {
        cy.visit('/').screenshot('index-html')
    });
    it('screencapture page /register.html', () => {
        // เพิ่ม screencapture page /register.html  ที่นี่
    });

    // เพิ่ม it screencapture page อื่น ๆ  ที่นี่

    it('capture screen ส่วนของปุ่ม “Window Alert และ Window Confirm” เท่านั้น', () => {
        cy.visit('/window.html')
        // เพิ่มโค๊ดของคุณที่นี่
    });

});