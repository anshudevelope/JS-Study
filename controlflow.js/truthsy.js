// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}


const emptyArray = []

if (emptyArray.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}

// Some comparisions

// false == 0   > true
// false == ''   > true
// 0 == ''  > true