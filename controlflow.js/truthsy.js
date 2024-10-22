// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}


const emptyArray = []

if (emptyArray.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}

// Some comparisions

// false == 0   > true
// false == ''   > true
// 0 == ''  > true

// Nullish Coalescing Operator (??): null undefined
// The nullish coalescing (??) operator is a logical operator that returns 
// its right-hand side operand when its left-hand side operand is null or undefined, 
// and otherwise returns its left-hand side operand.

let val1;

val1 = 5 ?? 78

console.log(val1);  // Output - Left hand operand - 5

let val2;
val2 = null ?? 30   // Output - Right hand operand - 10

console.log(val2);

var1 = undefined ?? 15

console.log(var1);   // Output - Right hand operand - 15

var2 = null ?? 23 ?? 45

console.log(var2);  // First Right hand operand - 23

var3 = null ?? undefined ?? 34

console.log(var3);  // First right hand operand except null/undefined - 34


//  Terniary Operator -- Syntext
// condition ? truth : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");    // Output - more than 80



