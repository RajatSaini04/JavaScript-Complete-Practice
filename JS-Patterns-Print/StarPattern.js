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
console.log('star 7');
function star7() {
    for (let i = 1; i <= n; i++) {
        let row = ""; // build one row
        // left spaces
        for (let j = 1; j < n + 1 - i; j++) {
            row += ' ';        //spaces print, use j for debugging
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
            row += ' ';        //spaces print , use j for debugging
        } // same for right spaces but not needed

        for (let j = 1; j <= 2 * (n - i) + 1; j++) {
            row += "*";        //Star print
        }
        console.log(row); // print full row
    }
}
star8();

console.log('');
console.log('star 9');
function star9() {

    // Combination of 7 and 8
    star7()
    star8()

}
star9();

// Start 10
//  *
//  **
//  *** 
//  ****
//  *****
//  ******  
//  *****
//  ****
//  ***    
//  **
//  *
console.log('');
console.log('star 10 ');
function star10() {
    for (let i = 1; i <= 2 * n - 1; i++) { //9 rows

        let row = ""
        let stars = i
        if (i > n) {        // i > 5 i.e. 6 > 5 = True
            stars = 2 * n - i
        }
        // using ternary operator for above code
        // let stars = (i > n) ? 2 * n - i : i;

        for (let j = 1; j <= stars; j++) {
            row += "*"
        }
        console.log(row);

    }
}
star10();


// star 11
// 1
// 01
// 101
// 0101
// 10101
// 010101
console.log('');
console.log('star 11');
function star11() {
    let start = 1
    for (let i = 1; i <= n; i++) {
        let row = "";

        start = (i % 2 == 0) ? 0 : 1;

        for (let j = 1; j <= i; j++) {
            row += start
            start = 1 - start
        }

        console.log(row);
    }

}
star11();

// Star 12
// 1      1
// 12    21
// 123  321
// 12344321
console.log('');
console.log('star 12');
function star12() {
    let spaces = 2 * (n - 1)
    for (let i = 1; i <= n; i++) { //1..5
        let row = ""
        // left
        for (let j = 1; j <= i; j++) {
            row += j
        }
        // spaces
        for (let j = 1; j <= spaces; j++) {
            row += ' '
        }
        // right
        for (let j = i; j >= 1; j--) {
            row += j
        }
        console.log(row);
        spaces -= 2;

    }
}
star12();

// Star 13
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

console.log('');
console.log('star 13');
function star13() {
    let sum = 1
    for (let i = 1; i <= n; i++) { //1..5
        let row = ""
        for (let j = 1; j <= i; j++) {
            row += sum + ' '
            sum += 1
        }
        console.log(row);

    }
}
star13();

// Star 14
// A
// A B
// A B C
// A B C D
// A B C D E

console.log('');
console.log('star 14');
function star14() {
    for (let i = 0; i <= n; i++) { //1..5
        let row = ""
        for (let j = 0; j < i; j++) { // 1..5
            row += String.fromCharCode(65 + j) + ' '
        }
        console.log(row);
    }
}
star14();

// Star 15
// A B C D E
// A B C D
// A B C
// A B
// A

console.log('');
console.log('star 15');
function star15() {
    for (let i = 0; i <= n; i++) { //1..5
        let row = ""
        for (let j = 0; j < n - i; j++) { // 5..1
            row += String.fromCharCode(65 + j) + ' '
        }
        console.log(row);
    }
}
star15();

// pattern16
// A
// B B
// C C C
// D D D D
// E E E E E

console.log('');
console.log('star 16');

function star16() {
    for (let i = 0; i < n; i++) {
        let row = "";

        for (let j = 0; j <= i; j++) {
            // i=1, j=1times 65+1 , A
            // i=2, j=2times 65+2, BB
            row += String.fromCharCode(65 + i) + " ";
        }

        console.log(row);
    }
}

star16();

// star17
//     A    
//    ABA   
//   ABCBA  
//  ABCDCBA 
// ABCDEDCBA

console.log('');
console.log('star 17');

function star17() {
    for (let i = 0; i < n; i++) {
        let row = "";

        // spaces before characters
        for (let j = 0; j < n - i - 1; j++) {
            row += " ";
        }
        // char print
        let char = 'A'.charCodeAt(0)
        let breakpt = Math.floor((2 * i + 1) / 2)
        for (let j = 0; j < 2 * i + 1; j++) {
            row += String.fromCharCode(char)

            if (j < breakpt) char++
            else char--
        }

        console.log(row);
    }
}

star17();

// Star 18
// 
// E 
// D E 
// C D E 
// B C D E 
// A B C D E 
console.log('');
console.log('star 18');
function star18() {

    for (let i = 0; i < n; i++) { // 0..4
        let row = ""
        let char = 'A'.charCodeAt(0) + (n - i - 1) //65 + num = 69 start
        for (let j = 0; j <= i; j++) { // 1..5
            row += String.fromCharCode(char + j) + " " // 
        }
        console.log(row);
    }
}
star18();


// Star 19
// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********

console.log('');
console.log('star 19');

function star19() {
    for (let i = 0; i < n; i++) {
        let row = "";
        // left stars
        for (let j = 1; j <= n - i; j++) {
            row += "*";
        }
        // spaces
        for (let j = 0; j < i * 2; j++) {
            row += " ";
        }
        // right stars
        for (let j = 1; j <= n - i; j++) {
            row += "*";
        }
        console.log(row);
    }

    // lower half
    for (let i = 0; i < n; i++) {
        let row = "";
        // left stars
        for (let j = 0; j <= i; j++) {
            row += "*";
        }
        // spaces
        for (let j = 0; j < (n - i - 1) * 2; j++) {
            row += " ";
        }
        // right stars
        for (let j = 0; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
}

star19();

// // console.log('');
// // console.log('star ');
// function star19() { }
// star19();
// // console.log('');
// // console.log('star ');
// function star20() { }
// star20();
// // console.log('');
// // console.log('star ');
// function star21() { }
// star21();
// // console.log('');
// // console.log('star ');
// function star22() { }
// star22();

