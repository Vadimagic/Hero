document.addEventListener('DOMContentLoaded', () => {
  const audioElement = document.getElementById('audio');
  const startPlay = document.querySelector('.wrapper');

  const togglePlay = () => {
    audioElement.paused ? audioElement.play() : audioElement.pause();
  }

  startPlay.addEventListener('click', () => {
    togglePlay();
  })
})