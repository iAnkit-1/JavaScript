// singleton : object created by constructor eg. Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name : "Ankit",
    "fullName" : "Ankit Saini",
//    mySym : "stringKey1", // here mySym : is a string key,  out: meriKey1
    [mySym] : "symbolKey",
    age : 18,
    email : "ankitsaini@gmail.com",
    isLoggedIn : false,
    location : "Sonbhadra",
    lastDays : ["Mon", "Tue"]
};
console.log(JsUser);
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["fullName"]);

//console.log(typeof JsUser.mySym);  //string

console.log(JsUser[mySym]);     // symbol type

JsUser.greet = function(){
    console.log("Hi");
};

console.log(JsUser.greet());

JsUser.email = "ankit@gmail.in";
console.log(JsUser["email"]);

Object.freeze(JsUser);

JsUser.email = "ankit@google.in";
console.log(JsUser["email"]);

