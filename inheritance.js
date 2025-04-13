class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`);
        
    }
}


class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.passowrd = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const admin = new Teacher("Anshu", "anshu@gmail.com", "1234");

admin.addCourse()
admin.logMe()

const adminPro = new User("Anshu Maurya");

// adminPro.addCourse()   - No access

adminPro.logMe()

console.log(admin === adminPro);   // False

console.log(admin instanceof User);  // True

