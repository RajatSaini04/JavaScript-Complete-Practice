// High Order functions
// fn ke ander fn return ho to HOF


// Closure
function outer() {
  let x = 10; // defined in outer

  function inner() {
    console.log(x); // inner can use outer's variable
  }

  return inner();
}

let fn = outer(); // fn is inner
fn(); // prints 10