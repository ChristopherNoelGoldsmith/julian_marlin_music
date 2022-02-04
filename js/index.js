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

    const queryDOM = {
        musicContainer: document.querySelector(DOMstrings.musicContainer),
        playBtn: document.querySelector(DOMstrings.playBtn),
        prevBtn: document.querySelector(DOMstrings.prevBtn),
        nextBtn: document.querySelector(DOMstrings.nextBtn),
        audio: document.querySelector(DOMstrings.audio),
        progress: document.querySelector(DOMstrings.progress),
        progressContainer: document.querySelector(DOMstrings.progressContainer),
        title: document.querySelector(DOMstrings.title),
        cover: document.querySelector(DOMstrings.cover)
    };
     

    return  {
        getDomStrings: function(){
            return DOMstrings;
        },
        getQuerys: function(){
            return queryDOM;
        }
    };

})();

const songController = (function(UICtrl){

    const query = UICtrl.getQuerys();

// Control Variables
    let songIndex = 0;
    const songs =  ['song', 'song2', 'song3'];

    const playButton = query.playBtn.addEventListener('click', () => {
        const isPlaying = query.musicContainer.classList.contains('play');
        isPlaying ? audioPlayer.pauseSong: audioPlayer.playSong;
        });

///////////////////////////
    
    const audioPlayer = {
        loadSong : function(arr){
            query.title.innerText = arr;
            audio.src = `music/${arr}.mp3`;
            cover.src = `img/${arr}.jpg`;
        },

        playSong: function(){
            query.musicContainer.classList.add('play');
            query.playBtn.querySelector('i.fas').classList.remove('fa-play');
            query.playBtn.querySelector('i.fas').classList.add('fa-pause');

            audio.play();
        },

        pauseSong: function(){
            query.musicContainer.classList.remove('play');
            query.playBtn.querySelector('i.fas').classList.remove('fa-pause');
            query.playBtn.querySelector('i.fas').classList.add('fa-play');

            audio.pause();
        },

        prevSong: function(){
            songIndex--
            if(songIndex < 0){
                songIndex = songs.length - 1;
            };

            loadSong(songs[songIndex]);

            playSong();
        },
    //song index values need to be edited to be more scaleable
        nextSong: function(){
            console.log('working');
            songIndex++
            if(songIndex > songs.length -1){
                songIndex = 0;
            }

            loadSong(songs[songIndex]);

            playSong();
        },
    //progress functions
        updateProgress: function(ev){
            //deconstructor
            const {duration, currentTime} = ev.srcElement;
            const progressPercent = (currentTime/duration) * 100;
            query.progress.style.width = `${progressPercent}%`;
        },
        setProgress: function(e){
            const width = this.clientWidth;
            const clickX = e.offsetX;
            const duration = audio.duration;

            audio.currentTime = (clickX / width * duration);
        }
    };
//play pause button toggle


    return{
        getAudioPlayer: function(){
            return audioPlayer;
        }
    };

})(UIController);

const controller = (function(UICtrl, songCtr){

    //importing dom targets from UIcontroller
    const DOM = UICtrl.getDomStrings();
    const query = UICtrl.getQuerys();
    const songCtrl = songCtr.getAudioPlayer();

    const setupEventListeners = function(){
        console.log('events listening');
        //targets music container's play and pause button.
        query.playBtn.addEventListener('click', () => {
            const isPlaying = query.musicContainer.classList.contains('play');
            isPlaying ? songCtrl.pauseSong(): songCtrl.playSong();
        });
        //targets previous and next buttons button
        query.prevBtn.addEventListener('click', songCtrl.prevSong);
        query.nextBtn.addEventListener('click', songCtrl.nextSong);
        //sets the progressbar
        audio.addEventListener('timeupdate', songCtrl.updateProgress);
        query.progressContainer.addEventListener('click', songCtrl.setProgress);
        //changes to next song when song over
        audio.addEventListener('ended', songCtrl.nextSong);
    };

    return {
        init: function(){
            console.log('This application has started');
            setupEventListeners();
        }
    }
              
})(UIController, songController);

controller.init();