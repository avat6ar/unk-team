const submitBtn = document.getElementById("submitBtn"),
  strengthBar = document.querySelector(".strength-bar"),
  strengthType = document.querySelector(".strength-type"),
  strengthText = document.querySelector(".strength-text"),
  passwordStrength = document.querySelector(".password-strength"),
  passwordInput = document.getElementById("passwordInput");

const checkPassword = (e) => {
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
    strengthBar.className = "strength-bar strength-bar--fair";
    strengthType.innerHTML = `<span class="fair">fair</span>`;
    strengthText.innerHTML = `Although you can use this password, Please <strong>using more than 12 characters will make it more secure.</strong>`;
  }
  if (e.length > 12) {
    strengthBar.className = "strength-bar strength-bar--strong";
    strengthType.innerHTML = `<span class="strong">strong</span>`;
    strengthText.innerHTML = `Your password is excellent. You are good to go!`;
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
