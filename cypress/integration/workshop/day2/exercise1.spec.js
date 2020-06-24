/*
1. ใช้ command request call URL https://coronavirus-19-api.herokuapp.com/countries และ assertions cases ต่าง ๆ 
    content-type : application/json
    headers statuscode : 200
*/

describe('เขียน testscript call RESTful API ของ Covid API ', () => {
  it('ทดสอบ Call RESTful API', () => {
      cy.request('https://coronavirus-19-api.herokuapp.com/countries')
      .should(response =>{          
          //ตรวจสอบขนาดของ response data record size = 216
          //เพิ่มโค๊ดของคุณที่นี่

          //ตรวจสอบขนาดของ response มี property headers หรือไม่
          //เพิ่มโค๊ดของคุณที่นี่

          //ตรวจสอบขนาดของ response status code 200
          //เพิ่มโค๊ดของคุณที่นี่

          //ตรวจสอบขนาดของ response content-type contains json
          //เพิ่มโค๊ดของคุณที่นี่
      })
  });
});