
// arrays method

// push -- add at end
let arr = [10, 5, 77, 88, 99]

arr.push(500)
console.log(arr);

// pop -- remove at end
console.log(arr.pop());
console.log('after pop:', arr);

// shift -- remove from start
console.log('shift:', arr.shift());
console.log('after pop:', arr);

// unshift -- add at start
console.log('shift:', arr.unshift(555));
console.log('after :', arr);

// Splice -- remove from btw(2 = konse index se, 1 = kitne value remove karni ha)
console.log('Splice:', arr.splice(2, 1));
console.log('Splice:', arr.splice(2, 0, "RED", "BLUE"));
console.log('after :', arr);



// Slice -- trim a part of array as a new copy
// (0= start, 3= end-1, end hamesh value se ek kam hoga)
console.log('Slice:', arr.slice(0, 3));
let newarr = arr.slice(0, 3);
console.log('newarr slice :', newarr);

// ======

// reverse
console.log('newarr slice :', arr.reverse());

// Sort
console.log('SORT :', arr.sort(function (a, b) {
    return b - a  // descending
})
);

console.log('result arr: ', arr);

// ----------------------------------------------------
// FOREACH, MAP, FILTER, REDUCE
// these accept a function,fn me ek value accept hoti ha
console.log('\n');

let ar = [10,20,30,40,50]
// ForEach -iterate with callback fn, NO RETURN
console.log('ForEach');
ar.forEach(val=> console.log(val + 5))
// or
console.log('foreach another version');
ar.forEach(function (value) {
    console.log(value + 10);    
})

// MAP -- Iterate with callback in new array on prv basis array
let newar = arr.map((val) => { return 10 })
// let newar = arr.map(function(value){return 15})
console.log('MAP',newar);


// Filter -- same as map but it return true-false instead value
// which gets stored in new array
let filterarr= ar.filter(function (val) {
    if (val > 20) return true
})
console.log('FILTER',filterarr);

// REDUCE -- EK ARR SE EK SINGLE VALUE BANANA
// sari value last me accumulator me ajyege
let reducearr = ar.reduce(function(accumulator, val){
    return accumulator + val
},0); // 0 = accumulator ki value at start
console.log('REDUCE', reducearr);


// FIND -- gives 1st instance jha pr bhe mile
let findarr = ar.find(function(val){
    return val === 50 
}) || "not found";
console.log('FIND', findarr);

// SOME -- arr me koi EK value conditon satisfy kr rhi ha ya nhi
let somearr = ar.some(function (val) {
   return val >10
})
console.log('SOME',somearr);

// EVERY -- arr me SABHI value conditon satisfy kr rhe ha ya nhi

let everyarr = ar.every(function (val) {
   return val > 9
})
console.log('SOME',everyarr);


// ======== DESTRUCTURING ====
// Array destructuring in JavaScript is a feature 
// that allows unpacking values from arrays into distinct variables. 
// This syntax provides a concise way to extract data from arrays
//  and assign it to new variables.
let [a, b] = ar;


// ====== SPREAD =======
// expands arr or object into individual elements
let spreadarr = [...ar];
console.log('SPREAD', spreadarr);



// QUESTIONS ===========================

// Q1 use .map to square each number
let quesarr = [10,20,30,40,50]
let newar2 = quesarr.map(val=> val * val
);
console.log("map ques:",newar2)

// Q2 use filter to keep no. greater than 10
let filarr = quesarr.filter((val) => { 
    return val > 30
 })
console.log('filter ques..', filarr);

// q3 use reduce to find the som of this array

let redarr = quesarr.reduce((acc, val) => {
    return acc + val;
}, 0);
console.log('reduce ques..', redarr);
