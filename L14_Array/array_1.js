const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr);
 
// shallow copy of an object is a copy whose properties shares the same references

// deep copy of an object is a copy whose properties  do not share the same references

 const myArr2 = new Array(1, 2, 3, 4);
 console.log(myArr2);

                        // array methods

 myArr.push(6);
 console.log(myArr);

 myArr2.pop();
 console.log(myArr2);

 myArr2.unshift(9);
 console.log(myArr2);
 
 myArr2.shift();
 console.log(myArr2);

 console.log(myArr.includes(5));
 console.log(myArr.indexOf(3));

// Adds all the elements of an array into a string, separated by the specified separator string.

const newArr = myArr.join();
console.log(newArr); 
console.log(typeof newArr); 

console.log("\n Diff between Slice and Splice \n");
console.log("A", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("A", myArr);



console.log("B", myArr);
const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("B", myArr);