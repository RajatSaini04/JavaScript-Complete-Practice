
let ptag = document.querySelector('p')
ptag.addEventListener('click', () => {
    ptag.style.color = 'Green'
})
//  or
ptag.addEventListener('dblclick', function () {
    ptag.style.color = 'RED'
})


//  Input se value leke usko console par actual input val show karo
let inp = document.querySelector("input")
inp.addEventListener('input', (val) => {
    if (val.data !== null) {
        console.log(val.data);
    }
})

// task 3

let sel = document.querySelector('select')
let device_title = document.querySelector('#device')

sel.addEventListener("change", (details) => {
    console.log(details.target.value);
    let selected_device = details.target.value

    // device ka name dynamically aayega
    device_title.textContent = `${selected_device} Device selected`

})

// task 4 
let h1 = document.querySelector(".task4")

window.addEventListener('keydown', (e) => {
    if (e.key === " ") {
        h1.textContent = ` Task 4 - keydown here:  space`
    }
    else {
        h1.textContent = ` Task 4 - keydown here:  ${e.key}`;
    }
})

// task 5
let btn = document.querySelector('#btn')
let fileinp = document.querySelector('#fileinp')

btn.addEventListener("click", (e) => {
    fileinp.click();
});

fileinp.addEventListener("change", (e) => {
    console.dir(e);  // find kiya file name kha ha
    let filename = e.target.files[0].name; //file name yha tha
    if (file) {    // agar file ha to ye karo
        btn.textContent = filename;
    }

})


// task 6 -  form submit 
// form ko submit hone se rokna ha

let form = document.querySelector('form')
let task6 = document.querySelector('.task6')
let inputs = document.querySelectorAll(".form-input")

form.addEventListener('submit', (e) => {
    e.preventDefault();  //refresh ko rok diya

    let card = document.createElement("div")
    card.classList.add("card")

    let profile = document.createElement("div")
    profile.classList.add('profile')

    let img = document.createElement("img")
    img.setAttribute("src", inputs[0].value)
    let h3 = document.createElement("h3")
    h3.textContent = inputs[1].value
    let ptag = document.createElement("p")
    ptag.textContent = inputs[2].value

    profile.appendChild(img)
    card.appendChild(profile)

    card.appendChild(h3)
    card.appendChild(ptag)

    task6.appendChild(card)

    inputs.forEach((val) => {
        val.value = "";
    })
})

// task 6 movuse move

// ye basic wala ha -- sheriyans ka======
// let move = document.querySelector('#mousemove')

// window.addEventListener("mousemove", (e) => { 
//     move.style.top = (e.pageY - 15) + "px"
//     move.style.left = (e.pageX - 15) + "px"
//  })

let move = document.querySelector('#mousemove');

let mouseX = 0, mouseY = 0;

// Track mouse move
window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;  // relative to viewport
    mouseY = e.clientY;
    updateGlow();
});

// Track scroll as well
window.addEventListener("scroll", () => {
    updateGlow();
});

function updateGlow() {
    move.style.top = (window.scrollY + mouseY - 15) + "px";
    move.style.left = (window.scrollX + mouseX - 15) + "px";
}


// task 7 

let outerbox = document.querySelector(".outer")
let innerbox = document.querySelector(".inner")

outerbox.addEventListener('mouseenter', () => {
    outerbox.style.backgroundColor = 'black'
    console.log('mouseENTER wala blue');

})
outerbox.addEventListener('mouseover', () => {
    outerbox.style.backgroundColor = 'green'
    console.log('mouseENTER wala blue');

})

// innerbox.addEventListener('mouseover', () => {
//     outerbox.style.backgroundColor = 'blue'
//     console.log('mouseover wala blue');

// })
// innerbox.addEventListener('mouseout', () => {
//     innerbox.style.backgroundColor = 'Yellow'
// })

// outerbox.addEventListener('mouseover', () => {
//     outerbox.style.backgroundColor = 'Blue'
// })
// outerbox.addEventListener('mouseout', () => {
//     outerbox.style.backgroundColor = 'Red'
// })

