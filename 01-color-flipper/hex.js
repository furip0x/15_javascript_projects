const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.querySelector('#btn')
const main = document.querySelector('main')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
  const selectedColor = createRandomColor(hex)
  color.textContent = `#${selectedColor}`
  main.style.backgroundColor = `#${selectedColor}`
})

const createRandomColor = (arr) => {
  const shuffled = hex.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, 6).join('')
}
