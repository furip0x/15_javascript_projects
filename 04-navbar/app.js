// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle')
const navLinksWrapper = document.querySelector('.links-wrapper')
const navLinks = document.querySelector('.links')

const toggleNav = () => {
  let navLinksHeight = navLinks.getBoundingClientRect().height
  let navLinksWrapperHeight = navLinksWrapper.getBoundingClientRect().height

  if (navLinksWrapperHeight === 0) {
    navLinksWrapper.style.height = `${navLinksHeight}px`
  } else {
    navLinksWrapper.style.height = '0px'
  }
}

navToggle.addEventListener('click', toggleNav)

//***TOGGLE CLASS APPROACH***
// const toggleNavWithClass = () => {
//   console.log('asd')
//   navLinks.classList.toggle('show-links')
// }

// navToggle.addEventListener('click', toggleNavWithClass)
