/*
1. 
*/
const SF_URL = 'https://www.sfcinemacity.com'

describe('เขียน testscript จองตั๋วภาพยนต์ SF', () => {
  it('เข้า website SF เลือกภาพยนต์ที่ต้องการจอง', () => {
    // กำหนดวันที่ดูภาพยนต์เป็นวันพรุ้งนี้
    const bookTargetDate = Cypress.moment()
      //.add(1, 'days')
      .format('DD MMM YYYY')
    // กำหนดเวลาดูภาพยนต์ 11:45
    //const bookTargetTime = '11:45'
    const bookTargetTime = '16:40'
    // กำหนดชื่อภายนต์ที่จะดู
    //const movieTarget = 'Batman Begins'
    const movieTarget = 'Fantasy Island'    

    cy.visit(SF_URL + '/movies/now-showing')
      // เปลี่ยนภาษา
      .contains('ENG',{timeout : 3000}).click()
      // ตรวจสอบ ค้นหาชื่อหนังที่ต้องการ จากนั้นกดเลือก
      .get('.movies-now-showing').contains(movieTarget, { timeout: 3000 }).get('[title="' + movieTarget + '"]').click()
      // ตรวจสอบวันที่จะจองหนัง
      .get('.slick-track').contains(bookTargetDate).click()
       // เลือกโซน กทม.
      .get('.showtime-box').contains('Bangkok').next()
      // ตรวจสอบว่ามีเวลา และ กดเลือก
      .contains(bookTargetTime).should('be.visible')
      .contains(bookTargetTime).click()
      // ตรวจสอบการแสดง หน้าจอของ SCREEN   
      cy.get('.table-seatmap').contains('SCREEN').should('be.visible')
      // เลือกที่นั่งของภาพยนต์
      .then(() => {
        return new Cypress.Promise(resolve=>{
          // กำหนดโซนที่นั่ง
          let seatCounter = 0;
          const seatsZone = ['D', 'E', 'F', 'G']
          const seatIdx = 4;
          const maxRowSeat = Cypress.$('.screen-wrapper').closest('td[colspan]').attr('colspan') 
          const middleSeat = parseInt(maxRowSeat)/2
          //console.log('maxRowSeat ::==',maxRowSeat)
          for (let index in seatsZone) {
            const name = seatsZone[index]
            const selectorStr = 'button.seat-available[seatname*="'+name+'"]';
            //console.log('name ::==', name)
            //console.log('index ::==', index)       
            if(Cypress.$(selectorStr).length > 0){
                cy.get(selectorStr).not('[disabled="disabled"]').each(($el,index)=>{
                    const seatName = Cypress.$($el).attr('seatname')
                    const seatIdx = parseInt(seatName.substring(1,seatName.length))-1
                    // เลือกตำแหน่งที่นั่ง
                    if(seatName.indexOf(name) > -1 && seatCounter <4){
                      cy.get('[seatname="'+seatName+'"]').click()
                      seatCounter++;
                    }              
                })
            }     
            
          }
          resolve()
        })
      })
      // กดเลือก Continue
      .get('.sidebar-select-seat').contains('Continue').click()
      // ตรวจสอบว่าเป็นหน้าจ่ายเงินใช่หรือไม่
      .get('.box-payment').contains('Confirmation').should('be.visible')
      // กรอก อีเมลล์
      .get('[name="email"]').type('example@gmail.com')
      // กรอกเบอร์โทร
      .get('[name="mobile"]').type('0900000000')
      // ...
  });
});