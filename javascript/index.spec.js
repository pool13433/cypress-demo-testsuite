// ประกาศตัวแปร
var name = 'Poolsawat'
const latName = 'Apin'
let age = 30

// ประเภทค่า
const object = {}
const array = []
const string = ""
const number = 9999
const bool = false
const func = () => { }

const person = {
  firstName: 'Poolsawat',
  lastName: 'Api',
  age: 20,
  getFullName: () => {
    return "Poolsawat Apin"
  }
}


// ประกาศ function
function getName () { }
const getLastName = function () { }
const getAge = (brithDate) => { return brithDate }

const calculateAge = () => { }
const calculateBirthDay = (age) => { }
const calculateBirthDay = age => { }

// ประกาศ Promise()
const myPromise = new Promise((resolve, reject) => {
  if(true){
    // resolve()
    resolve(true);
  }else{
    // reject()
  }
})

// use Promise 
myPromise.then((isOk)=>{
    // todo something
})


