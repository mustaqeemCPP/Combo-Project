
// Hamburger Menu for mobile & Tablet view

// Variable declaration
const hamButton = document.querySelector('.hamburger-button');
let navDisp = document.querySelector('.nav-links-mb');

// Adding event to the hamburger button
hamButton.addEventListener('click', sideBar);

// Function to toggle the side bar display
function sideBar() {
    if (navDisp.style.display == 'flex') {
        navDisp.style.display = 'none';
    } else {
        navDisp.style.display = 'flex';
    }
}
// End of Hamburger menu

// Media query for image slider in review section

let sliderWidth1 = window.matchMedia('(min-width: 1012px)');
let sliderWidth2 = window.matchMedia('(min-width: 510px) and (max-width: 768px)');
let sliderWidth3 = window.matchMedia('(max-width: 500px)');

// Attach a change listener to confirm the viewport width
sliderWidth1.addEventListener('change', sliderVp1);
sliderWidth2.addEventListener('change', sliderVp1);
sliderWidth3.addEventListener('change', sliderVp1);

// Variable declaration for the buttons on image slider
const imageSlider = document.querySelector('.slider-container');
const nxtBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.previous')
const numberOfImages = document.querySelectorAll('.slider-container .sect6-col').length -1;
let imageIndex = 1;
let changeView = 0;

// Call the function containing event listeners at run time
sliderVp1();

// Function to slide the images based on viewport size
function sliderVp1() {
    
    if (sliderWidth1.matches) {
        nxtBtn.addEventListener('click', nxtImage);
        prevBtn.addEventListener('click', prvImage);

    } else if (sliderWidth2.matches) {
        nxtBtn.addEventListener('click', nxtImage2);
        prevBtn.addEventListener('click', prvImage2);

    } else if (sliderWidth3.matches) {
        nxtBtn.addEventListener('click', nxtImage3);
        prevBtn.addEventListener('click', prvImage3);
       }
};

// Image slider buttons for Desktop & Laptop

// function for next button
function nxtImage () {
    if (imageIndex !== numberOfImages) {
        changeView -= 400;
        imageIndex ++;
    } else {
        return;
    };

    imageSlider.style.transform = `translateX(${changeView}px)`;
};

// function for previous button
function prvImage () {
    if (imageIndex !== 1) {
        changeView += 400;
        imageIndex --;

    } else {
        return;
    }
    imageSlider.style.transform = `translateX(${changeView}px)`;

}

// Image slider buttons for Tablet view

// function for next button
function nxtImage2 () {
    if (imageIndex !== numberOfImages) {
        changeView -= 500;
        imageIndex ++;
    } else {
        return;
    };

    imageSlider.style.transform = `translateX(${changeView}px)`;

};

//function for previous button
function prvImage2 () {
    if (imageIndex !== 1) {
        changeView += 500;
        imageIndex --;
    } else {
        return;
    }

    imageSlider.style.transform = `translateX(${changeView}px)`;
}

// Image slider buttons for mobile view

//function for next button
function nxtImage3 () {
    if (imageIndex !== 8) {
        changeView -= 415;
        imageIndex ++;
        // alert(numberOfImages);
    } else {
        return;
    };

    imageSlider.style.transform = `translateX(${changeView}px)`;

};

//function for previous button
function prvImage3 () {
    if (imageIndex !== 1) {
        changeView += 415;
        imageIndex --;

    } else {
        return;
    }

    imageSlider.style.transform = `translateX(${changeView}px)`;

}