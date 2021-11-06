const userImg = document.querySelector('.user-img')
const userTitle = document.querySelector('.user-title')
const userValue = document.querySelector('.user-value')
const buttons = document.querySelectorAll('button.icon')
const getRandomUserBtn = document.querySelector('.btn')
const url = 'https://randomuser.me/api/'

const fetchUser = async () => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    const user = data.results[0]

    return {
      picture: user.picture.large,
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      street: user.location.street.name,
      phone: user.phone,
      password: user.login.password,
    }
  } catch (err) {
    alert(err)
  }
}

const setUser = async () => {
  const person = await fetchUser()
  showUser(person)
}

const showUser = (data) => {
  const userData = data

  userImg.src = userData.picture
  userTitle.textContent = 'My name is'
  userValue.textContent = userData.name

  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      buttons.forEach((button) => {
        button.classList.remove('active')
      })

      const thisBtn = e.currentTarget
      const thisLabel = thisBtn.dataset.label

      thisBtn.classList.add('active')

      userTitle.textContent = `My ${thisLabel} is`
      userValue.textContent = userData[thisLabel]
    })
  })
}

getRandomUserBtn.addEventListener('click', () => {
  setUser()
})

window.addEventListener('DOMContentLoaded', setUser)
