 const MusicNames =  [
    'https://firebasestorage.googleapis.com/v0/b/ai-entertainer.appspot.com/o/Bekarar%20Karke%20Hume%20Yun%20Na%20Jaiye%20Hemant%20Kumar%20Bees%20Saal%20Baad%201962%20Songs%20Waheeda%20Rehman.mp3?alt=media&token=4144a4c3-9b77-4f5a-84a5-49b4ee833d60',
    'https://firebasestorage.googleapis.com/v0/b/ai-entertainer.appspot.com/o/Boney%20M.%20-%20Rasputin%20(Lyrics)%20There%20lived%20a%20certain%20man%20in%20Russia%20long%20ago%20%5BTikTok%20Song%5D.mp3?alt=media&token=f3b11042-561e-41d7-ab69-14b47ef28a83',
    'https://firebasestorage.googleapis.com/v0/b/ai-entertainer.appspot.com/o/Charlie%20Pularikalo%20Song%20Video%20Dulquer%20Salmaan%2C%20Parvathy%20Official.mp3?alt=media&token=bbe34228-3000-4ef2-bdf7-d82761581d65',
    'https://firebasestorage.googleapis.com/v0/b/ai-entertainer.appspot.com/o/Ed%20Sheeran%20-%20Shape%20of%20You%20(Official%20Music%20Video).mp3?alt=media&token=515298a4-db6a-41bf-b71b-a74a04b2f907',
    'https://firebasestorage.googleapis.com/v0/b/ai-entertainer.appspot.com/o/Alessia%20Cara%20-%20Scars%20To%20Your%20Beautiful%20(Official%20Audio).mp3?alt=media&token=0486df62-1bf6-4bdb-a17b-41703a56402e',
    'https://firebasestorage.googleapis.com/v0/b/ai-entertainer.appspot.com/o/Ek%20Ladki%20Bhigi%20Bhagi%20Si%20Chalti%20Ka%20Naam%20Gaadi%20Songs%20Kishore%20Kumar%20Madhubala%20Rain%20Song.mp3?alt=media&token=7487d827-5576-4010-a808-a66515084f15',
    'https://firebasestorage.googleapis.com/v0/b/ai-entertainer.appspot.com/o/Game%20of%20Thrones%20The%20Musical%20Nikolaj%20Coster-Waldau%20-%20Closer%20to%20Home%20Red%20Nose%20Day.mp3?alt=media&token=92333a7c-5768-4a29-aaa4-0dc8a0965a9d',
    'https://firebasestorage.googleapis.com/v0/b/ai-entertainer.appspot.com/o/Haminastu%20-%20Full%20Video%20Fitoor%20Aditya%20Roy%20Kapur%20%26%20Katrina%20Kaif%20Amit%20Trivedi%20Swanand%20Kirki.mp3?alt=media&token=289d1d7b-cf4e-4ca2-8926-cd90bfac2317',
    'https://firebasestorage.googleapis.com/v0/b/ai-entertainer.appspot.com/o/Marshmello%20ft.%20Bastille%20-%20Happier%20(Official%20Music%20Video).mp3?alt=media&token=3e9dadcd-3961-4a13-89f9-c25e338d4fa2',
    'https://firebasestorage.googleapis.com/v0/b/ai-entertainer.appspot.com/o/Queen%20-%20We%20Will%20Rock%20You%20(Official%20Video).mp3?alt=media&token=4e488d28-879d-467a-916d-7e0199865e00',
    'https://firebasestorage.googleapis.com/v0/b/ai-entertainer.appspot.com/o/Rose.mp3?alt=media&token=da2b61fd-7b15-430e-b441-1c264d5b32c1',
    'https://firebasestorage.googleapis.com/v0/b/ai-entertainer.appspot.com/o/Taylor%20Swift%20-%20Love%20Story.mp3?alt=media&token=3b936e3a-359d-4bc8-9937-8f59c018f2c9',
    'https://firebasestorage.googleapis.com/v0/b/ai-entertainer.appspot.com/o/The%20Chain%20(2004%20Remaster).mp3?alt=media&token=89c84f85-3f2d-453b-854f-66218177ab8b',
    'https://firebasestorage.googleapis.com/v0/b/ai-entertainer.appspot.com/o/kansas-carry-on-wayward-son-official-audio-(mp3convert.org).mp3?alt=media&token=48d53298-f54a-4088-913e-b5386560668f',

]

const music_player = document.getElementById('music-player');
const music_play_pause = document.getElementById('play-pause');
const music_next = document.getElementsByClassName('next')[0];
const music_prev = document.getElementsByClassName('prev')[0];
const inner_circle = document.getElementsByClassName('inner')[0];
music_player.style.display = 'none';
const Music = MusicNames.map((ele)=>`${ele}`)
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