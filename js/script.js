/*******    STICKY HEADER    *********/
let hdr = document.querySelector('header');
let fullNav = document.querySelector('.fullNavWrapper');

function stickee() {
    let navBottom = hdr.getBoundingClientRect().bottom;
    if (navBottom <= 500) {
        fullNav.classList.add('sticky');
    } else {
        fullNav.classList.remove('sticky');
    }
}
    
document.addEventListener('scroll', stickee);


/*******    HIGHLIGHT ON SCROLL    *********/
let sects = document.querySelectorAll('section:not(.intro)');
let anchs = document.querySelectorAll('.navs a:not(.logoAnch)');

function scrollHighlight() {
     anchs.forEach((el, i) => {
        if (sects[i].getBoundingClientRect().top <= 50 && sects[i].getBoundingClientRect().bottom >= 50) {
            el.classList.add('scrollHighlight');
        } else {
            el.classList.remove('scrollHighlight');
        }
    });
}

document.addEventListener('scroll', scrollHighlight);


/*********   UPDATE COPYRIGHT YEAR   ***********/
let dateSpan = document.querySelector('span');
dateSpan.textContent = new Date().getFullYear();


/********  ANIMATE SECTS ON SCROLL  *******/
/* UPDATE TO ONLY HAPPEN WHEN WIDTH IS AT A MINIMUM WIDTH..might also need to update css to make it only start at opacity: 0 at a minimum width..sample code:

if (window.innerWidth > 650) {
    
    content.forEach((el) => {
        let contentHeight = el.getBoundingClientRect().height;
        if (contentHeight > highest) {
            highest = contentHeight;
        }
    });

    content.forEach((el) => {
        el.style.height = `${highest}px`;   
    }); 
    
}
  
window.addEventListener('resize', () => {

    if (window.innerWidth > 650) {
    
        content.forEach((el) => {
            let contentHeight = el.getBoundingClientRect().height;
            if (contentHeight > highest) {
                highest = contentHeight;
            }
        });

        content.forEach((el) => {
            el.style.height = `${highest}px`;   
        }); 
    
    } else {
         content.forEach((el) => {
            el.style.height = '';   
         });
    }
    
});    

*/
let servicePulsate = document.querySelector('.pulsate');
let custTestimonials = document.querySelectorAll('.customer');
let twoSects = [servicePulsate, ...custTestimonials];

function scrollSectHighlight() {
    twoSects.forEach((el, i) => {
        if (el.classList.contains('customer--two')) {
           if (el.getBoundingClientRect().top - el.getBoundingClientRect().height <= 400) {
                el.classList.add('animateScroll');
            }
        } else if (el.getBoundingClientRect().top <= 500) {
            el.classList.add('animateScroll');
        }
    });
}

document.addEventListener('scroll', scrollSectHighlight);


/*****BACK TO TOP BUTTON*****/
let docBody = document.body;
let docElem = document.documentElement;
let bttBtn = document.querySelector('#back-to-top');
let heights = [docBody.scrollHeight, docBody.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight];
let highestHeight = Math.max(...heights);


window.addEventListener('scroll', () => {
    let scrolltop = Math.max(docBody.scrollTop, docElem.scrollTop);
    if (scrolltop >= (highestHeight / 3)) {
        bttBtn.classList.add('visible');
    } else {
        bttBtn.classList.remove('visible');
    }
    
});

bttBtn.addEventListener('click', function(e) {
    e.preventDefault();
    docElem.scrollTop = 0;
});


/************  HAMBURGER MENU  **************/
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function() {
    this.classList.toggle('animateHamburger');
    fullNav.classList.toggle('showMenu');
});




