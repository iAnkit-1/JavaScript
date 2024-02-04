/*
    let , const : block
    var : global

    let & const can not be redeclared outside block
    but let can be re initialized
    var can be re declared and reinitialized anywhere
 */


let a = 1
const b = 2
var c = 3
console.log(a);
console.log(b);
console.log(c);

if(true)
{
    let a = 1
    const b = 2
    var c = 3

console.log(a);
console.log(b);
console.log(c);
}
let a = 10
const b = 20
var c = 30

console.log(a); //1
console.log(b); //2
console.log(c); //30