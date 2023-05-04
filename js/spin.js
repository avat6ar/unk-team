const wheel = document.querySelector(".spin .wheel");
const submitSpin = document.getElementById("submit-span");
const price = document.getElementById("price");
const coins = document.getElementById("coins");
const selectType = document.getElementById("select-type");
const spinBtn = document.querySelector(".spin-btn");

let value = 360;
let spinNumber;
let typeToken = "offline";
let coinsUser = 10000000;
let priceSpin = 50000;
let type = true;

$("#submit-span").submit(function(event) {
  event.preventDefault();
  wheel.style.transform = "rotate(" + value + "deg)";
  var formData = $(this).serialize();
  $.ajax({
    type: "POST",
    url: "/spinpost",
    data: formData,
    success: function(response) {
      spinNumber = response.win
      submitBtn()
    },
    error: function() {
      console.log("err");
    },
  });
});





function submitBtn() {
  if ((coinsUser >= priceSpin) & (type == true) & (spinNumber !== undefined)) {
    if (spinNumber == 800) {
      value = 360 * 7 - (Math.floor(Math.random() * 22) - 12);
    }
    if (spinNumber == 250) {
      value = 360 * 7 - (Math.floor(Math.random() * 22) + 12);
    }
    if (spinNumber == 300) {
      value = 360 * 7 - (Math.floor(Math.random() * 22) + 34);
    }
    if (spinNumber == 2000) {
      value = 360 * 7 - (Math.floor(Math.random() * 22) + 57);
    }
    if (spinNumber == 400) {
      value = 360 * 7 - (Math.floor(Math.random() * 22) + 80);
    }
    if (spinNumber == 700) {
      value = 360 * 7 - (Math.floor(Math.random() * 22) + 72);
    }
    if (spinNumber == 500) {
      value = 360 * 7 - (Math.floor(Math.random() * 22) + 124);
    }
    if (spinNumber == 600) {
      value = 360 * 7 - (Math.floor(Math.random() * 22) + 148);
    }
    if (spinNumber == 350) {
      value = 360 * 7 - (Math.floor(Math.random() * 22) + 169);
    }
    if (spinNumber == 200) {
      value = 360 * 7 - (Math.floor(Math.random() * 22) + 192);
    }
    if (spinNumber == 900) {
      value = 360 * 7 - (Math.floor(Math.random() * 22) + 214);
    }
    if (spinNumber == 700) {
      value = 360 * 7 - (Math.floor(Math.random() * 22) + 236);
    }
    if (spinNumber == 150) {
      value = 360 * 7 - (Math.floor(Math.random() * 22) + 260);
    }
    if (spinNumber == 450) {
      value = 360 * 7 - (Math.floor(Math.random() * 22) + 282);
    }
    if (spinNumber == 550) {
      value = 360 * 7 - (Math.floor(Math.random() * 22) + 305);
    }
    if (spinNumber == 1500) {
      value = 360 * 7 - (Math.floor(Math.random() * 22) + 327);
    }
    wheel.style.transform = "rotate(" + value + "deg)";
    selectType.disabled = true;
    type = false;
    spinBtn.disabled = true;
    setTimeout(() => {
      swal({
        icon: "success",
        title: `${spinNumber} ${typeToken}`,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nam.",
      }).then(() => {
        wheel.style.transitionDuration = "0s";
        wheel.style.transform = "rotate(0deg)";
        setTimeout(() => {
          wheel.style.transitionDuration = "5s";
        }, 1);
        confetti.stop();
      });
      confetti.start();
      setTimeout(() => {
        confetti.stop();
      }, 5000);
      setCoinsUser();
      selectType.disabled = false;
      type = true;
      spinBtn.disabled = false;
    }, 5500);
    coinsUser -= priceSpin;
  }
  if (type == false) {
    return;
  } else {
    coins.style.color = "#ff0505";
    wheel.classList.add("error");
    $("#error").fadeIn(500);
    setTimeout(() => {
      wheel.classList.remove("error");
      coins.style.color = "#222529";
      $("#error").fadeOut(500);
    }, 1500);
  }
}

const changeType = (e) => {
  type && (typeToken = e);
  if (e == "online") {
    price.innerHTML = 70000;
    priceSpin = 70000;
  }
  if (e == "offline") {
    price.innerHTML = 50000;
    priceSpin = 50000;
  }
};

const setCoinsUser = () => {
  coins.innerHTML = coinsUser;
};
setCoinsUser();
