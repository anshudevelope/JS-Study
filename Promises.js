// Promise creation

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB connect Task, Cryptography, network
    setTimeout(function() {
        console.log("Async task is completed");
        resolve();
        
    }, 1000);
});

// Consumption of created promise (promiseOne)

promiseOne.then(function(){
    console.log("Promise Consumed");    // Promise will never be consumed/used without using resolve method at promise creation.
})

// Another promise creation without assigning it to any variable

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Promise 2 Used here");
})

// Third Promise

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "anshu", email: "anshu@gmail.com"})   // Passing an object in resolve method.
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})
