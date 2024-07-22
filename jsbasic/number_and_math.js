const score = 500
console.log(score);  // output = 500

const payment = new Number(500)
console.log(payment);   // output = [Number: 500]


// toString() - to convert any number into string
console.log(payment.toString()); // output = 500
// now we can use string properties 
console.log(payment.toString().length);  // output = 3

// toFixed() - Mostly use for E-commerce Applications
console.log(payment.toFixed(2));  // output = 500.00

// toPrecision() - returns string
const purchase = 1234.7649
console.log(purchase.toPrecision(4));  // output = 1235
console.log(purchase.toPrecision(5));  // output = 1234.8
console.log(purchase.toPrecision(3));  // output = 1.23e+3 (Exponential form)

// toLocaleString() - to arrange numbers in units
const myRank = 125673457
console.log(myRank.toLocaleString());  // output = 125,673,457  (Default USA Form)
console.log(myRank.toLocaleString('en-IN'));  // Output = 12,56,73,457  (Converted into Indian Form)


// ------ Maths ---------- //

console.log(Math);
console.log(Math.abs(-45));   // output = 45
console.log(Math.round(45.7)); // output = 46  used more frequently
console.log(Math.ceil(45.9));  // output = 46
console.log(Math.floor(45.9)); // output = 45
console.log(Math.min(34, 44, 56, 4, 59, 134)); // output = 4
console.log(Math.max(34, 44, 56, 4, 59, 134));  // output = 134

// random()  -  most used and important (Gives random value b/w 0 to 1)

console.log(Math.random());
console.log((Math.random() * 10) + 1);  // Gives value from 1 to 9
console.log(Math.floor(Math.random() * 10) + 1);  // Gives a whole value b/w 1 to 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // Most General formula for generating random no b/w max and min no

