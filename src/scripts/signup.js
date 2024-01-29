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


// Password

const fivthlable = document.getElementById('fivthlable');

document.getElementById('password').addEventListener('focus', () => {

    fivthlable.classList.add("-translate-y-5");

});

document.getElementById('password').addEventListener('blur', () => {
    const inputField = fivthlable.nextElementSibling;

    if (inputField.value === "") {
        fivthlable.classList.remove("-translate-y-5");
    }
});


// Confirm Password

const six = document.getElementById('six');

document.getElementById('confirmpassword').addEventListener('focus', () => {

    six.classList.add("-translate-y-5");

});

document.getElementById('confirmpassword').addEventListener('blur', () => {
    const inputField = six.nextElementSibling;

    if (inputField.value === "") {
        six.classList.remove("-translate-y-5");
    }
});


