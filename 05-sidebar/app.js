const sidebar = document.querySelector('.sidebar')
const sidebarToggle = document.querySelector('.sidebar-toggle')
const sidebarClose = document.querySelector('.close-btn')

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar')
})

sidebarClose.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar')
})
