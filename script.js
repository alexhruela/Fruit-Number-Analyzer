let userName = prompt("Enter your name:");
let userNumber = parseFloat(prompt("Enter a number:"));

const BASE_NUMBER = 5;

console.log(`Hello, ${userName}!`);
console.log(`Your number: ${userNumber}`);
console.log(`BASE_NUMBER: ${BASE_NUMBER}`);

console.log(`Sum: ${BASE_NUMBER + userNumber}`);
console.log(`Difference: ${BASE_NUMBER - userNumber}`);
console.log(`Product: ${BASE_NUMBER * userNumber}`);
console.log(`Quotient: ${BASE_NUMBER / userNumber}`);

let sentence = prompt("Enter a short sentence:");

console.log("Uppercase:", sentence.toUpperCase());
console.log("Lowercase:", sentence.toLowerCase());

if (userNumber >= 0) {
  console.log("Using if: The number is positive.");
} else {
  console.log("Using if: The number is negative.");
}

let positivity = userNumber >= 0 ? "Using ternary: The number is positive." : "Using ternary: The number is negative.";
console.log(positivity);

console.log("For loop: Counting from 1 to your number:");
for (let i = 1; i <= userNumber; i++) {
  console.log(i);
}

console.log("While loop: Countdown from 5");
let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}

function greetUser(name) {
  console.log("Hello, " + name + "!");
}

greetUser(userName);

let fruits = [];
for (let i = 1; i <= 3; i++) {
  let fruit = prompt(`Enter favorite fruit #${i}:`);
  fruits.push(fruit);
}

console.log("Your favorite fruits are:", fruits);
