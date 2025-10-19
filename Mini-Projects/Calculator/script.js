document.addEventListener("DOMContentLoaded", () => {
    const result = document.getElementById("result");
  
    function updateButtonStyles() {
        const backbtn = document.getElementsByClassName("backbtn")[0];
  
        if (backbtn) {
            if (result.value.length === 0) {
                backbtn.classList.add("darkbackbtn");
                backbtn.classList.remove("lightbackbtn");
            } else {
                backbtn.classList.add("lightbackbtn");
                backbtn.classList.remove("darkbackbtn");
            }
        } else {
            console.error("Element with class 'backbtn' not found");
        }
    }
  
    const buttons = document.querySelectorAll(".button");
  
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (e) => {
            // Identify the target element and its parent
            let target = e.target;
            if (target.tagName === 'SPAN' || target.tagName === 'svg' || target.tagName === 'path' || target.tagName === 'i') {
                target = target.closest('.button'); // Adjust to the closest button if clicked on SVG or SPAN
            }
  
            let data = target.getAttribute('data');
            console.log(data);
  
            // Animate the entire button for background color change
            target.classList.add("btnanimate");
  
            // Animate the innerText (span) for scale effect
            let span = target.querySelector('span');
            if (span) {
                span.classList.add("textanimate");
  
                setTimeout(() => {
                    span.classList.remove("textanimate");
                }, 300); // Adjust the duration as needed
            }
  
            // Remove the background color animation class after the animation ends
            setTimeout(() => {
                target.classList.remove("btnanimate");
            }, 300); // This should match the duration of the animation (adjust as needed)
  
            // Switch statement to handle the calculator operations
            switch (data) {
                case "C":
                    result.value = "";
                    break;
  
                case "=":
                    try {
                        if (result.value.length === 0) {
                            result.value = "";
                        } else if (/[+\-*/]$/.test(result.value)) {
                            alert("Invalid format! Please complete the expression before evaluating.");
                        } else {
                            result.value = eval(result.value);
                        }
                    } catch {
                        alert('Invalid format used!');  
                        result.value = "";
                    }
                    break;
  
                case "back":
                    const backbtn = document.getElementsByClassName("backbtn")[0];
                    if (result.value.length === 0) {
                        backbtn.classList.add("darkbackbtn");
                        backbtn.classList.remove("lightbackbtn");
                    } else {
                        backbtn.classList.add("lightbackbtn");
                        backbtn.classList.remove("darkbackbtn");
                    }
                    result.value = result.value.slice(0, -1);
                    break;
  
                case "0":
                    if (result.value.length === 0 || /[+\-*/]$/.test(result.value) || result.value.includes(".")) {
                        result.value += "0";
                    } else if (result.value === "0") {
                        break;
                    } else {
                        result.value += "0";
                    }
                    break;
  
                case "+/-":
                    if (result.value.length == 0) {
                        result.value = "-";
                    } else if (result.value === "-") {
                        result.value = "";
                    } else if (result.value.length > 0 && /[+\-*/]$/.test(result.value.slice(-1))) {
                        result.value += "(-";
                    } else {
                        result.value = -result.value;
                    }
                    break;
  
                case "%":
                    if (result.value.length === 0) {
                        result.value = "";
                    } else {
                        result.value /= 100;
                    }
                    break;
  
                case "()":
                    handleParentheses();
                    break;
  
                case ".":
                    if (result.value.length === 0) {
                        result.value += "0.";
                    } else {
                        let parts = result.value.split(/[+\-*/]/);
                        let lastPart = parts[parts.length - 1];
                        if (!lastPart.includes(".")) {
                            result.value += ".";
                        }
                    }
                    break;
  
                default:
                    if (result.value.endsWith('(')) {
                        if (!/^[+\-0-9]$/.test(data)) {
                            break; // Ignore any other inputs
                        }
                    }
  
                    if (/[+\-*/]/.test(data)) {
                        if (result.value.length === 0 || /[+\-*/]$/.test(result.value)) {
                            break;
                        }
                    }
                    
                    if (result.value.endsWith(')') && /^[0-9]$/.test(data)) {
                        result.value += "*";
                    }
                    result.value += data;
            }
  
            // Update the button styles after each click
            updateButtonStyles();
        });
    }
  
    function handleParentheses() {
        let string = result.value || "";
        let openParentheses = (string.match(/\(/g) || []).length;
        let closeParentheses = (string.match(/\)/g) || []).length;
  
        if (openParentheses > closeParentheses) {
            string += ")";
        } else {
            if (result.value.length > 0 && /^[0-9)]$/.test(string.slice(-1))) {
                string += "*";
            }
            string += "(";
  
        }
        result.value = string;
    }
  
    // Initial call to set the correct styles on page load
    updateButtonStyles();
  });
  