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