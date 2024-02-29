
// *************************************************Form************************************************

// first Name

const outline1 = document.getElementById('outline_1');
const firstname = document.getElementById('firstname');


// foucs 
firstname.addEventListener('focus', function() {
    outline1.classList.add("outline-[#8a2be2]");
    
});

// blur
firstname.addEventListener('blur', function() {
    outline1.classList.remove("outline-[#8a2be2]");
    
});




// last Name

const outline2 = document.getElementById('outline_2');
const lastname = document.getElementById('lastname');


// foucs 
lastname.addEventListener('focus', function() {
    outline2.classList.add("outline-[#8a2be2]");
    
});

// blur
lastname.addEventListener('blur', function() {
    outline2.classList.remove("outline-[#8a2be2]");
    
});



// Mail 

const outline3 = document.getElementById('outline_3');
const Email = document.getElementById('email');


// foucs 
Email.addEventListener('focus', function() {
    outline3.classList.add("outline-[#8a2be2]");
   
});

// blur
Email.addEventListener('blur', function() {
    outline3.classList.remove("outline-[#8a2be2]");
    
});



// Phone Number

const outline4 = document.getElementById('outline_4');
const phone = document.getElementById('phone');


// foucs 
phone.addEventListener('focus', function() {
    outline4.classList.add("outline-[#8a2be2]");
    
});

// blur
phone.addEventListener('blur', function() {
    outline4.classList.remove("outline-[#8a2be2]");
    
});




// select 

const outline5 = document.getElementById('outline_5');
const select = document.getElementById('select');


// foucs 
select.addEventListener('focus', function() {
    outline5.classList.add("outline-[#8a2be2]");

});

// blur
select.addEventListener('blur', function() {
    outline5.classList.remove("outline-[#8a2be2]");

});


// Messages

const outline6 = document.getElementById('outline_6');
const msg = document.getElementById('msg');


// foucs 
msg.addEventListener('focus', function() {
    outline6.classList.add("outline-[#8a2be2]");

});

// blur
msg.addEventListener('blur', function() {
    outline6.classList.remove("outline-[#8a2be2]");

});



