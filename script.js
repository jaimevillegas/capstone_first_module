const navMenu = document.getElementById('modal-menu');
const open = document.getElementById('open-modal-menu');
const close = document.getElementById('close-modal-menu');
const menuAbout = document.getElementById('about-page');
const menuItem = document.querySelectorAll('.menu-item');
const speakersContainer = document.getElementById('speakers-container');
const buttonMore = document.getElementById('button-more');

const speakers = [
    {
        name: 'Tony Stark',
        profession: 'Billionaire Industrialist and Inventor',
        description: 'Genious inventor, and consummate engineer who uses a powered suit of armor to protect the world as Iron Man.',
        image: './images/tony.png',
    },
    {
        name: 'C3PO',
        profession: 'Humanoid Robot',
        description: 'Programmed for etiquette and protocol and serves as a protocol droid, designed to assist with diplomatic and interpersonal communication.',
        image: './images/c3po.png',
    },
    {
        name: "Isaac Asimov",
        profession: 'Science Fiction author and Biochemist',
        description: 'Best known for his works in science fiction and popular science, including his Foundation series and his colection of short stories about robots.',
        image: './images/asimov.png',
    },
    {
        name: 'Bruce Banner',
        profession: 'Scientist and Physician',
        description: 'Transformed into The Hulk as the result of a gamma radiation accident, is a Nuclear Physicist who works on developing advanced weapons for the military.',
        image: './images/banner.png',
    },
    {
        name: 'Tony Stark',
        profession: 'Billionaire Industrialist and Inventor',
        description: 'Genious inventor, and consummate engineer who uses a powered suit of armor to protect the world as Iron Man.',
        image: './images/tony.png',
    },
    {
        name: 'C3PO',
        profession: 'Humanoid Robot',
        description: 'Programmed for etiquette and protocol and serves as a protocol droid, designed to assist with diplomatic and interpersonal communication.',
        image: './images/c3po.png',
    },
    {
        name: "Isaac Asimov",
        profession: 'Science Fiction author and Biochemist',
        description: 'Best known for his works in science fiction and popular science, including his Foundation series and his colection of short stories about robots.',
        image: './images/asimov.png',
    },
    {
        name: 'Bruce Banner',
        profession: 'Scientist and Physician',
        description: 'Transformed into The Hulk as the result of a gamma radiation accident, is a Nuclear Physicist who works on developing advanced weapons for the military.',
        image: './images/banner.png',
    },
];


function createSpeaker(name, profession, description, image, index) {
    const workHTML = document.createElement('article');
    workHTML.className = 'speaker';
    workHTML.innerHTML = `
                        <img src='${image}' alt='Speaker Image'>
                        <div class='speaker-info'>
                            <h2>${name}</h2>
                            <h3>${profession}</h3>
                            <hr>
                            <p>${description}</p>
                        </div>`;

    speakersContainer.appendChild(workHTML);
}

function mobileMenuDisplayNone() {
    navMenu.style.display = 'none';
}

function mobileMenuDisplayBlock() {
    navMenu.style.display = 'block';
}

function showSpeakersDesktop() {
    speakers.forEach((speaker, index) => {
        createSpeaker(speaker.name, speaker.profession, speaker.description, speaker.image);
    });
}

function showTwoSpeakersMobile() {
    for (let i = 0; i < 2; i++) {
        createSpeaker(speakers[i].name, speakers[i].profession, speakers[i].description, speakers[i].image);
    }

}

open.addEventListener('click', (() => { mobileMenuDisplayBlock(); }));
close.addEventListener('click', (() => { mobileMenuDisplayNone(); }));

window.addEventListener('load', (() => {
    if ((window.getComputedStyle(buttonMore, null).display) == 'none') {
        showSpeakersDesktop();
    } else {
        showTwoSpeakersMobile();
    }
}))

window.addEventListener('resize', (() => {
    if ((window.getComputedStyle(buttonMore, null).display) == 'none') {
        speakersContainer.innerHTML = '';
        showSpeakersDesktop();
    } else {
        speakersContainer.innerHTML = '';
        showTwoSpeakersMobile();
    }
}))

buttonMore.addEventListener('click', (() => {
    speakersContainer.innerHTML = '';
    showSpeakersDesktop();
    buttonMore.style.display = 'none';
}))