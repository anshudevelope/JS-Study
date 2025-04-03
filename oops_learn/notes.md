# JavaScript and Object-Oriented Programming (OOP)

## Object-Oriented Programming (OOP)
Object-Oriented Programming (OOP) is a programming paradigm that structures code into objects, which are instances of classes. Objects contain properties (data) and methods (functions) that operate on the data. OOP is used to create modular, reusable, and scalable code.

## Objects in JavaScript
An **object** in JavaScript is a collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type, including functions. Objects are used to store structured data and behavior together.

### Example:
```javascript
const person = {
  name: "John Doe",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

console.log(person.name); // John Doe
person.greet(); // Hello, my name is John Doe
```

### Built-in Methods Example
JavaScript objects have built-in methods, like `toLowerCase()` for strings:
```javascript
let str = "HELLO";
console.log(str.toLowerCase()); // Output: hello
```

## Why Use OOP?
OOP provides several benefits:
1. **Code Reusability:** Reuse classes and objects, reducing duplication.
2. **Modularity:** Divide code into self-contained objects, improving organization.
3. **Maintainability:** Easier to update and fix issues in structured code.
4. **Scalability:** Manage complex applications by using a hierarchical structure.
5. **Data Security:** Encapsulation helps protect sensitive data.

## Parts of OOP in JavaScript
### 1. Object Literals
Object literals are a simple way to create objects.
```javascript
const car = {
  brand: "Toyota",
  model: "Camry",
  start: function() {
    console.log("Car started");
  }
};
console.log(car.brand); // Toyota
car.start(); // Car started
```

### 2. Constructor Functions
A **constructor function** is used to create multiple objects with the same structure.
```javascript
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.start = function() {
    console.log(this.brand + " started");
  };
}

const myCar = new Car("Honda", "Civic");
console.log(myCar.brand); // Honda
myCar.start(); // Honda started
```

### 3. Prototypes
Every JavaScript object has a **prototype**, which is an object it inherits properties and methods from. This helps in memory efficiency by sharing methods among instances.
```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + " makes a sound");
};

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound
```

### 4. Classes (ES6)
Classes provide a cleaner and more structured way to implement OOP in JavaScript.
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, my name is " + this.name);
  }
}

const person1 = new Person("Alice", 25);
person1.greet(); // Hello, my name is Alice
```

### 5. Instances (new & this)
- `new` creates an instance of a class or constructor function.
- `this` refers to the instance of the object inside methods.
```javascript
const p1 = new Person("Bob", 40);
console.log(p1.name); // Bob
```

## 4 Pillars of OOP

### 1. Abstraction
Hiding complex implementation details and exposing only what’s necessary.
```javascript
class BankAccount {
  constructor(balance) {
    this._balance = balance; // Private property
  }

  getBalance() {
    return this._balance;
  }
}
const account = new BankAccount(1000);
console.log(account.getBalance()); // 1000
```

### 2. Encapsulation
Encapsulation restricts direct access to certain object properties and methods.
```javascript
class User {
  constructor(name, password) {
    this.name = name;
    let _password = password; // Private variable

    this.checkPassword = function(pass) {
      return _password === pass;
    };
  }
}
const user1 = new User("admin", "1234");
console.log(user1.name); // admin
console.log(user1.checkPassword("1234")); // true
```

### 3. Inheritance
Inheritance allows one class to derive properties and methods from another.
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a noise");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks");
  }
}

const myDog = new Dog("Buddy");
myDog.speak(); // Buddy barks
```

### 4. Polymorphism
Polymorphism allows different classes to be treated as instances of the same class through method overriding.
```javascript
class Shape {
  draw() {
    console.log("Drawing a shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing a square");
  }
}

const shapes = [new Circle(), new Square()];
shapes.forEach(shape => shape.draw());
// Output: Drawing a circle
//         Drawing a square
```

## Conclusion
JavaScript's OOP capabilities allow developers to write modular, reusable, and scalable code. Using objects, classes, and the four pillars of OOP, you can build efficient and organized applications.
