
// singleton obj : const tinderUser = new Object()
// non-singleton obj : const tinderUser = {}


const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "John Doe"
tinderUser.age = 25
tinderUser.isLoggedIn = false

/*
console.log(tinderUser);
{ id: '123abc', name: 'John Doe', age: 25, isLoggedIn: false }
*/

const regularUser = {
    email : "abc@yahoo.in",
// nested objects
    fullname : {
        userfullname : {
            firstname : "Ankit",
            lastname : "Saini"
        }
    }
}

/*
console.log(regularUser);
{
  email: 'abc@yahoo.in',
  fullname: { userfullname: { firstname: 'Ankit', lastname: 'Saini' } }
}


console.log(regularUser.fullname);
{ userfullname: { firstname: 'Ankit', lastname: 'Saini' } }
*/

                // merging objects by 3 methods
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

/*
const obj3 = {obj1, obj2}
console.log(obj3);
{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
*/

const obj3 = Object.assign({}, obj1, obj2)
  //  target = {}
   // src = obj1, obj2;
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// spread operator
const obj4 = {...obj1, ...obj2}
console.log(obj4);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
