const firstName = document.getElementById('firstname');
const FNERR = document.getElementById('Fname')
const form = document.forms[0];
const lastName = document.getElementById('lastname');
const LNERR = document.getElementById('Lname')
const email = document.getElementById('email');
const ENERR = document.getElementById('Ename')
const pass = document.getElementById('password');
const PNERR = document.getElementById('Pname')

const buttonEl = document.getElementById('BUTTON');



const pattern = /^[a-b]@./;

form.addEventListener('submit', (e) => {

    e.preventDefault();

    if(firstName == ''){
        firstName.style.cssText =  `border: 1px solid red`
        FNERR.innerText = "FirstName Field Should not be empty"
    }else{
        console.log(firstName);
    }


    if(lastName == ''){
        lastName.style.cssText =  `border: 1px solid red`
        LNERR.innerText = "LastName Field Should not be empty"
    }else{
        console.log(lastName);
    }

    if(email == ''){
        email.style.cssText =  `border: 1px solid red`
        if(!pattern.test(email)){
            ENERR.innerText = "Enter the valid email";
        }
    }else {
        console.log(email);
    }

    if(pass == ''){
        PNERR.innerText = "password Field Should not be empty"
        pass.style.cssText =  `border: 1px solid red`
    }else{
        console.log(firstName);
    }


})