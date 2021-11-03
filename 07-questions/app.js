// *** using selectors inside the element ***
const questions = document.querySelectorAll('.question')

questions.forEach((question) => {
  const btn = question.querySelector('.question-btn')

  btn.addEventListener('click', () => {
    questions.forEach((element) => {
      if (element !== question) {
        element.classList.remove('show-text')
      }
    })

    question.classList.toggle('show-text')
  })
})

// *** traversing the dom ***
// const questionButtons = document.querySelectorAll('.question-btn')

// questionButtons.forEach((button) => {
//   button.addEventListener('click', (el) => {
//     const target = el.target
//     target.closest('.question').classList.toggle('show-text')
//   })
// })
