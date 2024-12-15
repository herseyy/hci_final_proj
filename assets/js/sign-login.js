const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  window.location.href = "index.html";
});



const loginBtn = document.getElementById("login");
const usernameLogin = document.getElementById("usernameLogin");
const passwordLogin = document.getElementById("passwordLogin");
const loginErr = document.getElementById("loginErr");

const signupBtn = document.getElementById("signup");
const usernameSignup = document.getElementById("usernameSignup");
const emailSignup = document.getElementById("emailSignup");
const passwordSignup = document.getElementById("passwordSignup");
const signupErr = document.getElementById("signupErr");

const popup = document.getElementById("popup");
const popupH2 = document.getElementById("popupH2");
const popupP = document.getElementById("popupP");
const popupBtn = document.getElementById("popupBtn");
const regex = /^[^@]+@[^@]+$/;

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (usernameLogin.value != "" && passwordLogin.value != "") {
    loginErr.textContent = "";
    usernameLogin.value = "";
    passwordLogin.value = "";

    popupH2.textContent = "Logged In!"
    popupP.textContent = "Your credentials have been verified!"
    popupBtn.textContent = "Done"
    popup.classList.add("open-slide")
  } else {
    loginErr.textContent = "All fields are required";
    loginErr.style.color = "red";
    console.log("all fields are required")
  }
})




signupBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (usernameSignup.value != "" 
    && passwordSignup.value != "" 
    && emailSignup.value != "" && regex.test(emailSignup.value)) {
      console.log("signup")
      signupErr.textContent = "";
      usernameSignup.value = "";
      emailSignup.value = "";
      passwordSignup.value = "";

      popup.classList.add("open-slide")
  } else if (!regex.test(emailSignup.value)) {
    console.log("enter valid email")
    signupErr.textContent = "Enter valid email";
    signupErr.style.color = "red";
  }
  else {
    signupErr.textContent = "All fields are required";
    signupErr.style.color = "red";
    console.log("all fields are required")
  }
})

function login() {
  location.reload();
}
