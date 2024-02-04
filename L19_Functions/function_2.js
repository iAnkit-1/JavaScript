
function calCarPrice(...num1) { // rest operator : ...
    return num1;
}

        // passing multiple arguments in function
//  console.log(calCarPrice(200, 400, 500));


                // passing object into function

const user = {
    username : "Ankit",
    price : 15000000
}                


function printObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//  printObject(user)
printObject({username : "Mohit", price : "25000000"})



