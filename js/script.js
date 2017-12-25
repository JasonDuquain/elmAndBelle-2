/********      STICKY HEADER    ********/

let siteHdr = document.querySelector('.site-header');
let mainHeading = document.querySelector('.large-hero__main-heading');


document.addEventListener('scroll', function() {
    let hdgBtm = mainHeading.getBoundingClientRect().bottom;
    if (hdgBtm <= 0) {
        siteHdr.classList.add('site-header--stickee');
    } else {
        siteHdr.classList.remove('site-header--stickee');
        
    }
});


/**********  HAMBURGER MENU **************/

let hamburgerIcon = document.querySelector('.site-header__menu-icon');
let navWrap = document.querySelector('.nav-wrap');

hamburgerIcon.addEventListener('click', function(e) {
    e.preventDefault();
    navWrap.classList.toggle('showIt');
    this.classList.toggle('close-icon');
    siteHdr.classList.toggle('fadeColor')
    
});


/************  HIGHLIGHT ON SCROLL  **************/

let anchs = document.querySelectorAll('.site-header__primary-nav a');
let sects = document.querySelectorAll('section:not(:first-of-type)');

document.addEventListener('scroll', function() {
    anchs.forEach(function(el, idx) {
        if (sects[idx].getBoundingClientRect().top <= 40 && sects[idx].getBoundingClientRect().bottom >= 40) {
            el.classList.add('highlight');
        } else {
            el.classList.remove('highlight');
            
        }
    });
});



/***************SLIDER TESTIMONIAL**********/

/*
 * - Declare variables
 * - Get the slide width
 * - Set the proper left value for each slide
 * - Calculate tallest slide
 * - Add the animated class to each slide
 * - Add an event listener for next button
 * - Add an event listener for previous button
 * - Add an event listener for window resize
 * - Declare a function that calculates the tallest slide
 * - Declare a function that will change the slide position
 */
var slides = document.getElementsByClassName('container__slide'),
    slider = document.getElementById('slider'),
    cursor = 0,
    slideWidth = 0,
    topHeight = 0,
    slideCount = slides.length;

if (slideCount > 0) {
    // Get the slide width
    slideWidth = slides[0].offsetWidth;

    // Set the proper left value for each slide
    for (var i = 0; i <slideCount; i++) {
        slides[i].style.left = `${slideWidth * i}px`;
    }

    // Calculate tallest slide
    calculateTallestSlide();

    // Add the animated class to each slide
    for (i = 0; i < slideCount; i++) {
        slides[i].classList.add('animated');
    }

    // Add an event listener for next button
    document.getElementById('next').addEventListener('click', (e) => {
        e.preventDefault();
        clearInterval(interval);
        
        /*only needed if the auto slide resets to 0..there is a window of time where the animated class is not there*/
        for (i = 0; i < slideCount; i++) {
            if (!slides[i].classList.contains('animated')) {
                slides[i].classList.add('animated');
            }   
        }
        
        if (cursor < slideCount -1) {
            moveSlides('forward');
            cursor++;
        }
    });

    // Add an event listener for previous button
    document.getElementById('prev').addEventListener('click', function(event) {
        event.preventDefault();
        clearInterval(interval);
        if (cursor > 0) {
            moveSlides('backward');
            cursor--;
        }
    });

    // Add event listener for window resize
    window.addEventListener('resize', function() {
        // Get the new slide width
        slideWidth = slides[0].offsetWidth;

        // Recalculate the left position of the slides
        for (i = 0; i < slides.length; i++) {
            if (i <= cursor) {
                slides[i].style.left = `-${slideWidth * (cursor - i)}px`;
            } else if (i > cursor) {
                slides[i].style.left = `${slideWidth * (i - cursor)}px`;
            }
        }

        // Recalculate the height of the tallest slide
        calculateTallestSlide();
    });
}

// Declare a function that calculates the tallest slide
function calculateTallestSlide() {
    for (var i = 0; i <slideCount; i++) {
        if (slides[i].offsetHeight > topHeight) {
            topHeight = slides[i].offsetHeight;
        }
    }
    
    slider.style.height = `${topHeight}px`;
}

// Declare a function that will change the slide position
function moveSlides(direction) {
    for (var j = 0; j < slides.length; j++) {
        if (direction == "backward") {
            slides[j].style.left = Number(slides[j].style.left.replace(/[^-\d\.]/g, '')) + slideWidth + "px";
        } else if (direction == "forward") {
            slides[j].style.left = Number(slides[j].style.left.replace(/[^-\d\.]/g, '')) - slideWidth + "px";
        }
    }
}

function moveTheSlides() {
    
    if (cursor < slideCount) {
        
     for (let k = 0; k <slideCount; k++) {
        
        if (!slides[k].classList.contains('animated')) {
            slides[k].classList.add('animated');
        }
        
     }   
        
     moveSlides('forward');
     cursor++; 
 
     }

    if (cursor === slideCount) {
        
        for (let j = 0; j <slideCount; j++) {
            slides[j].classList.remove('animated');
            slides[j].style.left = `${slideWidth * j}px`;
        }
        
        cursor = 0;

    }
    
}

let interval = setInterval(moveTheSlides, 5000);

/********FORM STYLES********/

let input = document.querySelectorAll('input, textarea, select');
          
         input.forEach((el) => {
                  el.addEventListener('focus', function() {
                  el.previousElementSibling.classList.add('input-color');
              });
             
                el.addEventListener('blur', function() {
                  el.previousElementSibling.classList.remove('input-color');
              });
          });
        
/*********** FLY IN ON SCROLL TO SECT  **********/

let svcsItems = document.querySelectorAll('.services__salon-services');

window.addEventListener('scroll', function() {
    svcsItems.forEach((el) => {

        if (el.getBoundingClientRect().top <= 400) {
           el.classList.add('js--flyIn')  
        } else {
            el.classList.remove('js--flyIn');
        }
    });
});









