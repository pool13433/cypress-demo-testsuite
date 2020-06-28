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

const movies = [
  //{name : 'Fantasy Island' , time : '11:45' , day : '30 Jul 2020'},
  {name : 'Emma' , time : '19:25' , day : '30 Jun 2020'},
  {name : 'Emma' , time : '19:25' , day : '30 Jun 2020'},
  {name : 'Emma' , time : '19:25' , day : '30 Jun 2020'},
  {name : 'Emma' , time : '19:25' , day : '30 Jun 2020'},
  {name : 'Emma' , time : '19:25' , day : '30 Jun 2020'},
  //{name : '32 Malasana Street' , time : '12:25' , day : '30 Jul 2020'},
]

describe('เขียน testscript จองตั๋วภาพยนต์ SF', () => {
  movies.forEach((movie)=>{
    it('เข้า website SF เลือกภาพยนต์ที่ต้องการจอง ::=='+movie.name, () => {
      // กำหนดวันที่ดูภาพยนต์เป็นวันพรุ้งนี้
      const bookTargetDate = Cypress.moment().lang('TH').add(1, 'days').format('DD MMM YYYY')
      // กำหนดเวลาดูภาพยนต์ 11:45
      const bookTargetTime = '11:45'
      // กำหนดชื่อภายนต์ที่จะดู
      //const movieTarget = 'Batman Begins'
      const movieTarget = 'Fantasy Island'    
      const movieName = 'Emma'
      cy.visit(SF_URL)
        // เปลี่ยนภาษา
        .contains('ENG',{timeout : 3000}).click()
        //เพิ่มโค๊ดของคุณที่นี่
        .get('.movies-now-showing')
        .contains(movieName,{timeout : 3000}).click()
        .get('.main-detail h1').contains(movie.name,{timeout : 3000})
        
        //const  next2Day = Cypress.moment().add(2,'days').format('DD MMM YYYY')
        cy.get('.slick-track').contains(movie.day).click()
        .get('.container').contains('Bangkok')
        
        .get('.container').contains(movie.time).click()
        //.click()

        // select seat 
        // [seatname*="J"]
        let seatMaxSize = 0
        cy.get('.table-seatmap>tbody>tr>td>button.seat-available').each(($el,index)=>{
          //console.log('seat Name ::=='+$el.attr('seatname'))
          const seatName = $el.attr('seatname')
          Cypress._.forEach(['D','E','F'],(seatKey ,index)=>{            
            if(seatName.indexOf(seatKey) > -1 && seatMaxSize < 2){
              cy.get('[seatname="'+seatName+'"]').click()
              seatMaxSize++
            }
          })
        }).then(()=>{
          cy.get('.sidebar-select-seat').contains('Continue').click()
        })
  
    });
  })
  
});