// Object De-Structuring

const course = {
    coursename: "Computer Science",
    price: "999",
    courseInstractor: "Anshu"
}

//course.courseInstractor  //- Mostly Used to get a value

// another method
const {courseInstractor} = course

console.log(courseInstractor);  // Output - Anshu

// another method
const {courseInstractor: instructor} = course

console.log(instructor);  // Output - Anshu    -- Here the key courseInstructor change to instructor only

// API - Json  - it structured as an object but withut a name. Also here Keys and Values both shold be in string form
// API Sources - random user me api
// Tools to understand APIs - Json Formatter

// API Type - 1
// {
//     "name": "Anshu Maurya",
//     "courseName": "Civil Engineering",
//     "price": "Free"
// }

// API Tpe - 2 - Array

// [
//     {},
//     {},
//     {},
//     {}
// ]




