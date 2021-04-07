document.addEventListener('DOMContentLoaded', () => {
  const audioElement1 = document.getElementById('audio1');
  const audioElement2 = document.getElementById('audio2');
  const startPlay1 = document.querySelector('.btn1');
  const startPlay2 = document.querySelector('.btn2');
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  let leftPlay1 = 0;
  let moveLeft1 = false;
  let topPlay1 = 0;
  let moveTop1 = false;
  let leftPlay2 = 0;
  let moveLeft2 = false;
  let topPlay2 = 0;
  let moveTop2 = false;

  let speedMove1 = 5;
  let speedMove2 = 7;

  let hoverPlay1 = false;
  let hoverPlay2 = false;

  const togglePlay = (audioElement) => {
    audioElement.paused ? audioElement.play() : audioElement.pause();
  }

  startPlay1.addEventListener('click', () => {
    togglePlay(audioElement1);
  })

  startPlay1.addEventListener('mouseover', () => {
    hoverPlay1 = true;
    startPlay1.style.zIndex = '20';
  })

  startPlay1.addEventListener('mouseout', () => {
    hoverPlay1 = false;
    startPlay1.style.zIndex = '10';
  })

  startPlay2.addEventListener('click', () => {
    togglePlay(audioElement2);
  })

  startPlay2.addEventListener('mouseover', () => {
    hoverPlay2 = true;
    startPlay2.style.zIndex = '20';
  })

  startPlay2.addEventListener('mouseout', () => {
    hoverPlay2 = false;
    startPlay2.style.zIndex = '10';
  })

  function animate() {
    if (!hoverPlay1) {
      startPlay1.style.left = leftPlay1 + 'px';
      startPlay1.style.top = topPlay1 + 'px';
  
      if (leftPlay1 <= 0) moveLeft1 = false;
      else if (leftPlay1 + startPlay1.offsetWidth >= windowWidth - speedMove1) moveLeft1 = true;
      if (topPlay1 <= 0) moveTop1 = false;
      else if (topPlay1 + startPlay1.offsetHeight >= windowHeight - speedMove1) moveTop1 = true;
      
      moveLeft1 ? leftPlay1-=speedMove1 : leftPlay1+=speedMove1;
      moveTop1 ? topPlay1-=speedMove1 : topPlay1+=speedMove1;
    }

    if (!hoverPlay2) {
      startPlay2.style.left = leftPlay2 + 'px';
      startPlay2.style.top = topPlay2 + 'px';
      
      if (leftPlay2 <= 0) moveLeft2 = false;
      else if (leftPlay2 + startPlay2.offsetWidth >= windowWidth - speedMove2) moveLeft2 = true;
      if (topPlay2 <= 0) moveTop2 = false;
      else if (topPlay2 + startPlay2.offsetHeight >= windowHeight - speedMove2) moveTop2 = true;
      
      moveLeft2 ? leftPlay2-=speedMove2 : leftPlay2+=speedMove2;
      moveTop2 ? topPlay2-=speedMove2 : topPlay2+=speedMove2;
    }
    requestAnimationFrame(animate);
  }

  animate()

  window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
  })
})