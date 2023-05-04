const inputs = document.querySelectorAll(".verification .form-control"),
  verification = document.getElementById("verification"),
  countdownElement = document.getElementById("countdown"),
  postData = document.getElementById("postData"),
  getData = document.getElementById("getData");
inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input,
      nextInput = input.nextElementSibling,
      prevInput = input.previousElementSibling;

    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }
    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }
    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", true);
          currentInput.value = "";
          prevInput.focus();
        }
      });
    }
    if (!inputs[3].disabled && inputs[3].value !== "") {
      verification.disabled = false;
    } else verification.disabled = true;
  });
});

window.addEventListener("load", () => inputs[0].focus());

const countDown = (duration) => {
  let minites, seconds;
  const ava = setInterval(() => {
    duration--;
    if (duration > 0) {
      minites = parseInt(duration / 60);
      seconds = parseInt(duration % 60);
      minites = minites < 10 ? `0${minites}` : minites;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      countdownElement.innerHTML = `${minites}:${seconds}`;
      postData.value = duration;
      getData.value = duration;
    } else {
      postData.value = 0;
      getData.value = 0;
      countdownElement.innerHTML = `<button class="btn">Send Code</button>`;
    }
  }, 1000);
};

countDown(getData.value)