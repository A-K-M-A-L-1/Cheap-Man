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


