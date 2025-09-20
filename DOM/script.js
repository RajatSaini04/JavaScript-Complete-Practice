
// notes in copy

// select all list elements and use loop to print

let lists = document.querySelectorAll("li")   // ye nodelist dega jo array jaise hota ha, 
lists.forEach(val => {           //array pr loop foreach se chal sakte ha
    console.log(val.textContent);   // textcontent se actul value dikhegi

});

for (let i = 0; i < lists.length; i++) {
    console.log(lists[i].textContent);   // array ha to [] me store fir .textcontent
    
}


// get src of img in js

let getimg = document.querySelector("img")
console.log(getimg.src );
// or
console.log(getimg.getAttribute("src"));
