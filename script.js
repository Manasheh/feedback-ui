

const ratingEls = document.querySelectorAll('.rating')
let selectedRating = '';
const btn = document.querySelector('.btn')
const container = document.querySelector('.container')

ratingEls.forEach((rating) => {
    rating.addEventListener('click', (e) => {
        removeActive()
        e.target.parentNode.classList.add('active') || e.target.classList.add('active')
        selectedRating = e.target.innerText || e.target.parentNode.innerText;

    })

})

btn.addEventListener('click', () => {
    if (selectedRating !== '') {
        container.innerHTML = `<strong class='thank'>Thank You !</strong>
        <br/>
        <br/>
        <strong class='select'>FeedBack: ${selectedRating} </strong>
        <br/>
        <br/>
        <p class='improve'>We'll use your feedback to improve our UI </p>
        `
    }

})

function removeActive() {
    ratingEls.forEach((rating) => {
        rating.classList.remove('active')
    })
}