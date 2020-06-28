const _ = require('lodash')

var movies = [11, 22, 33, 44, 55, 66]
movies.forEach((item, index) => {
  console.log('item ::==' + item)
  console.log('index ::==' + index)
})
console.log('--------------------------')
for (let index in movies) {
  console.log('item ::==' + movies[index])
  console.log('index ::==' + index)
}
console.log('--------------------------')
for (let index = 0; index < movies.length; index++) {
  console.log('item ::==' + movies[index])
  console.log('index ::==' + index)
}

console.log('--------------------------')
const person = { firstName: 'Poolsawat', lastName: 'Apin', age: 20 }
/*person.forEach(()=>{

})*/
for (let key in person) {
  console.log('value ::==' + person[key])
  console.log('key ::==' + person[key])
}

console.log('--------- Lodash-----------------')
_.each(movies, (item, index) => {
  console.log('lodash item ::==' + item)
  console.log('lodash index ::==' + index)
})