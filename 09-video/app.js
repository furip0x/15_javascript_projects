const preloader = document.querySelector('.preloader')
const video = document.querySelector('.video-container')
const switchBtn = document.querySelector('.switch-btn')

window.addEventListener('load', () => {
  preloader.classList.add('hide-preloader')
})

const playPauseVideo = () => {
  if (switchBtn.classList.contains('slide')) {
    video.play()
  } else {
    video.pause()
  }

  switchBtn.classList.toggle('slide')
}

switchBtn.addEventListener('click', playPauseVideo)
