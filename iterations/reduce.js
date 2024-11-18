const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);  // to check what values acc and currval have on each iteration.
//     return acc + currval
// }, 0)
//console.log(myTotal);


// Using Arrow function

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        productName: "Trimurti Gold Plated Idol",
        price: 3499
    },
    {
        productName: "Adiyogi Shiv ji Idol",
        price: 999
    },
    {
        productName: "Bal Gopal Idol",
        price: 1599
    },
    {
        productName: "Bal Ram ji Idol",
        price: 1199
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totalPrice);  // 7296
