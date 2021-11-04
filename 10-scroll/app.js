// ********** set date ************
const date = document.querySelector('#date')
date.textContent = new Date().getFullYear().toString()

// ********** close links ************
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')
const navToggle = document.querySelector('.nav-toggle')

navToggle.addEventListener('click', () => toggleNav())

const toggleNav = () => {
  const linksHeight = links.getBoundingClientRect().height
  const linksContainerHeight = linksContainer.getBoundingClientRect().height

  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`
  } else {
    linksContainer.style.height = '0px'
  }
}

// ********** fixed navbar ************
const nav = document.querySelector('#nav')
const navHeight = nav.getBoundingClientRect().height

document.addEventListener('scroll', function (e) {
  if (window.scrollY > navHeight) {
    nav.classList.add('fixed-nav')
  } else {
    nav.classList.remove('fixed-nav')
  }
})

// ********** smooth scroll ************
// select links

const linkList = document.querySelectorAll('.scroll-link')
linkList.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()

    const thisId = e.currentTarget.getAttribute('href')
    const targetElement = document.querySelector(thisId)
    const targetPosition = targetElement.offsetTop
    // const targetPosition = targetElement.getBoundingClientRect().top
    const targetOffsetPosition = targetPosition - navHeight

    console.log(link.getAttribute('href'))
    console.log(e.currentTarget.getAttribute('href'))

    window.scrollTo({
      top: targetOffsetPosition,
      behavior: 'smooth',
    })

    console.log(targetOffsetPosition)

    toggleNav()
  })
})
