// ========= LOCAL STORAGE ======
//save-store
localStorage.setItem('name', 'Rajat')
console.log(localStorage);

// fetch data
localStorage.getItem('name')
console.log(localStorage);

//remove
localStorage.removeItem('name')
console.log(localStorage);

// update
localStorage.setItem('name', 'saini')
console.log(localStorage);


// ======= SESSION STORAGE =======

// METHOS SARE SAME HA LOCAL JAISE
sessionStorage.setItem("age", '22')
console.log(sessionStorage);



// ======= COOKIES  =======
document.cookie = 'name=Rajat saini'
// console.log(cookie);




// ============= PRACTICE ============

// function lightorDark() {
//     if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//         document.body.classList.add('dark')
//         document.body.classList.remove('light')
//     }
//     else {
//         document.body.classList.add('light')
//         document.body.classList.remove('dark')
//     }
// }

// if (localStorage.getItem('theme')) {
//     document.body.classList.add(localStorage.getItem('theme'));
// } else {
//     lightorDark();
// }


// window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', () => {
//     if (!localStorage.getItem('theme')) {
//         lightorDark();
//     }
// })

// let togbtn = document.querySelector('button')

// togbtn.addEventListener('click', (e) => {
//     if (document.body.classList.contains("dark")) {
//         document.body.classList.add('light')
//         document.body.classList.remove('dark')

//         localStorage.setItem('theme', 'light')
//     }
//     else {
//         document.body.classList.add('dark')
//         document.body.classList.remove('light')

//         localStorage.setItem('theme', 'dark')
//     }
// })



// OPTIMIZED CODE
// agr theme dark ha to light kr do
// agr theme light ha to dark kr do
// agr theme nhi ha to system wali le lo

// bhar se theme value aaygi
function lightorDark(theme) {
    document.body.classList.remove('dark', 'light');
    // jo bhe theme saved hogi
    document.body.classList.add(theme)
}

function systemtheme() {
    // console.log(``);
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
}
// jo last time store/save hui vo ha ye
const savedtheme = localStorage.getItem('theme');
lightorDark(savedtheme || systemtheme())

// system theme change hui to window wali bhe change realtime me
// if -- Agar Koi stored nhi ha to
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (!localStorage.getItem('theme')) {
        lightorDark(systemtheme())
    }
})

// toggle btn only
document.querySelector("button").addEventListener("click", () => {
    // jab bhe click ho check karo vo usme
    // 'dark' class ha ya nhi.. USING TERNARY
    //IF - Dark= True -- then Light
    //ELSE - DarK= False -- then dark
    let updatedtheme = document.body.classList.contains('dark') ? 'light' : 'dark'
    // upadted wali fn me push kr do
    lightorDark(updatedtheme)
    localStorage.setItem('theme', updatedtheme)
})