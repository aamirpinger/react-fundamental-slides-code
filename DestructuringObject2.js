// run this file using node DestructuringObject2.js

const myObject = { firstName: 'Aamir', lastName: 'Pinger', degrees: 2 }

console.log(myObject.firstName)
console.log(myObject.lastName)
console.log(myObject.degrees)

const { firstName, lastName } = myObject

console.log(firstName)
console.log(lastName)
console.log(degrees)

const sentence = `${firstName} ${lastName} has ${degrees} Masters degrees`

console.log(sentence)
