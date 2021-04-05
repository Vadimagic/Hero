document.addEventListener('DOMContentLoaded', () => {
  const audioElement = document.getElementById('audio1');
  const startPlay = document.querySelector('.btn1');
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  let leftPlay = 0;
  let moveLeft = false;
  let topPlay = 0;
  let moveTop = false;

  let speedMove = 5;

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
    else if (leftPlay + startPlay.offsetWidth >= windowWidth - speedMove) moveLeft = true;
    if (topPlay <= 0) moveTop = false;
    else if (topPlay + startPlay.offsetHeight >= windowHeight - speedMove) moveTop = true;

    moveLeft ? leftPlay-=speedMove : leftPlay+=speedMove;
    moveTop ? topPlay-=speedMove : topPlay+=speedMove;
    requestAnimationFrame(animate);
  }

  animate()

  window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
  })
})