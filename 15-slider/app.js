const slides = document.querySelectorAll('.slide')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')
let count = 0

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`
})

const slider = () => {
  if (count === slides.length) {
    count = 0
  } else if (count < 0) {
    count = slides.length - 1
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${count * 100}%)`
  })
}

nextBtn.addEventListener('click', () => {
  count++
  slider()
})

prevBtn.addEventListener('click', () => {
  count--
  slider()
})
