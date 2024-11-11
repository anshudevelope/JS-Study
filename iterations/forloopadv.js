const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by Apple"
}

// forin loop

for (const key in myObject) {
    //console.log(`${key} is shortcut for the ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key);  // Output - 0 1 2 3 4
    //console.log(programming[key]);   // Output - js rb py java cpp
}


// foreach function

const coding = ["js", "rb", "java", "py"]

coding.forEach( function (val){
    console.log(val);
} )

// Or using arrow function

coding.forEach( (item) => {
    console.log(item);
})

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageFileName);
})