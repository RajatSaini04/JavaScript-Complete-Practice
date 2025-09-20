
// SETITMEOUT - ek bar chalega
let st = setTimeout(() => {
    console.log('hello, set timeout 2s ka');
}, 2000)

// ye settimeout rokega
clearTimeout(st)

// setInterval - same as set timeout - bss bar bar chalega
let si = setInterval(() => {
    console.log('hello, set Interval 2s ka');
}, 2000)

//ye bhe rokega setinterval
clearInterval(si)


//task - 10 tak counter

let count = 10

let setInt = setInterval(() => {
    if (count >= 0) {
        //phele  print taki 10 print ho
        console.log(count);
        //fir less ho
        count--;
    }
    else {
        clearInterval(setInt)
    }
}, 500)



//progess bar task - downloader

let p_bar = document.querySelector('.progress-bar')
let runbar = 0;
let p_text = document.querySelector('.progress-text')
let progressint =  setInterval(() => {

    // let runbar = 3000/100 + 'px'
    if (runbar <= 99) {
        runbar++
        p_bar.style.width = `${runbar}%`
        p_text.textContent = `${runbar}% Downloading`
        // console.log(runbar);
    }
    else {
        p_text.textContent = `${runbar}% Downloaded`
        clearInterval(progressint)
    }
}, 3000 / 100) // kitne time me pura karana ha 3s = 3000 / 100


setTimeout(() => {
    p_text.style.display = 'none'
}, 4000);