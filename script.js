let btn = document.getElementById('menu-btn');
let menu = document.getElementById('menu');

// Add event listener to the menu button
btn.addEventListener('click', navToggle);

// Add event listeners to each navigation link in the menu
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
        // Close the menu when a link is clicked
        btn.classList.remove('open');
        menu.classList.remove('flex');
        menu.classList.add('hidden');
    });
});

// Toggle the 'open' class on the button and toggle between 'flex' and 'hidden' classes on the menu
function navToggle() {
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
let currentIndex = 0;
const images = document.querySelectorAll('.image-container');

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'flex';
    } else {
      image.style.display = 'none';
    }
  });
}

function handleRightClick() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function handleLeftClick() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

const rightButton = document.getElementById('right');
const leftButton = document.getElementById('left');

rightButton.addEventListener('click', handleRightClick);
leftButton.addEventListener('click', handleLeftClick);

// Initial setup
showImage(currentIndex);


////////////////////////////////////////////////////////////////////////////////////////////////////

// Contact Btn

const contactBtn = document.getElementById('contact');

contactBtn.addEventListener("click", (e) => {

    window.location.replace("contact.html")


})

const contactBtn1 = document.getElementById('contact1');

contactBtn1.addEventListener("click", (e) => {

    window.location.replace("contact.html")


})


// Contact Section




// const ids = ["firstname", "Lastname", "mail", "phonenumber", "msg"]


// first lable

const firstlable = document.getElementById('firstlable');

document.getElementById('firstname').addEventListener('focus', () => {

    firstlable.classList.add("-translate-y-5");

});

document.getElementById('firstname').addEventListener('blur', () => {
    const inputField = firstlable.nextElementSibling;

    if (inputField.value === "") {
        firstlable.classList.remove("-translate-y-5");
    }
});


// lastname

const lastname = document.getElementById('secondlable');

document.getElementById('lastname').addEventListener('focus', () => {

    secondlable.classList.add("-translate-y-5");

});

document.getElementById('lastname').addEventListener('blur', () => {
    const inputField = secondlable.nextElementSibling;

    if (inputField.value === "") {
        secondlable.classList.remove("-translate-y-5");
    }
});


// Mail 

const thirdlable = document.getElementById('thirdlable');

document.getElementById('mail').addEventListener('focus', () => {

    thirdlable.classList.add("-translate-y-5");

});

document.getElementById('mail').addEventListener('blur', () => {
    const inputField = thirdlable.nextElementSibling;

    if (inputField.value === "") {
        thirdlable.classList.remove("-translate-y-5");
    }
});


// Phone Number

const forthlable = document.getElementById('forthlable');

document.getElementById('phonenumber').addEventListener('focus', () => {

    forthlable.classList.add("-translate-y-5");

});

document.getElementById('phonenumber').addEventListener('blur', () => {
    const inputField = forthlable.nextElementSibling;

    if (inputField.value === "") {
        forthlable.classList.remove("-translate-y-5");
    }
});


// Messages

const fivthlable = document.getElementById('fivthlable');

document.getElementById('msg').addEventListener('focus', () => {

    fivthlable.classList.add("-translate-y-5");

});

document.getElementById('msg').addEventListener('blur', () => {
    const inputField = fivthlable.nextElementSibling;

    if (inputField.value === "") {
        fivthlable.classList.remove("-translate-y-5");
    }
});






