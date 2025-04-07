function setUserName(username){
    // complex DB called
    this.username = username;
    console.log("called");   
}

function createUser(username, email, password){
    setUserName.call(this, username);  // to hold the reference of the given functiondgtb8h-0

    this.email = email
    this.password = password
}

const newUser = new createUser("anshu", "anshu@gmail.com", "6386256045");

console.log(newUser);
