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


})


// Dashboard
const dashboard = document.querySelectorAll("#dashboard")

dashboard.forEach((items) => {

  items.addEventListener("click", (e) => {

    window.location.href = "dashboard.html"

  })


  const textDashboard = document.getElementsByClassName("text-dashboard");

  textDashboard[0].classList.remove("text-zinc-500")
  textDashboard[0].classList.add("text-[#3472B8]")

  textDashboard[1].classList.remove("text-zinc-500")
  textDashboard[1].classList.add("text-[#3472B8]")

  textDashboard[2].classList.remove("text-white")
  textDashboard[2].classList.add("text-[#000]")

  // For changing the Svgs color 
  const svgsSpan = document.getElementsByClassName("svg-two");

  svgsSpan[0].children[0].children[0].setAttribute('fill', '#3472B8')
  svgsSpan[1].children[0].children[0].setAttribute('fill', '#3472B8')
  svgsSpan[2].children[0].children[0].setAttribute('fill', '#000')




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

// ************************************************************************************************************************
const Listings = document.getElementById("listings");

const Tbody = document.getElementById("tbody");


Listings.innerText = `${Tbody.children.length}`