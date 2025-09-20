let email = document.querySelector('#email')
let password = document.querySelector('#password')
let form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    document.querySelector('#emailError').textContent = ''
    document.querySelector('#passwordError').textContent = ''  //empty rhe start me

    const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans = emailregex.test(email.value)
    let passans = passregex.test(password.value)

    let isValid = true;

    if (!emailans) {
        document.querySelector('#emailError').style.display = "initial"
        document.querySelector('#emailError').textContent = 'incorrect email'
        isValid = false;
    }
    if (!passans) {
        document.querySelector('#passwordError').style.display = "initial"
        document.querySelector('#passwordError').textContent = 'incorrect password'
        isValid = false;
    }

    if (isValid) {
        document.querySelector('.resultmsg').textContent = " all good"

    }

})