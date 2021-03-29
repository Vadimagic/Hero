document.addEventListener('DOMContentLoaded', () => {
  const myAudioElement = document.getElementById('audio');
  const startPlay = document.querySelector('.wrapper');

  startPlay.addEventListener('click', () => {
    myAudioElement.play();
  })
})