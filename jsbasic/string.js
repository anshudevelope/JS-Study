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

// subString
const newString = myName.substring(0, 8)
console.log(newString);  // Output = Anshu Ma

// slice
const newString1 = myName.slice(2, 4)
console.log(newString1); // Output = sh   (slice can also take negative values)

// Trim
const newString2 = "    Please Donn't add more Space     "

console.log(newString2);  // Output =     Please Donn't add more Space     
console.log(newString2.trim()); // Output = Please Donn't add more Space   *trimmed all extra spaces

// Replace
const url = "https://www.shriprasadam.shop/"

console.log(url.replace('.shop', '.com')); // Output = https://www.shriprasadam.com/

// includes - to ask anything present in the string

console.log(url.includes('shriprasadam'));  // Output - True

// Split 

console.log(myName.split('-'));


