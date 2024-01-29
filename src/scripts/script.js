
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










