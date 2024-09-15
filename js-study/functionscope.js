let a = 10
var b = 20
const c = 30


// {}  -- It(curly braces) is known as scope in almost every programming language.

if (true) {
    let a = 200
    var b = 300
    const c = 400
    console.log(a);  // Output - 200
    console.log(b);  // Output - 300
    console.log(c);  // Output - 400
}

console.log(a);  // Output - 10
console.log(b);  // Output - 300
console.log(c);  // Output - 30
