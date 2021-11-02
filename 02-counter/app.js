let count = 0
const value = document.querySelector('#value')
const buttons = document.querySelectorAll('.btn')

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('increase')) {
      count++
    } else if (btn.classList.contains('decrease')) {
      count--
    } else {
      count = 0
    }

    value.textContent = count

    if (count > 0) {
      value.style.color = 'green'
    } else if (count < 0) {
      value.style.color = 'red'
    } else {
      value.style.color = 'black'
    }
  })
})

// increaseBtn.addEventListener('click', increase)
// decreaseBtn.addEventListener('click', decrease)
// resetBtn.addEventListener('click', reset)
