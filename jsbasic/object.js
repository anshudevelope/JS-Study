// singleton  - Study in object2.js file

// object literals - to declare any object

// Object.create    --  Constructor method - singleton

const mySym = Symbol("key1")

const jsUser = {
    name: "Anshu",
    "full Name": "Anshu Maurya",
    // mySym: "myKey1"  --- if we use the symbol like this then it gives the data type as "String" but we want the data type as symbol, So wrong X
    [mySym]: "myKey1",  // Right Method to define symbol
    age: 23,
    location: "laxmi nagar",
    email: "anshu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);  // Output - anshu@gmail.com
// console.log(jsUser["email"]);  // Output - anshu@gmail.com
// console.log(jsUser["full Name"]);  // Output - Anshu Maurya
// console.log(jsUser[mySym]);  // Output - myKey1   
// console.log(typeof mySym);   // output - Symbol

jsUser.email = "anshu.maurya7300@gmail.com"
// Object.freeze(jsUser)  // To freeze the object and no chane allowed in any key value pair.
jsUser.email = "ansh.maurya2234@gmail.com"

// console.log(jsUser);  // Output - No Change in email and email is - anshu.maurya7300@gmail.com


jsUser.greetings = function(){
    console.log("Hello JS Users");
}

jsUser.greetingsTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greetings()); // Output - Hello JS Users    -- Undefined
console.log(jsUser.greetingsTwo()); // Output - Hello JS User, Anshu   -- undefined




