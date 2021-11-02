const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']

const btn = document.querySelector('#btn')
const main = document.querySelector('main')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
  const randomValue = Math.floor(Math.random() * colors.length)
  const randomColor = colors[randomValue]
  main.style.backgroundColor = randomColor
  color.textContent = randomColor
})
