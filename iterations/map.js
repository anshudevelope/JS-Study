const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// adding 15 on each no using map()

// const newNums = myNumbers.map( (num) => num + 15)
// console.log(newNums);

// method 2 - using scope{}

// const newNums = myNumbers.map( (num) => { return num + 15})
// console.log(newNums);

// Chaining - using two or more methods in one line of code

const newNums = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 10)
                .filter( (num) => num >= 40)

console.log(newNums);


 