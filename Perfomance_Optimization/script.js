// 1. Debouncing -- action ka reaction hoga, jo time set kiya ha vo occur ho
let input = document.querySelector('input')
let input2 = document.querySelector('.throttle')

function Debounce(fnc, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fnc(...args)
        }, delay);
    }
}

input.addEventListener("input", Debounce(function () {
    console.log('Debounce');
}, 1000))

// throttle -- runs in interval which is set until action stops
function throttle(fnc, delay) {
    let timer = 0;
    return function (...args) {
        let now = Date.now()
        if (now - timer >= delay) {
            timer = now
            fnc(...args)
        }
    }
}

input2.addEventListener("input", throttle(function () {
    console.log('throttling..');
}, 2000))


//2. Lazy Loading Images
//3. Code Splitting with dynamic imports --jo code jab use hoga use tabhi load kare
//4. Avoid unnescessary reflows and repaints

// 5. Avoid Menrory leaks:  timer and event listner 

let count = 0
const setcount = setInterval(() => {
    if (count < 10) {
        count++
        console.log(count);
    }
    else {
        console.log('Still Running');
        clearInterval(setcount)
        console.log('finished Interval: Stopped Memory Leaks');
    }
}, 500); 
