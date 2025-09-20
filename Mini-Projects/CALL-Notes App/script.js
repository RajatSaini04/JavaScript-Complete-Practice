// new card create karne hai, data local storrage me save karna hai
// localstorage se card ko show karn hai
// button ko handle karna hai
// filter ko handle karna ha



// ALL VAR AND CONSTS
let addNote = document.getElementById("addNote")
let closeForm = document.getElementById("closeForm")
let noteForm = document.getElementById('noteForm')

// Select the form
const form = document.querySelector("form");

// Grab each input
const imageInput = document.querySelector("#image");
const fullnameInput = document.querySelector("#fullname");
const hometownInput = document.querySelector("#hometown");
const purposeInput = document.querySelector("#purpose");

const submitbtn = document.querySelector('.submitbtn');

// up, down, stack
const stack = document.querySelector('.card-stack');
const upbtn = document.getElementById('upbtn');
const downbtn = document.getElementById('downbtn');


// CODE START HERE

function saveToLocal(obj) {
    if (localStorage.getItem('tasks') === null) {
        let oldtask = []
        oldtask.push(obj)
        // save
        localStorage.setItem('tasks', JSON.stringify(oldtask))
    }

    else {
        let oldtask = localStorage.getItem('tasks');
        oldtask = JSON.parse(oldtask)
        oldtask.push(obj)
        localStorage.setItem('tasks', JSON.stringify(oldtask))
    }
}

// NEW FORM POPUP
// OPEN
addNote.addEventListener('click', () => {
    noteForm.style.display = 'flex'
})
//  CLOSE
closeForm.addEventListener('click', () => {
    noteForm.style.display = 'none'
})

// FORM VALIDATION AND SUBMIT

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let imgurl = imageInput.value.trim()
    let fullname = fullnameInput.value.trim()
    let hometown = hometownInput.value.trim()
    let purpose = purposeInput.value.trim()

    if (imgurl === "" || fullname === "" || hometown === "" || purpose === "") {
        alert("some required fields are pending")
        return;
    }

    // radio ki value submit pr check taki vo null na ho phele se
    const categoryRadio = document.querySelector("input[name='category']:checked");
    if (!categoryRadio) {
        alert("Please select any one Category")
        return;
    }

    // local ke obj me jo bhejna ha save ke liye 
    saveToLocal({
        imgurl,
        fullname,
        hometown,
        purpose,
        category: categoryRadio.value
    });

    // my thinking
    // form.querySelectorAll('input').forEach(val => val.value = "")
    // better alternate - default value restore kar deta ha
    form.reset();
    noteForm.style.display = "none"
    showCards();
})


// create dynamic card
function showCards() {
    stack.innerHTML = '';
    let alltask = JSON.parse(localStorage.getItem('tasks'))

    alltask.forEach(task => {
        // card wrapper
        const card = document.createElement("div");
        card.classList.add("card");

        // profile section
        const profile = document.createElement("div");
        profile.classList.add("profile");

        const img = document.createElement("img");
        img.src = task.imgurl || "https://via.placeholder.com/45";
        img.alt = "profile";

        const name = document.createElement("h3");
        name.textContent = task.fullname || "Unknown";

        profile.appendChild(img);
        profile.appendChild(name);

        // info: hometown
        const info1 = document.createElement("div");
        info1.classList.add("info");

        const homeLabel = document.createElement("span");
        homeLabel.textContent = "Home town";
        const homeValue = document.createElement("span");
        homeValue.textContent = task.hometown || "-";

        info1.appendChild(homeLabel);
        info1.appendChild(homeValue);

        // info: bookings
        const info2 = document.createElement("div");
        info2.classList.add("info");

        const bookLabel = document.createElement("span");
        bookLabel.textContent = "Purpose";
        const bookValue = document.createElement("span");
        bookValue.textContent = task.purpose || "Nothing";

        info2.appendChild(bookLabel);
        info2.appendChild(bookValue);

        // actions
        const actions = document.createElement("div");
        actions.classList.add("actions");

        const callBtn = document.createElement("button");
        callBtn.classList.add("call-btn");
        callBtn.textContent = "📞 Call";

        const msgBtn = document.createElement("button");
        msgBtn.classList.add("msg-btn");
        msgBtn.textContent = "Message";

        actions.appendChild(callBtn);
        actions.appendChild(msgBtn);

        // assemble card
        card.appendChild(profile);
        card.appendChild(info1);
        card.appendChild(info2);
        card.appendChild(actions);

        // return card;
        document.querySelector('.card-stack').appendChild(card)
    });
}

showCards()

// btns

function updateCard() {
    const cards = document.querySelectorAll(".card-stack .card");

    for (let i = 0; i < 3; i++) {
        cards.style.zIndex = 3 - index;
        cards.style.transform = `translateY(${index * 20}px) scale(${1 - index * 0.02})`;
        cards.style.opacity = `${1 - index * 0.1}`;
    }
}

upbtn.addEventListener('click', () => {
    const lastchild = stack.lastElementChild
    if (lastchild) {
        stack.insertBefore(lastchild, stack.firstElementChild)
    }
    // update
    updateCard();
})
downbtn.addEventListener('click', () => {
    const firstchild = stack.firstElementChild;
    if (firstchild) {
        stack.appendChild(firstchild)
    }
    // update
    updateCard();
})