const UIController = (function(){

    //all necessary classes and ID needed for targeting with query selector
    const DOMstrings = {
        /*navbar: '.navbar',
        title: '.title',
        hero: '.hero',
        aboutMe: '.about-me',
        musicBox: '.music-showcase',
        image: '.image',
        videos: '.videos',
        contactMe: '.contact-me',
        inputs: '.contact-inputs',
        contactMeText: '#contact-me-text',*/
        //Music Player
        musicContainer: '.music-container',
        playBtn: '#play',
        prevBtn: '#prev',
        nextBtn: '#next',
        audio: '#audio',
        progress: '.progress',
        progressContainer: '.progress-container',
        title: '#title',
        cover: '#cover'
    };
     

    return  {
        getDomStrings: function(){
            return DOMstrings;
        }
    }

})();

songController = (function(){

    //keep track of music
    
    //loads songs lol

});

const controller = (function(UICtrl, songCtrl){

    //importing dom targets from UIcontroller
    const DOM = UICtrl.getDomStrings();
//Needs to be made into its own ctrl    
//const song = songCtrl;

let songIndex = 0;
const songs =  ['song', 'song2', 'song3'];


//

    const setupEventListeners = function(){
        console.log('events listening');

        console.log(query(DOM.musicContainer).classList);

        //targets music container's play and pause button.
        document.querySelector(DOM.playBtn).addEventListener('click', () => {
            const isPlaying = query(DOM.musicContainer).classList.contains('play');
            isPlaying ? pauseSong(): playSong();
        });

        //targets previous and next buttons button
        document.querySelector(DOM.prevBtn).addEventListener('click', prevSong);
        document.querySelector(DOM.nextBtn).addEventListener('click', nextSong);
        //sets the progressbar
        audio.addEventListener('timeupdate', updateProgress);
        document.querySelector(DOM.progressContainer).addEventListener('click', setProgress);
        //changes to next song when song over
        audio.addEventListener('ended', nextSong);
    };

    const query = function(str){
        return document.querySelector(str);
    };

    
    const loadSong = function(arr){
        query(DOM.title).innerText = arr;
        audio.src = `music/${arr}.mp3`;
        cover.src = `img/${arr}.jpg`;
    }

    const playSong = function(){
        query(DOM.musicContainer).classList.add('play');
        query(DOM.playBtn).querySelector('i.fas').classList.remove('fa-play');
        query(DOM.playBtn).querySelector('i.fas').classList.add('fa-pause');

        audio.play();
    };

    const pauseSong = function(){
        query(DOM.musicContainer).classList.remove('play');
        query(DOM.playBtn).querySelector('i.fas').classList.remove('fa-pause');
        query(DOM.playBtn).querySelector('i.fas').classList.add('fa-play');

        audio.pause();
    };

    const prevSong = function(){
        songIndex--
        if(songIndex < 0){
            songIndex = songs.length - 1;
        }

        loadSong(songs[songIndex]);

        playSong();
    };
//song index values need to be edited to be more scaleable
    const nextSong = function(){
        console.log('working');
        songIndex++
        if(songIndex > songs.length -1){
            songIndex = 0;
        }

        loadSong(songs[songIndex]);

        playSong();
    };
//progress functions
    const updateProgress = function(ev){
        //deconstructor
        const {duration, currentTime} = ev.srcElement;
        const progressPercent = (currentTime/duration) * 100;
        document.querySelector(DOM.progress).style.width = `${progressPercent}%`;
    };

    const setProgress = function(e){
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;

        audio.currentTime = (clickX / width * duration);
    }
//play pause button toggle

    const playButton = query(DOM.playBtn).addEventListener('click', () => {
        const isPlaying = query(DOM.musicContainer).classList.contains('play');
        isPlaying ? pauseSong: playSong;
    });

//

    return {
        init: function(){
            console.log('This application has started');
            setupEventListeners();
        }
    }
              
})(UIController, songController);

controller.init();