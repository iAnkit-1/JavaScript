function one() {
    const username = "Ankit"

    function two() {
        const website = "youtube"
        console.log(username);
    }
//    console.log(website);   // website is not defined bec block scope
    two()
}

one()

// +++++++++++++ interesting +++++++++++++


console.log(add1(1));

function add1(num) {
    return num+1
}

console.log(add1(1));

/* console.log(add2(2));
 ReferenceError: Cannot access 'add2' before initialization

It occoured bec of Hoisting you can not access a var before declaration.

 */

 const add2 = function (num) {
    return num+2
}
console.log(add2(2));