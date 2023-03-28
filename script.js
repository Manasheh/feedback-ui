

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
        container.innerHTML = `Thank You !
        <br/>
        <br/>
        FeedBack: ${selectedRating}
        <br/>
        <br/>
        We'll use your feedback to improve our UI
        `
    }

})

function removeActive() {
    ratingEls.forEach((rating) => {
        rating.classList.remove('active')
    })
}