$(document).ready(function() {
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});



const mainButton = document.getElementById('mainButton');
const buttonMenu = document.getElementById('buttonMenu');

// Adjust the display of the button menu on button click
mainButton.addEventListener("click", () => {
    buttonMenu.style.display = buttonMenu.style.display === "block" ? "none" : "block";
});



// Get the button and input elements
const brightInput = document.getElementById("bright"); // Brightness range input
const contrastInput = document.getElementById("contrast"); // Contrast range input
const reset = document.getElementById("reset");
const sections = document.querySelectorAll(".adjustSection"); // All sections


// Handle brightness change (updates filter for each section)
brightInput.addEventListener("input", (e) => {
    const value = e.target.value;
    sections.forEach(section => {
        section.style.filter = `brightness(${value}%)`; // Apply brightness to each section
    });
    brightInput.nextElementSibling.textContent = `${value}%`; // Update the label next to the input
});

// Handle contrast change
contrastInput.addEventListener("input", (e) => {
    const value = e.target.value;
    sections.forEach(section => {
        section.style.filter = `contrast(${value}%)`; // Apply contrast to each section
    });
    contrastInput.nextElementSibling.textContent = `${value}%`; // Update the label next to the input
});


// reset brightness and contrast
reset.addEventListener("click", () => {
    sections.forEach(section => {
        section.style.filter = `brightness(100%)`;
        section.style.filter = `contrast(100%)`;
    });
    document.getElementById("bright").value = 100;
    document.getElementById("contrast").value = 100;
    document.getElementById("bright-span").textContent = `100%`;
    document.getElementById("contrast-span").textContent = `100%`;
})


// Function to update a CSS variable
function setRootVariable(variable, value) {
    document.documentElement.style.setProperty(variable, value);
}

// Example: Changing the colors for dark mode dynamically
function enableDarkMode() {
    setRootVariable("--section-title-color-dark", "#cfd8dc");
    setRootVariable("--nav-active", "rgba(0, 122, 160, 0.9)");
    setRootVariable("--body-color", "#e0e0e0");
    setRootVariable("--body-light-bg", "#2b3a4a");
    setRootVariable("--body-dark-bg", "#2A3335");
    setRootVariable("--light-text", "#f0f1f3");
    setRootVariable("--hover-text", "#5fc0d8");
    setRootVariable("--btn-blue", "#007aa0");
    setRootVariable("--footer-bg", "#181a1f");
}


// Example: Reverting to light mode dynamically
function enableLightMode() {
    setRootVariable("--section-title-color-dark", "#37474f");
    setRootVariable("--nav-active", "rgba(0,172,217, 0.7)");
    setRootVariable("--body-color", "#495057");
    setRootVariable("--body-light-bg", "#E5E1DA");
    setRootVariable("--body-dark-bg", "#B3C8CF");
    setRootVariable("--light-text", "#f0f1f3");
    setRootVariable("--hover-text", "#27778b");
    setRootVariable("--btn-blue", "#01cbff");
    setRootVariable("--footer-bg", "#2b323f");
}

// Toggle based on the user's choice
document.getElementById("darkModeToggle").addEventListener("change", function (event) {
    if (event.target.checked) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
});



const send = document.getElementById("send");
const errSend = document.getElementById("errSend");
const name = document.getElementById("name");
const email = document.getElementById("email");
const msg = document.getElementById("msg");
const popup = document.getElementById("popup");

const regex = /^[^@]+@[^@]+$/;

send.addEventListener("click", (e) => {
    e.preventDefault();

    if (name.value != "" 
    && email.value != "" 
    && msg.value != "" && regex.test(email.value)) {
      console.log("signup")
      errSend.textContent = "";
      name.value = "";
      email.value = "";
      msg.value = "";

      popup.classList.add("open-slide")
  } else if (!regex.test(email.value)) {
    console.log("enter valid email")
    errSend.textContent = "Enter valid email";
    errSend.style.color = "red";
  }
  else {
    errSend.textContent = "All fields are required";
    errSend.style.color = "red";
    console.log("all fields are required")
  }
})


function removePopup() {
    console.log("asdad")
    popup.classList.remove("open-slide")
}