let first, second, third;


let rand = Math.random()
console.log(rand);


// first WOrd
if (rand < 0.33) {
    first = "crazy"
    
}
else if (rand<0.66 && rand>=0.33){
    first = "Amazing"
    
}
else{
    first = "Fire"
}

// second WOrd

let rand2 = Math.random()
// let res = rand2
console.log(rand2);

if (rand2 < 0.33) {
    second = "Engine"
   
}
else if (rand2<0.66 && rand2>=0.33){
    second = "Foods"

}
else{

    second = "Garmets"

}

// Third WOrd

let rand3 = Math.random()
// let res2 = rand3
console.log(rand3);

if (rand3 < 0.33) {
    third = "Bros"
   
}
else if (rand3<0.66 && rand3>=0.33){
    third = "Limited"

}
else{

    third = "Hub"

}

console.log(`${ first} ${second} ${third}`);

