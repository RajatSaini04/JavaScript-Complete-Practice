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

function pattern12(N) {
    // initial number of spaces in row 1
    let spaces = 2 * (N - 1);

    // Outer loop for rows
    for (let i = 1; i <= N; i++) {
        let row = "";

        // print ascending numbers 1..i
        for (let j = 1; j <= i; j++) {
            row += j;
        }

        // print spaces
        for (let j = 1; j <= spaces; j++) {
            row += " ";
        }

        // print descending numbers i..1
        for (let j = i; j >= 1; j--) {
            row += j;
        }

        console.log(row);

        // reduce spaces by 2 for next row
        spaces -= 2;
    }
}

// Run for N = 5
pattern12(5);


function pattern13(N) {
    let num = 1; // starting number

    // Outer loop for rows
    for (let i = 1; i <= N; i++) {
        let row = "";

        // Inner loop to print i numbers
        for (let j = 1; j <= i; j++) {
            row += num + " ";
            num++;
        }

        console.log(row.trim()); // print row and trim trailing space
    }
}

// Run for N = 5
pattern13(5);




function pattern14(N) {
    // Outer loop for rows
    for (let i = 0; i < N; i++) {
        let row = "";

        // Inner loop to print letters from 'A' to 'A' + i
        for (let j = 0; j <= i; j++) {
            // String.fromCharCode converts ASCII code to character
            row += String.fromCharCode(65 + j) + " "; // 65 is ASCII of 'A'
        }

        console.log(row.trim()); // print row
    }
}

// Run for N = 5
pattern14(5);

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

