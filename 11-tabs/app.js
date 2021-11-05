// *** MY SOLUTION ***
const tabButtons = document.querySelectorAll('.tab-btn')
const contents = document.querySelectorAll('.content')

tabButtons.forEach((btn) => {
  btn.addEventListener('click', (el) => {
    const currentBtn = el.currentTarget
    const currentBtnID = currentBtn.dataset.id
    const targetContent = document.querySelector(`.content#${currentBtnID}`)

    tabButtons.forEach((element) => {
      element.classList.remove('active')
    })
    contents.forEach((content) => {
      content.classList.remove('active')
    })

    currentBtn.classList.add('active')
    targetContent.classList.add('active')
  })
})

// *** ORIGINAL SOLUTION(Keeping this as a reference for future works) ***
// const about = document.querySelector('.about')
// const btns = document.querySelectorAll('.tab-btn')
// const articles = document.querySelectorAll('.content')
// about.addEventListener('click', function (e) {
//   const id = e.target.dataset.id
//   if (id) {
//     // remove selected from other buttons
//     btns.forEach(function (btn) {
//       btn.classList.remove('active')
//     })
//     e.target.classList.add('active')
//     // hide other articles
//     articles.forEach(function (article) {
//       article.classList.remove('active')
//     })
//     const element = document.getElementById(id)
//     element.classList.add('active')
//   }
// })
