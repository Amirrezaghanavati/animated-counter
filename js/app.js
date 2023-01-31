const $ = document

const benefitsPadDiv = $.querySelector('.benefits')
const itemsCounter = $.querySelectorAll('.num')
let isStart = true;

window.addEventListener('scroll', () => {
    let benefitsOffset = benefitsPadDiv.offsetTop;
    let scrollY = window.scrollY
    if (scrollY >= benefitsOffset) {
        if (isStart) {
            itemsCounter.forEach((item) => setCounter(item))
        } 
            isStart = false
    }

})

function setCounter(element) {
    let counterInterVal = setInterval(() => {
        if (element.dataset.goal == element.textContent)
            clearInterval(counterInterVal)

        element.textContent++
    }, 10)
}