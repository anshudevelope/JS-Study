class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){       // static is used to limit the access (Inheritance restricted)
        return `123`
    }
}

const newUser = new User("Anshu Maurya");

// console.log(newUser.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const vivo = new Teacher("VIVO", "vivo@gmail.com");

vivo.logMe();
console.log(vivo.createId());  // No access of ceateId here
