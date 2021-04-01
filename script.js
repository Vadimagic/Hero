document.addEventListener('DOMContentLoaded', () => {
  const audioElement = document.getElementById('audio');
  const startPlay = document.querySelector('.btn');
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  let leftPlay = 0;
  let moveLeft = false;
  let topPlay = 0;
  let moveTop = false;

  const togglePlay = () => {
    audioElement.paused ? audioElement.play() : audioElement.pause();
  }

  startPlay.addEventListener('click', () => {
    togglePlay();
  })

  function animate() {
    startPlay.style.left = leftPlay + 'px';
    startPlay.style.top = topPlay + 'px';

    if (leftPlay <= 0) moveLeft = false;
    else if (leftPlay + startPlay.offsetWidth >= windowWidth) moveLeft = true;
    if (topPlay <= 0) moveTop = false;
    else if (topPlay + startPlay.offsetHeight >= windowHeight) moveTop = true;

    moveLeft ? leftPlay-=3 : leftPlay+=3;
    moveTop ? topPlay-=3 : topPlay+=3;
    requestAnimationFrame(animate);
  }

  animate()

  window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
  })
})