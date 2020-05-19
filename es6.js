function readfile(callback) {
  callback
}

let myFunctions = (x) => {
  return console.log(`read file from ${x * 2}`)
}

readfile(myFunctions(4))

const sum = (x, y) => x + y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

let arrayFunction = [sum, multiply, divide]

const calculate = (x, y, fn) => fn(x, y);

let result = calculate(1, 2, (x,y) => x + y)

console.log(result)

let number = [];
const increment = () => number += 1;

// const increment = n =>{
//   return n + 1
// };

const arr = [1,2,3]

let r = arr.map(x => x + 1)

let f = arr.filter(x => x > 2)

let reduce = arr.reduce((x,y) => x + y, 1)

let c = arr.map(x => x + 1).reduce((x,y) => x + y, 0) 

// console.log(c)