const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What number do you like? ", function(number) {
    console.log(`calculated factorial in number of you choose,\nthat's resulted ${factorial(number)}`)
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
} 
var cache = 100;
//due to memoization following line will cache first 100 elements
factorial(cache);