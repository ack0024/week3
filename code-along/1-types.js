// 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇
  
// 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥

let firstName = 'Ben'
let greeting = 'hello, ' + firstName
console.log(greeting)

let x = 3
console.log(x)


let y = 4
console.log(y)

let z = x + y
console.log(z)

y = 6
console.log(y)

let dinner = 'tacos'
let quantity = 5
let hasGuacamole = false

let output
// output = 'Ordering ' + dinner + ' tonight'
// output = 'Ordering ' + quantity + ' ' + dinner + ' tonight'
output = `Ordering ${quantity} ${dinner} tonight`


//  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆

/*
  this code does the work of writing the output to screen...
  so leave it alone :) this code expects a variable named
  'output' to be declared
*/
document.querySelector('.output').innerHTML = output