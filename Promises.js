// Promise creation

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB connect Task, Cryptography, network
    setTimeout(function () {
        console.log("Async task is completed");
        resolve();

    }, 1000);
});

// Consumption of created promise (promiseOne)

promiseOne.then(function () {
    console.log("Promise Consumed");    // Promise will never be consumed/used without using resolve method at promise creation.
})

// Another promise creation without assigning it to any variable

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Promise 2 Used here");
})

// Third Promise

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "anshu", email: "anshu@gmail.com" })   // Passing an object in resolve method.
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user)
})

// Fourth Promise

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Anshu", password: "anshu@2025" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => {
        console.log("The promise is either resolved or rejected");
    })

// Promise 5 - Use of try and catch

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Princess", password: "princess@2025" })
        } else {
            reject('ERROR: Connection went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive();