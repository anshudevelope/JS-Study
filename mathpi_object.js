const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);


// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);   // Value not changed or updated

const admin = {
    name: "anshu",
    class: 12,
    isLogin: true,
    setEmail: function(){
        console.log("Email not provided");
        
    }
}

// console.log(Object.getOwnPropertyDescriptor(admin));   // undefined
// console.log(Object.getOwnPropertyDescriptor(admin, "name"));  // working

for(let [key, Value] of Object.entries(admin)) {    // here loop will work as iteration is allowd
    if(typeof Value !== 'function'){                // if condition to remove function access
        // console.log(`${key} : ${Value}`);
        
    }
}

// Now change the default properties of created object admin by JS (can be only done on the objects created by you)

Object.defineProperty(admin, "name", {
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(admin, "name"));


for(let [key, Value] of Object.entries(admin)) {    // here loop will not work as iteration for name key is restricted
    if(typeof Value !== 'function'){
        console.log(`${key} : ${Value}`);
    }
}