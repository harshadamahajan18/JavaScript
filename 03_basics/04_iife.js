// Immediately Invoked function Expression (IIFE)

(function chai(){
    //  named IIFE
    console.log(`DB CONNECTED`);
})(); // give semicolon to run another function otherwise gives error

// We used iife to remove global pollution of variables and scopes

( (name) => { // parameter pass
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('harsha')

// We can use two IIFE with the use of semicolon on first IIFE