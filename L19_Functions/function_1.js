function sayName() {
    console.log("A");
    console.log("B");
    console.log("C");
}

// sayName();

function addNum(num1, num2) {
    // input val given during fun def. are : Parameters
    console.log(num1 + num2); 
}

//  addNum(2, 3);   // val passed in calling fun are : Arguments
//    addNum(2, "3");

function loginUserName(username = "anonymus") {
    return `${username} just logged in.`
}

//  console.log(loginUserName("Ankit"));