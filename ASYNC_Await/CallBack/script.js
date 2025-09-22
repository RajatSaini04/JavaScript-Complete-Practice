// callback pattern
function KuchDerBaadChalega(fnc) {
    setTimeout(fnc, Math.floor(Math.floor() * 10) * 1000)
}
// fn ke param me ek fn ko vo callback hota ha
KuchDerBaadChalega(function () {
    console.log("hey there from callback ");
})



// ======= Callback HELL =========

function bringProfile(username, cb) {
    console.log('fetching data');

    setTimeout(() => {
        console.log(`proflie fetch of ${username}`);
        cb({ username })
    }, 2000)
}
function GetPosts(id, cb) {
    console.log('fetching data of posts');

    setTimeout(() => {
        cb({ _id: id, posts: ['hey', 'hello', 'good morning'] })
    }, 3000)
}
function SavedPosts(id, cb) {
    console.log('Got Saved posts');

    setTimeout(() => {
        console.log('Saved Posts');
        cb({ _id: id, saved: ['First', 'second', 'third'] })
    }, 3000)
}

// callback me callback -not used now
bringProfile('rajat', function (profiledata) {
    console.log(profiledata);
    GetPosts(profiledata._id, function (posts) {
        console.log(posts);
        SavedPosts(profiledata._id, function (saved) {
            console.log(saved);
            // .....
        })


    })

})