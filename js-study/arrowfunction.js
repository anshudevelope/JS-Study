// 'this' Keyword is used to indicate current context/values/variables.

const user = {
    username: "Anshu",
    price: 2345,

    welcomeMessage: function () {
        console.log(`${this.username}, Welocme to the website`);
        console.log(this);  // Check its output 
        
    }
}

user.welcomeMessage()   // Output - Anshu, Welocme to the website

user.username = "Princess"
user.welcomeMessage()   // Output - Princess, Welocme to the website

console.log(this);   // Output - {}  -- In node environment this refers as empty object but in browser it shows window onject.


// 'This' global values and properties can be checked by the given method

// function hero(){
//     let username = "admin anshu"
//     console.log(this.username);   // Undefined
//     console.log(this);  // Gives all this values
// }
// hero()

// Using Arrow Function
 
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3,17));    // Output - 20

// Implicit return using arrow function

const addThree = (num1, num2, num3) => num1 + num2 + num3

console.log(addThree(23,45,34));  // Output - 102

// if we wrap any code using curly braces {} we have to use return but if we use parantheses () then no need to use return keyword.

const addFour = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4)

console.log(addFour(34,23,34,25));  // Output - 116
