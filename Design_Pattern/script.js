
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

// 3. Factory Function Pattern -- ek fn jo similiar Object. create karte ha but diffrent products ke liye

function createProduct(name, price) {
    let stocks = 10;
    return {
        name,
        price,
        checkstock(){
            console.log(stocks);
        },
        buy(qty){
            if (qty<=stocks) {
                stocks-=qty;
                console.log(`${qty} booked - ${stocks} left`);
            }
            else{
                console.log(`${stocks} available only`);
            }
        },
        refill(qty){
            stocks+=qty;
            console.log(`${stocks} refilled`);
        }
    }
}

let samsung = createProduct("s25", 80000)
let apple = createProduct("iphone 17", 70000)

