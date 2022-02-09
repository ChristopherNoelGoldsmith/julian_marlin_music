//all necessary classes and ID needed for targeting with query selector
export const UIController = {
    //Contact Form
    firstName: document.querySelector('#first-name'),
    lastName: document.querySelector('#last-name'),
    email: document.querySelector('#email'),
    phone: document.querySelector('#phone'),
    contactText: document.querySelector('#contact-text'),
    //Music Player
    musicContainer: document.querySelector('.music-container'),
    playBtn: document.querySelector('#play'),
    prevBtn: document.querySelector('#prev'),
    nextBtn: document.querySelector('#next'),
    audio: document.querySelector('#audio'),
    progress: document.querySelector('.progress'),
    progressContainer: document.querySelector('.progress-container'),
    title: document.querySelector('#title'),
    cover: document.querySelector('#cover'),
    contactMe: document.querySelector('#contact-overlay'),
    contactBtn: document.querySelector('#contact-btn'),
    closeBtn: document.querySelector('#close-btn'),

    contactFormInit() { 
        //button that toggles the visibility of the contact forms
        const contactList = UIController.contactMe.classList
        //for the small x button on the contact form
        if(contactList.contains('visable')){
            contactList.add('not-visable');
            contactList.remove('visable')
        } 
        //for the contact form button on the main page
        else {            
            contactList.remove('not-visable')
            contactList.add('visable');
        }
    }
};
