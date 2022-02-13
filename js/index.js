import { UIController } from "./models/dom.js";
import { songController } from "./models/song_controller.js";
import { fileController } from "./models/file_controller.js";

const controller = (function(UICtrl, songCtr){

    //importing dom targets from UIcontroller
    const songCtrl = songCtr().getAudioPlayer();
    const UI = new UICtrl;

    const setupEventListeners = function(){
        console.log('events listening');
        
        //targets music container's play and pause button.
        UI.playBtn.addEventListener('click', () => {
            const isPlaying = UI.musicContainer.classList.contains('play');
            isPlaying ? songCtrl.pauseSong(): songCtrl.playSong();
        });
        
        //targets previous and next buttons button
        UI.prevBtn.addEventListener('click', songCtrl.prevSong);
        UI.nextBtn.addEventListener('click', songCtrl.nextSong);
        
        //sets the progressbar
        audio.addEventListener('timeupdate', songCtrl.updateProgress);
        UI.progressContainer.addEventListener('click', songCtrl.setProgress);
        
        //changes to next song when song over
        audio.addEventListener('ended', songCtrl.nextSong);
        
        //adds navbar nuttongs button
        UI.contactBtn.addEventListener('click', UI.contactFormInit);
        
        //adds music btn
        UI.myMusicBtn.addEventListener('click', UI.musicShowcaseInit);
        
        //shows the about me menu
        UI.aboutMeBtn.addEventListener('click', UI.aboutMeInit);
        
        //adds close button and stops music on click as an added function
        UI.closeBtn.addEventListener('click', () => {
            UI.closeAllWindows();
            songCtrl.pauseSong();
            }//end of callback event
        );
    };

    return {
        init() {
            console.log('This application has started');
            setupEventListeners();
        }
    }
              
})(UIController, songController);

controller.init();
fileController.dirScanner();