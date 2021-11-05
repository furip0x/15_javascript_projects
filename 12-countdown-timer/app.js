const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

window.addEventListener('DOMContentLoaded', (event) => {
  const giveaway = document.querySelector('.giveaway')
  const deadline = document.querySelector('.deadline')
  const deadlineItems = document.querySelectorAll('.deadline-format h4')

  const futureDate = new Date(2030, 5, 19, 12, 0, 0)

  giveaway.textContent = `giveaway ends on ${
    weekdays[futureDate.getDay()]
  }, ${futureDate.getDate()} ${
    months[futureDate.getMonth()]
  } ${futureDate.getFullYear()},${futureDate.getHours()}:${futureDate.getMinutes()}${futureDate.getSeconds()}pm`

  const getTime = () => {
    const currentTime = new Date()
    const time = new Date(futureDate.getTime() - currentTime.getTime())
    const timeDifferenceDays = Math.round(
      (futureDate.getTime() - currentTime.getTime()) / (1000 * 60 * 60 * 24)
    )
    const daysDifference = timeDifferenceDays
    const hoursDifference = time.getHours()
    const minsDifference = time.getMinutes()
    const secondsDifference = time.getSeconds()

    deadlineItems.forEach((item) => {
      if (item.classList.contains('days')) {
        item.textContent = daysDifference
      }
      if (item.classList.contains('hours')) {
        item.textContent = hoursDifference
      }
      if (item.classList.contains('minutes')) {
        item.textContent = minsDifference
      }
      if (item.classList.contains('seconds')) {
        item.textContent = secondsDifference
      }
    })
  }

  setInterval(() => {
    getTime()
  }, 1000)
})
