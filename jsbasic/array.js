// ARRAY - The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

const myArray = [7, 16, 22, 34, 54, 15]

console.log(myArray[4]);  // Output - 54

const myHeros = ["Anshu", "Thor", "Ant-Man", "IronMan"]

// Array Methods

myArray.push(224)  // inserts value from right/end
console.log(myArray);  // Output - [7, 16,  22, 34, 54, 15, 224]
myArray.pop()  // delete value from the right/end

myArray.unshift(367) // inserts value from left/start
console.log(myArray);  // Output - [367,  7, 16,  22, 34, 54, 15, 224]
myArray.shift()  // delete value from the left/start

console.log(myArray.includes(12)); // Output - false
console.log(myArray.indexOf(9));  // Output - -1 (Not Exist)
console.log(myArray.indexOf(34)); // Output - 3

const newArray = myArray.join()

console.log(myArray);  // Output - [ 7, 16, 22, 34, 54, 15 ]
console.log(newArray);  // Output - 7,16,22,34,54,15 *** Bind and converted to string
console.log(typeof(newArray)); // Output - String

// Slice and Splice ---

console.log("A", myArray);  // Output - A [ 7, 16, 22, 34, 54, 15 ]

const mynewa1 = myArray.slice(1,3)
console.log(mynewa1);   // Output - [ 16, 22 ]
console.log("B", myArray);  // Output - B [ 7, 16, 22, 34, 54, 15 ]

const mynewa2 = myArray.splice(1,3)
console.log("C", myArray);  // Output - C [ 7, 54, 15 ]  -- Here array changed
console.log(mynewa2);  // Output - [ 16, 22, 34 ]


// Interview Question - Difference b/w Slice and Splice

