"use strict"; // treat all JS code as newer version of JavaScript

// alert(3+3)  // Not defined as We are using Node Js, Not Browser

console.log( 3 + 3); console.log("I am Anshu")   // not goot practice.
// code should be readable should be high and futureproof for better practices


// data type

let name = "Anshu"
let age = 25
let isLoggedIn = false

// Primitive datatypes

// number => 2 to power 52
// bigint ( for bigger number)
// string => ""
// boolean => true/false
// null  => it is a standalone value in JS ( null is not undefined, it is empty only eg. let temperature = null ) (datatype of null is Object)
// undefined => not defined ( eg. let temperature; ) (datatype of undefined is undefined)
// symbol => unique


// Object

console.log(typeof "Anshu");  // String
console.log(typeof age);      // Number
console.log(typeof undefined); // Undefined
console.log(typeof null);     // Object


// Data Types --
// 1- Primitive Data Types
// These are of 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt.

const id = Symbol('123')
const anotherId = symbol('123')

console.log(id === anotherId);  // Output => False

const bigNumber = 345678345693839234098092553592850928032n  // Converted to bigInt

// 2- Reference Data Type / Non Primitive Data Types (Return Type - Object/Function Object)
// Array, Objects, Functions

// Array
const heros = ["Saktiman", "Naagraj", "Thor", "IronMan", "SuperMan"]

// Object - Exist within {} & Written in Key Value Pairs. Eg.

{
    name: "Anshu",
    age: 26,
}

// Objects can also be stored in any valiable. eg.

let muobj = {
    name: "Anshu",
    age : 26,
}

// Function - In JS, Functions can also be treated as variables. and also function can be stored in any variable.

const myFunction = function(){
    console.log("Hello Anshu");
}

// Note - In JS we never define the language of any data type.


