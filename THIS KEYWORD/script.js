// THis keyword understanding

// 1 in Global scope
console.log(this);

//2 function scope 

function abcd() {
    console.log(this);
}
abcd()

// 3 method -- object es5
let obj = {
    name: 'rajat',
    age: 22,
    showdetail: function () {
        console.log(this);
    }
}
obj.showdetail()

// es6 arrow -- window
let obj2 = {
    name: 'rajat',
    age: 22,
    showdetail: () => {
        console.log(this);
    }
}
obj2.showdetail()

// es5 fn - fn --window
let obj3 = {
    name: 'rajat',
    age: 22,
    showdetail: function () {
        function xy() {
            console.log(this);
        }
        xy()
    }
}
obj3.showdetail()

// es5 fn - es6 arrow -- object
let obj4 = {
    name: 'rajat',
    age: 22,
    showdetail: function () {
        let xyz = () => {

            console.log(this);
        }
        xyz()
    }
}
obj4.showdetail()

// 4 - Event handler -- element itself

document.querySelector('h2').addEventListener('click', function () {
    console.log(this.style.color = 'Red');
})

// 5 - Class

class Abc {
    constructor() {
        console.log('class in this');
        this.a = 10
    }
}

let fnc = new Abc()
console.log(fnc);


// CALL - APPLY - BIND

let NewObj = {
    name: 'rajat',
    age: 22,
}
function xyz(a, b, c) {
    console.log(this, a, b, c);
}

xyz.call(NewObj)

// apply
xyz.apply(NewObj, [1, 2, 3])

// bind

let newfnc = xyz.bind(NewObj, 1, 2, 3)
newfnc()


// ============================================================
// ================ MINI PROJECT TO UNDERSTAND =================
// ============================================================

let form = document.querySelector('form')
let username = document.querySelector('#name')
let role = document.querySelector('#role')
let bio = document.querySelector('#bio')
let photo = document.querySelector('#photo')
const container = document.querySelector(".cards-container");
const userManager = {
    users: [],
    init: function () {
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            console.log(this);
            this.addUser()
        })
    },
    addUser: function () {
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        })
        form.reset()
        this.renderUI()
    },
    renderUI: function () {
    container.innerHTML = '';

    this.users.forEach((user, index) => {
        // Create main card wrapper
        const card = document.createElement("div");
        card.classList.add("user-card");

        // Create image
        const img = document.createElement("img");
        img.src = user.photo;
        img.alt = user.username;

        // Create name
        const name = document.createElement("h3");
        name.textContent = user.username;

        // Create role
        const role = document.createElement("p");
        role.classList.add("role");
        role.textContent = user.role;

        // Create bio
        const bio = document.createElement("p");
        bio.classList.add("bio");
        bio.textContent = user.bio;

        // Append children to card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(role);
        card.appendChild(bio);

        // ✅ Add click event to remove this user
        card.addEventListener("click", () => {
            this.removeUser(index);
        });

        container.appendChild(card);
    });
},

removeUser: function (index) {
    // remove the user at index
    this.users.splice(index, 1);
    // re-render UI
    this.renderUI();
}

};

userManager.init()