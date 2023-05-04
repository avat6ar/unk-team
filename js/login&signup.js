const strengthBar = document.querySelector(".strength-bar"),
  strengthType = document.querySelector(".strength-type"),
  strengthText = document.querySelector(".strength-text"),
  submitBtn = document.getElementById("submitBtn"),
  passwordStrength = document.querySelector(".password-strength"),
  passwordInput = document.getElementById("passwordInput"),
  emailInput = document.getElementById("emailInput"),
  nameInput = document.getElementById("nameInput");
let valuePass = "",
  valueEmail = "",
  valueName = "";
const errLogin = document.getElementById("errLogin");

errLogin && setInterval(() => $(errLogin).fadeOut(500) , 2500)

const password = (e) => {
  valuePass = e;
  if (passwordStrength) {
    e.length > 0
      ? (passwordStrength.style.display = "block")
      : (passwordStrength.style.display = "none");
    if (e.length < 8) {
      submitBtn.disabled = true;
      strengthBar.className = "strength-bar strength-bar--weak";
      strengthType.innerHTML = `<span class="weak">weak</span>`;
      strengthText.innerHTML = `This password is easy to guess. Please <strong>use at least 8 characters.</strong>`;
    }
    if (e.length >= 8 && e.length < 12) {
      submitBtn.disabled = false;
      cheackValue(valueEmail, valuePass, valueName);
      strengthBar.className = "strength-bar strength-bar--fair";
      strengthType.innerHTML = `<span class="fair">fair</span>`;
      strengthText.innerHTML = `Although you can use this password, Please <strong>using more than 12 characters will make it more secure.</strong>`;
    }
    if (e.length > 12) {
      strengthBar.className = "strength-bar strength-bar--strong";
      strengthType.innerHTML = `<span class="strong">strong</span>`;
      strengthText.innerHTML = `Your password is excellent. You are good to go!`;
    }
  }
};
const passwordLogIn = (e) => {
  console.log(e);
  valuePass = e;
  if (e.length < 8) {
    submitBtn.disabled = true;
  } else if (e.length >= 8) {
    submitBtn.disabled = false;
    cheackValue(valueEmail, valuePass, valueName);
  }
};
const nameUser = (e) => {
  if (nameInput) {
    valueName = e;
    if (e.length == 0) {
      submitBtn.disabled = true;
    } else if (e.length >= 4) {
      submitBtn.disabled = false;
      cheackValue(valueEmail, valuePass, valueName);
    }
  }
};
const eye = (e) => {
  if (passwordInput.type == "password") {
    e.className = "fa-solid fa-eye";
    passwordInput.type = "text";
  } else {
    e.className = "fa-solid fa-eye-slash";
    passwordInput.type = "password";
  }
};
const checkEmail = (e) => {
  valueEmail = e;
  if (
    !emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
    cheackValue(valueEmail, valuePass, valueName);
  }
};
const cheackValue = (e, y, x) => {
  if (valueEmail.length === 0) {
    checkEmail(e);
  }
  if (valuePass.length < 8) {
    passwordLogIn(y);
    password(y);
  }
  if (valueName.length < 4) {
    nameUser(x);
  }
};
