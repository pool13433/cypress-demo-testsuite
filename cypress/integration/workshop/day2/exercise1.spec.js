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
          expect(response.body).to.have.length(216)

          //ตรวจสอบขนาดของ response มี property headers หรือไม่
          //เพิ่มโค๊ดของคุณที่นี่
          expect(response).to.have.property('headers')

          //ตรวจสอบขนาดของ response status code 200
          //เพิ่มโค๊ดของคุณที่นี่
          expect(response.status).to.have.eq(200)

          //ตรวจสอบขนาดของ response content-type contains json
          //เพิ่มโค๊ดของคุณที่นี่
          expect(response.headers['content-type']).to.contains('json')

          // ตรวจสอบจำนวนประเทศที่ติดเชื้อมากกว่า 100 ประเทศหรือไม่ (ใช้ greaterThan)
          expect(response.body).to.have.length.greaterThan(100)


          // ตรวจสอบ response body มีค่าหรือไม่ 
          assert.exists(response.body, 'check body data exists')
          expect(response.body).to.be.exist;

          // ตรวจสอบมี property ที่ชื่อว่า country ของข้อมูล แถวแรก หรือไม่
          expect(response.body[0]).to.have.property('country')


          response.body.forEach((item,index)=>{
            //console.log('index ::==',index)
            //console.log('item ::==',item)
            console.log('country ::==',item.country)
            console.log('item ::== to Json',JSON.stringify(item))
            if(index == 94){
              expect(item.country).to.equal('Thailand')
            }            
          })
          expect(response.body[94].country).to.have.eq('Thailand')
      })
  });
});