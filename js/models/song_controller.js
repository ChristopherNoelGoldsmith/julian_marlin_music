import { UIController } from './dom.js';

export const songController = () => {

    const query = new UIController;

// Control Variables
    let songIndex = 0;
    const songs =  ['song', 'song2', 'song3'];

    const playButton = query.playBtn.addEventListener('click', () => {
        const isPlaying = query.musicContainer.classList.contains('play');
        isPlaying ? audioPlayer.pauseSong: audioPlayer.playSong;
        });

///////////////////////////
    
    const audioPlayer = {
        loadSong(arr) {
            query.title.innerText = arr;
            audio.src = `music/${arr}.mp3`;
            cover.src = `img/${arr}.jpg`;
        },

        playSong() {
            query.musicContainer.classList.add('play');
            query.playBtn.querySelector('i.fas').classList.remove('fa-play');
            query.playBtn.querySelector('i.fas').classList.add('fa-pause');
            audio.play();
        },

        pauseSong() {
            query.musicContainer.classList.remove('play');
            query.playBtn.querySelector('i.fas').classList.remove('fa-pause');
            query.playBtn.querySelector('i.fas').classList.add('fa-play');

            audio.pause();
        },

        prevSong() {
            songIndex--
            if(songIndex < 0){
                songIndex = songs.length - 1;
            };

            audioPlayer.loadSong(songs[songIndex]);

            audioPlayer.playSong();
        },
    //song index values need to be edited to be more scaleable
        nextSong() {
            console.log('working');
            songIndex++
            if(songIndex > songs.length -1){
                songIndex = 0;
            }

            audioPlayer.loadSong(songs[songIndex]);

            audioPlayer.playSong();
        },
    //progress functions
        updateProgress(ev) {
            //deconstructor
            const {duration, currentTime} = ev.srcElement;
            const progressPercent = (currentTime/duration) * 100;
            query.progress.style.width = `${progressPercent}%`;
        },
        setProgress(e) {
            const width = this.clientWidth;
            const clickX = e.offsetX;
            const duration = audio.duration;

            audio.currentTime = (clickX / width * duration);
        }
    };
//play pause button toggle


    return{
        getAudioPlayer() {
            return audioPlayer;
        }
    };
};