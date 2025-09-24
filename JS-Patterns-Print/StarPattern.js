// // star 1
// // * 
// // * * 
// // * * *
// // * * * *
// // * * * * *
// let num = 5

// for (let i = 1; i <= num; i++) {
//     let row1 = ''

//     for (let j = 1; j <= i; j++) {
//         row1 += "* "
//     }
//     console.log(row1);

// }


// // star 2 
// // * * * * *
// // * * * *
// // * * *
// // * *
// // *
// let row2 = '';
// for (let i = 1; i <= num; i++) {

//     for (let j = 0; j <= num - i; j++) {
//         row2 += "* "
//     }
//     row2 += '\n'

// }
// console.log(row2);



// STAR 1
// ****
// ****
// ****
// ****
console.log('Star 1');
function star1() {
    for (let i = 0; i < 4; i++) {
        let row = ""; // build one row
        for (let j = 0; j < 4; j++) {
            row += "* ";
        }
        console.log(row); // print full row
    }
}
star1();

// STAR 2
// *
// **
// ***
// ****
console.log('Star 2');
function star2() {
    for (let i = 0; i < 4; i++) {
        let row = ""; // build one row
        for (let j = 0; j <= i; j++) {
            row += "* ";
        }
        console.log(row); // print full row
    }
}
star2()

// STAR 3
// 1
// 12
// 123
// 1234
console.log('Star 3');
function star3() {
    for (let i = 0; i < 4; i++) {
        let row = ""; // build one row
        for (let j = 0; j <= i; j++) {
            row += j + " ";  //cols print ho rhe ha j se
        }
        console.log(row); // print full row
    }
}
star3()

// Star 4
// 1
// 22
// 333
// 4444
console.log('Star 4');
function star4() {
    for (let i = 0; i < 4; i++) {
        let row = ""; // build one row
        for (let j = 0; j <= i; j++) {
            row += i + " ";        //Row print ho rhi ha i se
        }
        console.log(row); // print full row
    }
}
star4()

// Star 5
// ****
// ***
// **
// *
console.log('Star 5');
function star5() {
    for (let i = 0; i < 4; i++) {
        let row = ""; // build one row
        for (let j = 4; j > i; j--) {
            row += "*";        //Row print ho rhi ha i se
        }
        console.log(row); // print full row
    }
}
star5()
function star6() {
    for (let i = 1; i <= 4; i++) {
        let row = ""; // build one row
        for (let j = 0; j<4-i+1; j++) {
            row += "*";        //Row print ho rhi ha i se
        }
        console.log(row); // print full row
    }
}
star6()
