// Date - in Future Temporal(https://tc39.es/proposal-temporal/docs/) Proposed to use in place of Date.

let myDate = new Date()

console.log(myDate); // Output - 2024-08-03T16:05:52.817Z
console.log(myDate.toString()); // Output - Sat Aug 03 2024 16:07:24 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Output - Sat Aug 03 2024
console.log(myDate.toLocaleString()); // Output - 8/3/2024, 4:10:35 PM
console.log(typeof myDate); // Output - Object

let myNewDate = new Date(2024, 0, 25)

console.log(myNewDate.toDateString()); // Output - Thu Jan 25 2024
// in JS, Months starts from 0 to 11: 0-Jan, 1-Feb, 2-Mar....

// OR
let myNewDate1 = new Date(2024, 0, 25, 5, 30)

console.log(myNewDate1.toLocaleString()); // Output - 1/25/2024, 5:30:00 AM

// OR
let myNewDate2 = new Date("2024-01-25")
console.log(myNewDate2.toLocaleString());  // Output - 1/25/2024, 12:00:00 AM

// OR
let myNewDate3 = new Date("01-25-2024")
console.log(myNewDate3.toLocaleString()); // Output - 1/25/2024, 12:00:00 AM

// Time

let myTimeStamp = Date.now()

console.log(myTimeStamp); // Output - 1722704214104  (in Milli Seconds)
console.log(myNewDate3.getTime());  // Output - 1706140800000 (in ms)
console.log(Math.floor(Date.now()/1000));  // Output - 1722704214 (in Seconds)

//----------------------------------------------//

let newDate4 = new Date()

console.log(newDate4);  // Output - 2024-08-03T17:12:05.421Z
console.log(newDate4.getMonth()); // Output - 7
console.log(newDate4.getDay()); // Output - 6

// `Date is ${newDate4.getDay()} and the time is`

newDate4.toLocaleString('default', {
    Weekdays: "long",
})






