/*==========================
    HAMBURGER MENU
==========================*/

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/*==========================
    TYPING EFFECT
==========================*/

const text = [
    "Python Developer",
    "Machine Learning",
    "Data Science"
];

let textIndex = 0;
let charIndex = 0;

const typingText = document.getElementById("typing-text");

function type(){

    if(charIndex < text[textIndex].length){

        typingText.textContent += text[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type,100);

    }

    else{

        setTimeout(erase,1800);

    }

}

function erase(){

    if(charIndex > 0){

        typingText.textContent = text[textIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,50);

    }

    else{

        textIndex++;

        if(textIndex >= text.length){

            textIndex = 0;

        }

        setTimeout(type,300);

    }

}

document.addEventListener("DOMContentLoaded",type);

/*==========================
    SCROLL REVEAL
==========================*/

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();