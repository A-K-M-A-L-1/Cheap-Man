function passport() {
  const fileInput = document.getElementById('fileInput_passport');
  const front = document.getElementById('front_passport');
  const back = document.getElementById('back_passport');





  // Front Side

  // Check if a file is selected
  if (fileInput.files.length > 0) {
    // Display the selected file name
    front.textContent = fileInput.files[0].name;
    front.classList.add("outline-[#8a2be2]")

    // Create a span element
    const span = document.createElement('span');

    // Create an img element
    const img = document.createElement('img');
    img.src = "../assets/Delete file.png";
    img.className = "cursor-pointer";
    img.alt = "";

    // Attach click event listener to the image
    img.addEventListener('click', function () {
      // Clear the content of the front element
      front.textContent = 'Front';
      front.classList.remove("outline-[#8a2be2]");
    });

    // Append the img element to the span element
    span.appendChild(img);

    // Append the span element to the front element
    front.appendChild(span);
  } else {
    // If no file is selected, clear the content of the front element
    front.textContent = 'Front';
  }


  //   Back Side

  // Check if a file is selected
  if (fileInput.files.length > 1) {
    // Display the selected file name
    back.textContent = fileInput.files[1].name;
    back.classList.add("outline-[#8a2be2]")

    // Create a span element
    const span = document.createElement('span');

    // Create an img element
    const img = document.createElement('img');
    img.src = "../assets/Delete file.png";
    img.className = "cursor-pointer";
    img.alt = "";

    // Attach click event listener to the image
    img.addEventListener('click', function () {
      // Clear the content of the front element
      back.textContent = 'Back';
      back.classList.remove("outline-[#8a2be2]");
    });

    // Append the img element to the span element
    span.appendChild(img);

    // Append the span element to the front element
    back.appendChild(span);
  } else {
    // If no file is selected, clear the content of the front element
    back.textContent = 'Back';
  }





}


//   CNIC

function usercnic() {
  const cfileInput = document.getElementById('fileInput_cnic');
  const cfront = document.getElementById('front_cnic');
  const cback = document.getElementById('back_cnic');

  // Front Side

  // Check if a file is selected
  if (cfileInput.files.length > 0) {
    // Display the selected file name
    cfront.textContent = cfileInput.files[0].name;
    cfront.classList.add("outline-[#8a2be2]");

    // Create a span element
    const span = document.createElement('span');

    // Create an img element
    const img = document.createElement('img');
    img.src = "../assets/Delete file.png";
    img.className = "cursor-pointer";
    img.alt = "";

    // Attach click event listener to the image
    img.addEventListener('click', function () {
      // Clear the content of the front element
      cfront.textContent = 'Front';
      cfront.classList.remove("outline-[#8a2be2]");
    });

    // Append the img element to the span element
    span.appendChild(img);

    // Append the span element to the front element
    cfront.appendChild(span);
  } else {
    // If no file is selected, clear the content of the front element
    cfront.textContent = 'Front';
  }


  //   Back Side

  // Check if a file is selected
  if (cfileInput.files.length > 1) {
    // Display the selected file name
    cback.textContent = cfileInput.files[1].name;
    cback.classList.add("outline-[#8a2be2]");

    // Create a span element
    const span = document.createElement('span');

    // Create an img element
    const img = document.createElement('img');
    img.src = "../assets/Delete file.png";
    img.className = "cursor-pointer";
    img.alt = "";

    // Attach click event listener to the image
    img.addEventListener('click', function () {
      // Clear the content of the front element
      cback.textContent = 'Back';
      cback.classList.remove("outline-[#8a2be2]");
    });

    // Append the img element to the span element
    span.appendChild(img);

    // Append the span element to the front element
    cback.appendChild(span);
  } else {
    // If no file is selected, clear the content of the front element
    cback.textContent = 'Back';
  }





}




//   Person

function person() {
  const pfileInput = document.getElementById('fileInput_person');
  const pfront = document.getElementById('front_person');


  // Front Side

  // Check if a file is selected
  if (pfileInput.files.length > 0) {
    // Display the selected file name
    pfront.textContent = pfileInput.files[0].name;
    pfront.classList.add("outline-[#8a2be2]")

    // Create a span element
    const span = document.createElement('span');

    // Create an img element
    const img = document.createElement('img');
    img.src = "../assets/Delete file.png";
    img.className = "cursor-pointer";
    img.alt = "";

    // Attach click event listener to the image
    img.addEventListener('click', function () {
      // Clear the content of the front element
      pfront.textContent = 'Your Picture';
      pfront.classList.remove("outline-[#8a2be2]")
    });

    // Append the img element to the span element
    span.appendChild(img);

    // Append the span element to the front element
    pfront.appendChild(span);
  } else {
    // If no file is selected, clear the content of the front element
    pfront.textContent = 'Your Picture';
  }



}



