const imgFile = document.getElementById("file-img"),
  imgUser = document.getElementById("img-user"),
  nameUser = document.getElementById("name-user"),
  updateName = document.getElementById("update-name"),
  emailUser = document.getElementById("email-user"),
  updateEmail = document.getElementById("update-email"),
  submitBtn = document.getElementById("submitBtn"),
  strengthBar = document.querySelector(".strength-bar"),
  strengthType = document.querySelector(".strength-type"),
  strengthText = document.querySelector(".strength-text"),
  passwordStrength = document.querySelector(".password-strength"),
  newPassword = document.getElementById("new-password"),
  oldPassword = document.getElementById("old-password"),
  openResetPassword = document.getElementById("open-reset_password"),
  resetPassword = document.querySelector(".reset-password"),
  closeResetPassword = document.getElementById("close-reset_password");

let valueName = nameUser.value;
let valueEmail = emailUser.value;
let valueOldPassword = "";
let valueNewPassword = "";

const uploadImg = (e) => {
  let file = e.files[0];
  let types = [
    "image/png",
    "image/avif",
    "image/svg",
    "image/svg+xml",
    "image/webp",
    "image/jpg",
    "image/jpeg",
  ];

  if (types.indexOf(file.type) == -1) {
    alert("Type not Supported");
    return;
  } else {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      imgUser.src = reader.result;
      console.log(reader.result);
    };
    reader.onerror = () => {
      alert("Error !!");
    };
  }
};

const changeName = (e) => {
  if (valueName == e) {
    $(updateName).fadeOut(200);
    nameUser.style.paddingRight = "15px";
  } else {
    $(updateName).fadeIn(200);
    nameUser.style.paddingRight = "150px";
  }
};

const changeEmail = (e) => {
  if (valueEmail == e) {
    $(updateEmail).fadeOut(200);
    emailUser.style.paddingRight = "15px";
  } else {
    $(updateEmail).fadeIn(200);
    emailUser.style.paddingRight = "175px";
  }
};

openResetPassword.addEventListener("click", () => {
  resetPassword.style.display = "block";
  document.querySelector("body").style.height = "100vh"
  document.querySelector("body").style.overflow = "hidden"
});

closeResetPassword.addEventListener("click", () => {
  resetPassword.style.display = "none";
  document.querySelector("body").style.height = "100%"
  document.querySelector("body").style.overflow = "auto"
});

const checkPassword = (e) => {
  valueOldPassword = e;
  if (e.length < 8) {
    submitBtn.disabled = true;
  }
  if (e.length >= 8 && e.length < 12) {
    submitBtn.disabled = false;
    checkPassword2(valueNewPassword);
  }
};

const checkPassword2 = (e) => {
  valueNewPassword = e;
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
    checkPassword(valueOldPassword);
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
  if (oldPassword.type == "password") {
    e.className = "fa-solid fa-eye";
    oldPassword.type = "text";
  } else {
    e.className = "fa-solid fa-eye-slash";
    oldPassword.type = "password";
  }
};

const eye2 = (e) => {
  if (newPassword.type == "password") {
    e.className = "fa-solid fa-eye";
    newPassword.type = "text";
  } else {
    e.className = "fa-solid fa-eye-slash";
    newPassword.type = "password";
  }
};
