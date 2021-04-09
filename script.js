document.addEventListener('DOMContentLoaded', () => {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  const names = [{audio: 'audio1', btn: 'btn1'}, {audio: 'audio2', btn: 'btn2'}]
  const audioElements = [];

  class AudioElement {
    constructor(audio = 'audio1', start, speed = 5) {
      this.audio = document.querySelector(`#${audio}`);
      this.start = document.querySelector(`.${start}`);
      this.speed = speed;
      this.left = 0;
      this.top = 0;
      this.moveLeft = false;
      this.moveTop = false;
      this.hover = false
    }

    move() {
      if (!this.hover) {
        this.start.style.left = this.left + 'px';
        this.start.style.top = this.top + 'px';
    
        if (this.left <= 0) this.moveLeft = false;
        else if (this.left + this.start.offsetWidth >= windowWidth - this.speed) this.moveLeft = true;
        if (this.top <= 0) this.moveTop = false;
        else if (this.top + this.start.offsetHeight >= windowHeight - this.speed) this.moveTop = true;
        this.moveLeft ? this.left-=this.speed : this.left+=this.speed;
        this.moveTop ? this.top-=this.speed : this.top+=this.speed;
      }
    }
  }

  function pushAudioElements() {
    names.forEach(name => {
      audioElements.push(new AudioElement(name.audio, name.btn, Math.random() * 8 + 2))
    })
  }

  pushAudioElements();

  const togglePlay = (audioElement) => {
    audioElement.paused ? audioElement.play() : audioElement.pause();
  }

  function handleAudio() {
    audioElements.forEach(elem => {
      console.log(elem)
      elem.start.addEventListener('click', () => {
        togglePlay(elem.audio);
      })
      elem.start.addEventListener('mouseover', () => {
        elem.hover = true;
      })
      elem.start.addEventListener('mouseout', () => {
        elem.hover = false;
      })
    })
  }

  handleAudio();

  function handleMove() {
    audioElements.forEach(elem => elem.move())
  }

  function animate() {
    handleMove();
    requestAnimationFrame(animate);
  }

  animate()

  window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
  })
})