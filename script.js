document.addEventListener('DOMContentLoaded', () => {
  const audioElement = document.getElementById('audio');
  const startPlay = document.querySelector('.btn');

  let leftPlay = 0;
  let topPlay = 0;

  const togglePlay = () => {
    audioElement.paused ? audioElement.play() : audioElement.pause();
  }

  startPlay.addEventListener('click', () => {
    togglePlay();
  })

  function animate() {
    startPlay.style.left = leftPlay + 'px';
    startPlay.style.top = topPlay + 'px';
    leftPlay++;
    topPlay++;
    requestAnimationFrame(animate)
  }

  animate()
})