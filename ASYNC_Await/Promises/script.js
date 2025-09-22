let pr = new Promise(function (res, rej) {
    setTimeout(() => {
        let rn = Math.floor(Math.random() * 10)
        if (rn > 5) res('Resloved ' + rn)
        else rej('Rejected ' + rn)
    }, 1000)
})

// pr.then(function (val) {
//     console.log(val);
// }).catch(function (val) {
//     console.log(val);
// })


// ASYNC - AWAIT ka use karke .then/.catch ko handle

async function RunPR() {
    try {
        let val = await pr;
        console.log(val);
    } catch (err) {
        console.log(err);
    }
}
RunPR()