 const MusicNames =  [
    'Alessia Cara - Scars To Your Beautiful (Official Audio)',
    'Boney M. - Rasputin (Lyrics) There lived a certain man in Russia long ago [TikTok Song]',
    'Ed Sheeran - Shape of You (Official Music Video)',
    'Haminastu - Full Video Fitoor Aditya Roy Kapur & Katrina Kaif Amit Trivedi Swanand Kirki',
    'The Chain (2004 Remaster)',
    'Marshmello ft. Bastille - Happier (Official Music Video)',
    'Queen - We Will Rock You (Official Video)',
    'Rose',
    'Game of Thrones The Musical Nikolaj Coster-Waldau - Closer to Home Red Nose Day',
    'Charlie Pularikalo Song Video Dulquer Salmaan, Parvathy Official',
    'Bekarar Karke Hume Yun Na Jaiye Hemant Kumar Bees Saal Baad 1962 Songs Waheeda Rehman',
    'Ek Ladki Bhigi Bhagi Si Chalti Ka Naam Gaadi Songs Kishore Kumar Madhubala Rain Song',
    'Taylor Swift - Love Story'

]

const music_player = document.getElementById('music-player');
const music_play_pause = document.getElementById('play-pause');
const music_next = document.getElementsByClassName('next')[0];
const music_prev = document.getElementsByClassName('prev')[0];
const inner_circle = document.getElementsByClassName('inner')[0];
music_player.style.display = 'none';
const Music = MusicNames.map((ele)=>`./music/${ele}.mp3`)
console.table(Music)

var index = 2;
const sound = new Audio(Music[index])

var flag = false;


class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 300;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // If word is complete
      if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  

  // Init App
  const init = () => {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }



  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  

sound.addEventListener('ended', ()=>{
    next ()
})

const iconChanger = (decider)=>{
    if(decider){
    document.getElementsByClassName('play')[0].style.display = 'none'
    document.getElementsByClassName('pause')[0].style.display = 'inline-block'
    } else {
        document.getElementsByClassName('pause')[0].style.display = 'none'
        document.getElementsByClassName('play')[0].style.display = 'inline-block'       
    }
    
}

const play = ()=>{
    flag = true;
    music_player.style.display = 'block';
    iconChanger(true)
    sound.play ()
}

const stop = ()=>{
    flag = false;
    music_player.style.display = 'none';
    sound.load ()
}

const pause = ()=>{
    sound.pause ()
    iconChanger(false);
}
const next = ()=>{
    pause()
    sound.src = Music[++index%Music.length];
    play()
}

const prev = ()=>{
    pause()
    if (index==0) {
        index = Music.length-1
    }
     else index--;
    sound.src = Music[index];
    play()
}

const shuffle = ()=>{
    pause()
    index = Math.floor(Math.random()*Music.length)
    sound.src = Music[index]
    play()
}


var alanBtnInstance = alanBtn({
    key: "386afa49abb52dfcb7c27a304555264e2e956eca572e1d8b807a3e2338fdd0dc/stage",
    onCommand: function (commandData) {
      if (commandData.command === "go:back") {
        //call client code that will react on the received command
      }
    },
    onCommand: function (commandData) {
        if(commandData.command === "play") {
            play ()
        }
        if(commandData.command === "pause" && flag)
            pause ()
        if(commandData.command === "next"&&flag) 
            next ()
        if(commandData.command === "prev"&&flag)
            prev ()
        if(commandData.command === "shuffle"&&flag) {
            shuffle ()
        }
        if(commandData.command === "stop") {
            stop ()
        }  
    },
    rootEl: document.getElementById("alan-btn"),
  });



music_play_pause.addEventListener('click', ()=>{
    if(sound.paused) {
        play();
    }
    else pause();
})

music_next.addEventListener('click', ()=>{
    next ()
})

music_prev.addEventListener('click', ()=>{
    prev ()
})

inner_circle.addEventListener('click', ()=>{
 if(!flag)
    play ()
 else stop ()
})