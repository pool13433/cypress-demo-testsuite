/*
1. แก้ไข testscript ให้ทำงานได้ตามที่โจทย์กำหนด
2. เขียน testscript เมื่อกดปุ่ม Login และแสดง alert “Login Successfully.” โดยไม่ต้องกรอก username และ password (ไม่ต้องกรอกค่าก็ Login ผ่าน)
*/

//  isRequired
//const username = isRequired('username');
//const password = isRequired('password');
//console.log(`username ::==${username} , password ::== ${password}`);

/*if (
  username == undefined ||
  password == undefined ||
  username == '' ||
  password == ''
) {
  alert('กรุณากรอก username หรือ password');
  return;
} else if (password.length < 4) {
  alert('กรุณากรอก password มากกว่า');
  return;
} else {
  alert('Login Successfully.');
  //e.target.submit()
}*/


describe('เขียน testscript จำลองการใช้งาน Spy & Stub', () => {
  it('เพิ่ม stub เพื่อทำให้การทำงาน ผ่าน แสดง "Login Successfully."', () => {
      cy.visit('/login.html',{
          onLoad(win){
            //เพิ่มโค๊ดของคุณที่นี่
            cy.stub(win,'isRequired',()=>{
              return '1234'
            })
          }
      })
      cy.on('window:alert', (str) => {
        console.log('str ::==',str)
        expect(str).to.equal(`Login Successfully.`)
      })
      cy.get('#login').submit()
  });
});