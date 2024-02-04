// Immediately Invoked Function Expression

/*
 Why Need : To remove pollution caused by global scope variables & declarations
 syntax :      ()()
 first () for fun definition & sec () for execution call
 */

(
    function chai() {   // named IIFE : chai
        console.log(`DB CONNECTED`);
    }
)();    // must use ; to stop execution



(
    (name) => {         // unnamed IIFE
        console.log(`DB CONNECTED to ${name}`);
    }
)("Server");


