//all necessary classes and ID needed for targeting with query selector
export const UIController = class UI {
    //Contact Form
    constructor(){
        this.navbar = document.querySelector('.navbar');
        this.firstName = document.querySelector('#first-name');
        this.lastName = document.querySelector('#last-name');
        this.email = document.querySelector('#email');
        this.phone = document.querySelector('#phone');
        this.contactText = document.querySelector('#contact-me-text');
        //Music Player
        this.musicShowcase = document.querySelector('.music-showcase');
        this.musicContainer = document.querySelector('.music-container');
        this.playBtn = document.querySelector('#play');
        this.prevBtn = document.querySelector('#prev');
        this.nextBtn = document.querySelector('#next');
        this.audio = document.querySelector('#audio');
        this.progress = document.querySelector('.progress');
        this.progressContainer =  document.querySelector('.progress-container');
        this.title = document.querySelector('#title');
        this.cover = document.querySelector('#cover');
        this.contactMe = document.querySelector('#contact-overlay');
        this.contactBtn = document.querySelector('#contact-btn');
        this.myMusicBtn = document.querySelector('#my-music-btn');
        this.closeBtn = document.querySelector('#close-btn');
        this.aboutMeBtn = document.querySelector('#about-btn');
        this.aboutMe = document.querySelector('.about-me');
    };
/////////////////////////////////////////////////////////////////////
    //functions in this section of the class are arrow functions
    //to maintain the lexical scope of the class so the methods can call other methods inside.
    closeAllWindows = () => {
        /*a function that parses the properties of the UICOntroller constructor to change the callses
        of the DOM to make all windows with the exception of the hero image and navbar hidden
        
        it scans the typeof of each property in the class to parse only the DOM targeting elements then
        determine weather they are visible, then is they are it takes the visable class away and adds
        the not-visable class.
        */ 
        
        
        for(const each in this){
            
            //--------dubugger--------
            //console.log(this[each].classList);
            //console.log(typeof(this[each]));
            
            if(
            typeof(this[each]) == 'object' 
            && this[each].classList.contains('visable') 
            && !this[each].classList.contains('navbar')
            ){
                this[each].classList.remove('visable');
                this[each].classList.add('not-visable');
            }
        };
        console.log(this.makeVisable)
        this.navbarVis();
    }
    //displays the contact form
    contactFormInit = () => {
        //button that toggles the visibility of the contact forms
        this.makeVisable(this.contactMe)
    }
    //displays the music player
    musicShowcaseInit = () => {
        this.makeVisable(this.musicShowcase)
    }
    aboutMeInit = () => {
        this.makeVisable(this.aboutMe);
    }

    //these are the methods called with the arrow functions
//////////////////////////////////////////////////////////////////
    //makes the selected section visable through a button event
    makeVisable (e) {
        //button that toggles the visibility of the contact forms
        const eClass = e.classList
        //for the small x button on the contact form
        if(eClass.contains('visable')){
            eClass.add('not-visable');
            eClass.remove('visable')
        } 
        //for the contact form button on the main page
        else {            
            eClass.remove('not-visable')
            eClass.add('visable');
            this.closeBtnVis();
            this.navbarVis();
        }
    };
//these three functions need to be combined into 1
    //functionality for the close all windows button
    closeBtnVis () {        
        const closeBtn = this.closeBtn.classList;
        if(closeBtn.contains('visable')){
            closeBtn.add('not-visable');
            closeBtn.remove('visable')
        } 
        //for the contact form button on the main page
        else {            
            closeBtn.remove('not-visable')
            closeBtn.add('visable');
        }
    }

    //function for navbar visability
    navbarVis () {
        const navbar = this.navbar.classList;
        if(navbar.contains('visable')){
            navbar.add('not-visable');
            navbar.remove('visable')
        } 
        //for the contact form button on the main page
        else {            
            navbar.remove('not-visable')
            navbar.add('visable');
        }
    }
};
