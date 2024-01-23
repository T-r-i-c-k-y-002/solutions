const BUTTON = document.getElementById('btn');
const listItems = document.getElementsByClassName('lst')
const unorder = document.querySelector('ul');

let selected;


unorder.addEventListener('click', (e) => {
    const close = e.target.closest('li');
    if(selected != undefined){
        selected.classList.remove("active");
    }
    selected = close;
    close.classList.add("active");
});

BUTTON.addEventListener("click", () => {
    if (selected) {
        const rating = selected.textContent;
        localStorage.setItem('userRating', rating);
        window.location.assign('feedback.html');
    } else {
        window.location.assign('feedback.html');
    }
});



