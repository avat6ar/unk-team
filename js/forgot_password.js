const submitBtn = document.getElementById("submitBtn");
const checkEmail = (e) => {
  if (!e.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
};