 const MusicNames =  [
    'Alessia Cara - Scars To Your Beautiful (Official Audio)',
    'Boney M. - Rasputin (Lyrics) There lived a certain man in Russia long ago [TikTok Song]',
    'Ed Sheeran - Shape of You (Official Music Video)',
    // 'Game of Thrones The Musical Nikolaj Coster-Waldau - Closer to Home Red Nose Day',
    'Haminastu - Full Video Fitoor Aditya Roy Kapur & Katrina Kaif Amit Trivedi Swanand Kirki',
    'Marshmello ft. Bastille - Happier (Official Music Video)',
    'Queen - We Will Rock You (Official Video)',
    'Rose',
    'The Chain (2004 Remaster)',
    'Charlie Pularikalo Song Video Dulquer Salmaan, Parvathy Official',
    'Bekarar Karke Hume Yun Na Jaiye Hemant Kumar Bees Saal Baad 1962 Songs Waheeda Rehman',
    'Ek Ladki Bhigi Bhagi Si Chalti Ka Naam Gaadi Songs Kishore Kumar Madhubala Rain Song',
    'Taylor Swift - Love Story'

]

const Music = MusicNames.map((ele)=>`./music/${ele}.mp3`)
console.table(Music)

var index = 2;
const sound = new Audio(Music[index])

var flag = false;

sound.addEventListener('ended', ()=>{
    next ()
})

const next = ()=>{
    sound.pause()
    sound.src = Music[++index%Music.length];
    sound.play()
}

const prev = ()=>{
    sound.pause()
    sound.src = Music[index%Music.length-1];
    sound.play()
}

const shuffle = ()=>{
    sound.pause()
    index = Math.floor(Math.random()*Music.length)
    sound.src = Music[index]
    sound.play()
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
            sound.play ()
            flag = true
        }
        if(commandData.command === "pause" && flag)
            sound.pause ()
        if(commandData.command === "next"&&flag) 
            next ()
        if(commandData.command === "prev"&&flag)
            prev ()
        if(commandData.command === "shuffle"&&flag) {
            shuffle ()
        }
        if(commandData.command === "stop") {
            sound.load ()         
            flag = false 
        }  
    },
    rootEl: document.getElementById("alan-btn"),
  });









