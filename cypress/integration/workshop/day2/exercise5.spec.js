/*
1. workshop สุดท้าย ใส่พลังอย่างเต็มที่
2. สร้าง testscript จองตั๋วภาพยนต์ ตั้งแต่เริ่มแรก จนถึงหน้ายืนยันการจ่ายเงิน
3. เลือกภาพยนต์เรื่อง “Trolls World Tour”
4. เลือกจอง วันพรุ้งนี้
5. เลือกเวลา (กำหนดเอง ตามใจคุณ)
6. เลือกโซน กทม.
7. เลือกที่นั่ง 4 ที่นั่ง (Zone D,E,F,G โซนละที่นั่ง) 

*/
const SF_URL = 'https://www.sfcinemacity.com/movies/now-showing'

describe('เขียน testscript จองตั๋วภาพยนต์ SF', () => {
  it('เข้า website SF เลือกภาพยนต์ที่ต้องการจอง', () => {
    // กำหนดวันที่ดูภาพยนต์เป็นวันพรุ้งนี้
    const bookTargetDate = Cypress.moment().add(1, 'days').format('DD MMM YYYY')
    // กำหนดเวลาดูภาพยนต์ 11:45
    const bookTargetTime = '11:45'
    // กำหนดชื่อภายนต์ที่จะดู
    //const movieTarget = 'Batman Begins'
    const movieTarget = 'Fantasy Island'    

    cy.visit(SF_URL)
      // เปลี่ยนภาษา
      .contains('ENG').click()
      //เพิ่มโค๊ดของคุณที่นี่
  });
});