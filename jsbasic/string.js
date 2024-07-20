const name = "Anshu "
const failedInExam = 10

// console.log(name + failedInExam + " But Why"); // Output - Anshu 10 But Why  --- this is old method

console.log(`Hello my name is ${name} and I failed in ${failedInExam} no of exams`);  // String Interpolation.
// Output - Hello my name is Anshu  and I failed in 10 no of exams 

// Declaring String

const myName = new String('Anshu Maurya')  // 'new' is used to convert string function into String Object

console.log(myName);
console.log(myName[0]);
console.log(myName[6]);
console.log(myName.__proto__);  // returns an object {}
console.log(myName.length);  // output = 12
console.log(myName.toUpperCase()); // Output = ANSHU MAURYA  * but this doesn't change the original string   
console.log(myName.charAt(6));  // Output = M
console.log(myName.indexOf('M')); // Output = 6
