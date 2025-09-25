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
// // 
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


let n = 5

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
            row += j + " ";  //cols print ho rhe ha j se jo ke
        }                    // 1 se i ki value tk chal rhe ha 
        //that prints counting like 1234 etc...
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
        }   // i ki val static ha no of time j run ho rha ha, jabhi ye 1 ,22 , 333 ho rhe ha print
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
// logic made by me
// function star5() {
//     for (let i = 0; i < 4; i++) {
//         let row = ""; // build one row
//         for (let j = 4; j > i; j--) {
//             row += "*";        //Row print ho rhi ha i se
//         }
//         console.log(row); // print full row
//     }
// }
// star5()

// start5 by striver -- 
function star5() {
    for (let i = 1; i <= 4; i++) {
        let row = ""; // build one row
        for (let j = 0; j < 4 - i + 1; j++) {
            row += "*"; // har i pr n+1 me - i , run hoga
        }
        console.log(row); // print full row
    }
}
star5()


// Star 6
// 12345
// 1234
// 123
// 12
// 1
console.log('star 6');
function star6() {
    for (let i = 1; i <= n; i++) {
        let row = ""; // build one row
        for (let j = 1; j <= n + 1 - i; j++) {
            row += j + " ";        //Row print ho rhi ha i se
        }
        console.log(row); // print full row
    }
}
star6()

// Star 7

//      *     
//     ***    
//    *****   
//   *******  
//  ********* 
// ***********
console.log('star 7');
function star7() {
    for (let i = 1; i <= n; i++) {
        let row = ""; // build one row
        // left spaces
        for (let j = 1; j < n + 1 - i; j++) {
            row += j;        //spaces print
        } // same for right spaces but not needed

        for (let j = 1; j <= 2 * i - 1; j++) {
            row += "*";        //Star print
        }
        console.log(row); // print full row
    }
}
star7()

// star 8
//  *********
//   *******
//    ***** 
//     ***    
//      *
console.log('');
console.log("star 8");
function star8() {
    for (let i = 1; i <= n; i++) {

        let row = ""; // build one row
        // left spaces
        for (let j = 1; j < i; j++) {
            row += j;        //spaces print
        } // same for right spaces but not needed

        for (let j = 1; j <= 2 * (n - i) + 1; j++) {
            row += "*";        //Star print
        }
        console.log(row); // print full row
    }
}
star8();

// console.log('');
// console.log('star ');
function star9() { }
star9();
// console.log('');
// console.log('star ');
function star10() { }
star10();
// console.log('');
// console.log('star ');
function star11() { }
star11();
// console.log('');
// console.log('star ');
function star12() { }
star12();
// console.log('');
// console.log('star ');
function star13() { }
star13();
// console.log('');
// console.log('star ');
function star14() { }
star14();
// console.log('');
// console.log('star ');
function star15() { }
star15();
// console.log('');
// console.log('star ');
function star16() { }
star16();
// console.log('');
// console.log('star ');
function star17() { }
star17();
// console.log('');
// console.log('star ');
function star18() { }
star18();
// console.log('');
// console.log('star ');
function star19() { }
star19();
// console.log('');
// console.log('star ');
function star20() { }
star20();
// console.log('');
// console.log('star ');
function star21() { }
star21();
// console.log('');
// console.log('star ');
function star22() { }
star22();

