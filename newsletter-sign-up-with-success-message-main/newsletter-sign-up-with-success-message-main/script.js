const next = document.getElementById('home');
const ERROR = document.getElementById('errormsg');

next.addEventListener('click', (e) => {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    var emailContain = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(emailContain.test(email)) {
        localStorage.setItem("emailEntered", email);
        window.location.assign("thanks.html");
    } else {
        //alert("Please enter a valid email address.");
        emailInput.style.cssText = "background-color: pink;border: 2px solid red;"
        ERROR.textContent = "enter the valid email id";
    }
});