// Get the current date
const currentDate = new Date();

// Define an array for days of the week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Define an array for months
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

// Get the day, month, and year from the current date
const dayOfWeek = daysOfWeek[currentDate.getDay()];
const dayOfMonth = currentDate.getDate();
const month = months[currentDate.getMonth()];
const year = currentDate.getFullYear();

// Create the formatted date string
const formattedDate = `<div>${dayOfWeek}, ${dayOfMonth} ${month} ${year}</div> <div><img src="../assets/downarr.png" alt=""></div>`;

// Display the formatted date in the specified element
document.getElementById("datePlaceholder").innerHTML = formattedDate;

//***********************************************************************************************************

// Profile
const profile = document.querySelectorAll("#profile")

profile.forEach((items) => {

    items.addEventListener("click", (e) => {

        window.location.href = "profile.html"
    })


    const textProfile = document.getElementsByClassName("text-profile");

    textProfile[0].classList.remove("text-zinc-500")
    textProfile[0].classList.add("text-[#3472B8]")

    textProfile[1].classList.remove("text-zinc-500")
    textProfile[1].classList.add("text-[#3472B8]")

    textProfile[2].classList.remove("text-white")
    textProfile[2].classList.add("text-[#000]")

    // For changing the Svgs color 
    const svgsSpan = document.getElementsByClassName("svg-one");

    svgsSpan[0].children[0].children[0].setAttribute('fill', '#3472B8')
    svgsSpan[1].children[0].children[0].setAttribute('fill', '#3472B8')
    svgsSpan[2].children[0].children[0].setAttribute('fill', '#000')



})



// Dashboard
const dashboard = document.querySelectorAll("#dashboard")

dashboard.forEach((items) => {

    items.addEventListener("click", (e) => {

        window.location.href = "dashboard.html"

    })


})



// LogOut

const Logout = document.querySelectorAll("#logout")

Logout.forEach((items) => {

  items.addEventListener("click", (e) => {

    const textLogout = document.getElementsByClassName("text-logout");

    textLogout[0].classList.remove("text-[#3472B8]")
    textLogout[0].classList.add("text-zinc-500")
  
    textLogout[1].classList.remove("text-[#3472B8]")
    textLogout[1].classList.add("text-zinc-500")
  
    textLogout[2].classList.remove("text-[#3472B8]")
    textLogout[2].classList.add("text-white")
  
    // For changing the Svgs color 
    const svgsSpan = document.getElementsByClassName("svg-three");
  
    svgsSpan[0].children[0].children[0].setAttribute('fill', '#3472B8')
    svgsSpan[1].children[0].children[0].setAttribute('fill', '#3472B8')
    svgsSpan[2].children[0].children[0].setAttribute('fill', '#000')


    window.location.href = "login.html"





  })

  

})







//***********************************************************************************************************

const passcode = document.getElementById("passcode");
const span = document.getElementById("eye");

span.addEventListener("click", () => {
    if (passcode.getAttribute('type') === "password") {
        passcode.setAttribute('type', "text");
        span.innerHTML = `<img src="../assets/svg/openeye.svg" class="cursor-pointer absolute left-[12rem] md:left-44 -top-1" alt="" id="openeye">`;
    } else {
        passcode.setAttribute('type', "password");
        span.innerHTML = `<img src="../assets/svg/closeeye.svg" class="cursor-pointer absolute left-[12rem] md:left-44 -top-1 " alt="" id="openeye">`;
    }
});


