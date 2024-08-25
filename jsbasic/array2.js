const india_Heros = ["Krish", "Shaktiman", "Junior-G", "AryaMan", "FlyigJatt"]

const marvel_Heros = ["Thor", "Ironman", "Spiderman"]

// using push()
// india_Heros.push(marvel_Heros)

// console.log(india_Heros); // Output- ['Krish', 'Shaktiman', 'Junior-G', 'AryaMan', 'FlyigJatt', [ 'Thor', 'Ironman', 'Spiderman' ]]
// console.log(india_Heros[5][2]); // Output - Spiderman  --- To access any value from a nested array

// Using concat() - It returns a new array so assigning the concat of two array to new array all_Heros
const all_Heros = india_Heros.concat(marvel_Heros)

console.log(all_Heros); // Output- ['Krish', 'Shaktiman', 'Junior-G', 'AryaMan', 'FlyigJatt', 'Thor', 'Ironman', 'Spiderman']
// gives same result as push()

// Note - Jo push() hai wo to actually me existing array me hi push krta h but jo concat hai wo return krta h new array.


// spread operator - Maximum used by developer instead of concat()
const all_New_Heros = [...india_Heros, ...marvel_Heros]

console.log(all_New_Heros); // Output - ['Krish', 'Shaktiman', 'Junior-G', 'AryaMan', 'FlyigJatt', 'Thor', 'Ironman', 'Spiderman']


// Multiple nested array - Using flat() - simplify an array
const nest_Array = [1, 2, 3, [4, 5, 6], 7, [3, 4, 5, [4, 9, 4]]]

const usable_Anarray = nest_Array.flat(Infinity)

console.log(usable_Anarray); // Output - [1, 2, 3, 4, 5, 6, 7, 3, 4, 5, 4, 9, 4] - simplified array upto infinity. Here you can also mention in place of infinity that how nest you want to simplify your array as 1 or 2 or 3 or any no.


// More of Array

console.log(Array.isArray("Anshu")); // Output - false

// to convert any value into array - using from
console.log(Array.from("Anshu")); // Output- [ 'A', 'n', 's', 'h', 'u' ]

console.log(Array.from({name: "Anshu"}));  // Intersting case for interviews  - Output - [] - An empty array - As when from is unable to convert any value into array then it returns an empty array as output.

// for multiple values to convert into Array, We use of() method
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Output - [100, 200, 300]



