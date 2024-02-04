// this : refers to current context

const user = {
    uname : "Ankit",
    rnum : 7,

    welcome : function () {
        console.log(`${this.uname}, Welcome here`);
        console.log("Current context : ",this);
    }
}

user.welcome()

user.uname = "Mohit"
user.welcome()

// this. : does not work for function
function chai() {
    let uname = "abc"
  //  console.log(this.uname); //undefined
  console.log((this));
}

//  chai()



        // Arrow Function
// Q : Diff b/w normal and arrow fun        


const chai2 =   () => {
    let uname = "abc"
   console.log(this.uname); //undefined
  console.log((this));  // output : {}
}     

//  chai2()

// const add2 = (n1 + n2) => (n1 + n2) // no return keyword reqired
// const add2 = (n1 + n2) => n1 + n2    // return keyword can be added

