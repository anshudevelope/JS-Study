let score = 33 // type = number
console.log(typeof(score));
// or
console.log(typeof score);
// both valid

let conv = "33"  // type = string
console.log(typeof (conv)); 

// conversion of String to Number

let valueInNumber = Number(conv)   // Now conv String converted to Number
console.log(typeof valueInNumber);


let man = "345abc"   // type - String
console.log(typeof man);

let manvalue = Number(man) // type - Number (man type converted to Number)
console.log(typeof manvalue);
console.log(manvalue); // output - NaN (Not a Number)

let pur = null
console.log(pur); // output - null

let purvalue = Number(pur)
console.log(purvalue); // output - 0

let a = "anshu"  // type - String
let b = Number(a)
console.log(b); // Output - NaN (as String can not be converted into Number)


// => means converted to
// "33" => 33
// "222334abc" => NaN
// true => 1; false => 0;


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // output - 1 (1 Coverted to boolean true)

// 1=> true; 0=> false;
// "" => false
// "anshu" => true

let anyNumber = 45

let stringvalue = String(anyNumber) // Converting Number to String
console.log(stringvalue);
console.log(typeof stringvalue); // type - String
