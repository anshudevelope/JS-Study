// const anshAdmin = new Object() -- Singleton Object

const anshAdmin = {}    // Non singleton object

// console.log(anshAdmin);   // Output - {}  -- In both cases

anshAdmin.id = "ans1999h"
anshAdmin.name = "Anshu Maurya"
anshAdmin.email = "anshu@gmail.com"
anshAdmin.isLoggedIn = false

// console.log(anshAdmin);  // Output -{ id: 'ans1999h', name: 'Anshu Maurya', email: 'anshu@gmail.com', isLoggedIn: false}   -- Object Created

// Object inside an Object - Nested Object
const regualUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Anshu",
            lastName: "Maurya"        
        }
    }
}

// console.log(regualUser.email); // Output - some@gmail.com
// console.log(regualUser.fullName);  // Output - { userFullName: { firstName: 'Anshu', lastName: 'Maurya' } }
// console.log(regualUser.fullName.userFullName.firstName);  // Output - Anshu


// Objects Combine/merger
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1, obj2}
// console.log(obj3); // Output - { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// assign(target, source); method

// const obj3 = Object.assign(obj1, obj2) // Output - { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }  -- Not a right method as obj2 is merging in obj1. Here obj1 - target and obj2 - source.

//const obj3 = Object.assign({}, obj1, obj2) // Output - { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }  -- Correct expression to merge obj1 & obj2 in an empty Object.

// Using Spread operator --- mostely used 
const obj3 = {...obj1, ...obj2}  // Output - { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj3);

// working on anshAdmin Object here

console.log(anshAdmin);
console.log(Object.keys(anshAdmin)); // Output - [ 'id', 'name', 'email', 'isLoggedIn' ]  -- Used to find how many keys are present in the provided data in array/object
console.log(Object.values(anshAdmin));  // Output - [ 'ans1999h', 'Anshu Maurya', 'anshu@gmail.com', false ] --Used to find how many values are present in the provided data in array/object
console.log(Object.entries(anshAdmin));  // Output - [ [ 'id', 'ans1999h' ], [ 'name', 'Anshu Maurya' ], [ 'email', 'anshu@gmail.com' ], [ 'isLoggedIn', false ] ] -- Gives all the key-value pairs of given data of array/object

console.log(anshAdmin.hasOwnProperty('email'));  // Output - true  // to check is any key/property available in the given data





