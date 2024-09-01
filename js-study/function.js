// Function - It is a pack of codes which can be reused whenever you want to use by making its copies.

// Declaration of function

// First Method

// function sayMyName() {           // function - Keyword  | sayMyName - Function name | () - function Syntex  | {} - Function Scope
//       console.log("A");
//       console.log("N");
//       console.log("S");
//       console.log("H");
//       console.log("U");
// }

//sayMyName()   // to execute any function use - () after function name
// Output - A N S H U

// jab aap function ki definition bnate h to uske andar () me jo bhi aap lete h unko "Parameters" bolte h and Jab function ko aap call krate h tab jo value uske andar pass krte h to usko bolte h "Arguments"

// Second Method

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
// const result = addTwoNumbers(3, 5)  // output - 8
// console.log("Result:", result);  // Output - Result: undefined    -- That is a problem

// Third Method

function addTwoNumbers(num1, num2){

        // Ist method

        // let result = num1 + num2
        // // console.log("Anshu");   // Yha pe Anshu Print ho jaega but after return nhi hoga.
        // return result
        // console.log("Anshu");   // This console will never be executed as it is the default definition rule of any function that if you return anything within the function then after that no function will work. 
        

        // 2nd method

        return num1 + num2
    }
    
    const result = addTwoNumbers(3, 5)  
    
    // console.log("Result:", result);   // Output - Result: 8


// Fourth Method

function loginUsedMessage(username){
    return `${username} just logged in`
}

// console.log(loginUsedMessage("Anshu"));  // Output - Anshu just logged in
// console.log(loginUsedMessage(""));  // Output -   just logged in
// console.log(loginUsedMessage());  // Output - undefined just logged in

// Another case

function loginUsedMessage(username = "Anshu"){
       if(!username){     
        console.log("Please enter a username");  // not executed as username is now defined
        return        
    }

    return `${username} just logged in`  
}

console.log(loginUsedMessage());  // Anshu just logged in
console.log(loginUsedMessage("Jhonson"));  // Jhonson just logged in