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

let result = calculate(1, 2, arrayFunction[0])

console.log(result)
