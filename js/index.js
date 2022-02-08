import { UIController } from "./models/dom.js";
import { songController } from "./models/song_controller.js";

const controller = (function(UICtrl, songCtr){

    //importing dom targets from UIcontroller
    const query = UICtrl;
    const songCtrl = songCtr().getAudioPlayer();

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
        init() {
            console.log('This application has started');
            setupEventListeners();
        }
    }
              
})(UIController, songController);

controller.init();