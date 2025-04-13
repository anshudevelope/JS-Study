// ES6

// class User {
//     constructor(username, email, passowrd) {
//         this.username = username;
//         this.passowrd = passowrd;
//         this.email = email;
//     }


//     encryptPassword() {
//         return `${this.passowrd}anshu`
//     }

//     changeUserName() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const admin = new User("Anshu", "anshu@gmail.com", "Anshu@1234");

// console.log(admin.encryptPassword());
// console.log(admin.changeUserName());

// behind the scene without using class & Constructor

function User(username, email, passowrd) {
    this.username = username;
    this.passowrd = passowrd;
    this.email = email;
}

User.prototype.encryptPassword = function () {
    return `${this.passowrd}anshu`
}

User.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}`
}

const admin2 = new User("Anshu2", "anshu@gmail.com", "Anshu@1534");

console.log(admin2.encryptPassword());
console.log(admin2.changeUserName());