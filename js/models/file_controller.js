const path = require('path');
const fs = require('fs');

    export const fileController = {

        dirContainer: null,

        dirScanner (pth = '../../', dir = 'music') {
            //defaults to the music folder
            const directoryPath = path.join(pth, dir);
            //passsing directoryPath and callback function
    
            fs.readdir(directoryPath, (err, files) => {
            //handling error
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            } 
            else{
                this.dirContainer = files;
                console.log(`Success, dir located - ${directoryPath}:`, this.dirContainer);
            }
            
            //mutates the dirContainer element of fileContorller to be the selected dir from this function
             
        });
    
    }
};
//make promise to return data;

/* file controller takes the data of folders. this data is transfered to the song controller to control
what songs are being played, and it is transfered to the dom to control the population of the music 
player UI */