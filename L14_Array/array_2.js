const hero = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// hero.push(dc);
// console.log(hero);

const all = hero.concat(dc) // add 2 arr
console.log(all);

const allnew = [...hero, ...dc]; // add 2 arr
console.log("Using Spread Operator: ",allnew);

//console.log(hero);
console.log("\n Combine nested array elements \n");

const another = [1,2,3, [4,5,6], 7, [8,9, [10,11]]]

// flat : Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(another.flat(Infinity));


console.log("\n Convert into array \n");
console.log(Array.isArray("Ankit"));
console.log(Array.from("Ankit"));

console.log(Array.from({name: "ankit"})); //interesting


// another way
let n1 = 1, n2 = 2, n3 = 3;
console.log(Array.of(n1, n2, n3));