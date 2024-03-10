const QuoteContainer = document.querySelector('.quotegen');
const Quotebtn = document.querySelector('#dice');
const adviceNum = document.getElementById('AdvNo')

const API = '	https://api.adviceslip.com/advice';

Quotebtn.addEventListener('click', () => {
    setTimeout(() => {
        getQuote();
    },0)
})


function getQuote() {
    fetch(API)
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        QuoteContainer.textContent = data.advice;
        adviceNum.textContent = data.id;
    })
}


// styling
QuoteContainer.style.cssText = 'padding: 45px'
Quotebtn.style.cssText = 'transition: all 1s;'

