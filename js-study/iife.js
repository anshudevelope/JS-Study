// IIFE - Immediately Invoked Function Expression
// These are JavaScript functions that are executed immediately after they are defined. 
// They are typically used to create a local scope for variables to prevent them from polluting the global scope.

// Named IIFE
(function admin(){
    console.log(`ADMIN LOGEED IN`);
})();                                 // here semicolon(;) is used to end the first code and used in case of multiple IIFEs used. and () is used to execute the function.
                                     
(function user(){
    console.log(`USER LOGEED IN`);
})();

// Unnamed/Simple IIFE

( (name) => {
    console.log(`USER IS ${name}`); 
}) (`ANSHU`)