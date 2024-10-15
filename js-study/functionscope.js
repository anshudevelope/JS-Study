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


// Nested Scope

function one(){
    const username = "Anshu"

    function two(){
        website = "github"
        console.log(username);
        
    }

    // console.log(website);
    
    two()
}

// one()

if (true) {
    const username = "Anshu"
    if (username === "Anshu"){
        const website = "github"
        console.log(username + website);  
        
    }
    // console.log(website);   // Not its scope here
    
}

// console.log(username);


// +++++++++++++++ Interesting ++++++++++++++++

//function declaration - 1

function addone(num){
    return num + 1
}

addone(5)   // here you can use addone() before function decalaration

// function declaration - 2

const addtwo = function(num){
    return num + 2
}

addtwo(6)  // // here you can not use addone() before function decalaration