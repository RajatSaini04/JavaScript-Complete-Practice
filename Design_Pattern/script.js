
// 1. MODULE PATTERN -- IIFE

// can be chnaged and accessable Globally
// let Balance = 5000;

// Fn Expression
let Bank = (function () {
    // Can Not be accessed Directly bcoz of it become a Private Var.
    let Balance = 10000;

    function CheckBalance() {
        console.log(Balance);
    }
    function SetBalance(val) {
        Balance = val
        console.log('Current Balance: ', Balance);
    }

    function Withdraw(val) {
        if (val <= Balance) {
            Balance -= val
            console.log('balance after withdraw: ', Balance);
        }
        else console.log("Insufficient Balance");
    }

    return {
        CheckBalance,
        Withdraw,
        SetBalance
    }
})()

// Call as Object bcoz return ek OBJ ha
Bank.CheckBalance()


// 2. Reveling Module Pattern

// Same as Mdoule pattern bss isme return me obj ko custom  name de sakte ha

// like 

// return {
//     ChkBal : CheckBalance,
//     Draw: Withdraw,
//     SetBal: SetBalance
// }