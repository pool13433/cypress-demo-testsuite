/*
1. แก้ไขไฟล์ exercise2.spec.js ให้ทำงานสมบูรณ์
2. เขียน testscript ใช้คำสั่ง .get() .type() เพิ่มค่าลงใน form ให้ครบถ้วน
3. ใช้ commands (as ,check ,click ,contains ,get ,log ,not) มาประยุกต์เพิ่มเติมการทำงานของเคสข้างล่างนี้
    (เพิ่มเติมหากมีเวลาเหลือ)
*/
const persons = require('./persons.json')

describe('ทดสอบการใช้งานร่วมกันของ command ต่าง ๆ', () => {

  persons.forEach((person, index) => {
    it('เขียน testscript ใช้คำสั่ง .get() .type() ของคุณ '+person.firstName, () => {
      cy.visit('/register.html')
        .screenshot('case__'+person.firstName)
        .get('#firstName').type(person.firstName)
        // เพิ่มโค๊ดของคุณที่นี่        
        .get('#lastName').type(person.lastName)      
        .get('#phone').type('000000{enter}')
        .get('#email').type(person.email)
        .get('#age').type(person.age)
        .get('#address').type('กทม')
        .then(()=>{
          if(person.gender == 'M'){
            cy.get('#male').check()
          }else{
            cy.get('#female').check()
          }          
        })
        .get('#occupation').select('Doctor')

        .get('#birthDate').type('2020-04-10')

        .get('.ui.form').submit()
    })
  })
})

