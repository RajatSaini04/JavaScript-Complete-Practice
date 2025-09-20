
//====== OBJECTS ===========
// An object in JavaScript is a data structure used to
// store related data collections. It stores data as 
// key-value pairs, where each key is a unique 
// identifier for the associated value.


let obj = {
    name: "Rajat",
    age: 23
};

// Using Dot Notation
// ye obj me Exact property search karega

console.log(obj.name); 

// Using Bracket Notation
// ye dynamically access karta ha
console.log(obj["age"]);

// obj destructuring
let {name} = obj;
// console.log(name);
// document.writeln(name)


for (const key in obj) {
    console.log(key); // key names
    console.log(obj[key]); //value
}

Object.keys(obj) //sari keys name
Object.entries(obj) // array of array


// Computed properties
let role = "admin"

// deep clone
 let obj2 = {
    name: "Rajat",
    "age": 23,
    address: { //obj ke andar nested obj jab ...SPREAD se copy
        city: "hisar",  // hoga to vo reference dega
        state: "haryana" // na ki real copy
    },
    [role] : "rajat saini" //computed prop.
};
console.log(obj2);

// STRINGIFY: obj -> string
// PARSE: string -> orignal obj or whatever
let res= JSON.parse(JSON.stringify(obj))


// OPTIONAL CHAINING ?? -- ho to dena else undefined , no error
console.log(obj2?.addresss?.city);

// ======= QUESTIONS
  
// destructure "age" as var called realage
let {"age": realage} = obj2; 