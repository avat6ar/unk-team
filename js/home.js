let c4Izmir = document.querySelectorAll(".c4-izmir");
if (window.matchMedia("(max-width: 1024px)").matches) {
  window.onscroll = () => {
    if (window.scrollY > 1046) {
      c4Izmir.forEach((item) => item.classList.add("hover"));
    }
  };
} else {
  c4Izmir.forEach((item) => item.classList.remove("hover"));
}
if (window.matchMedia("(max-width: 768px)").matches) {
  window.onscroll = () => {
    if (window.scrollY > 1687) {
      c4Izmir.forEach((item) => item.classList.add("hover"));
    }
  };
} else {
  c4Izmir.forEach((item) => item.classList.remove("hover"));
}
if (window.matchMedia("(max-width: 600px)").matches) {
  window.onscroll = () => {
    if (window.scrollY > 2432) {
      c4Izmir[0].classList.add("hover");
    }
    if (window.scrollY > 2717) {
      c4Izmir[1].classList.add("hover");
    }
    if (window.scrollY > 2940) {
      c4Izmir[2].classList.add("hover");
    }
    if (window.scrollY > 3220) {
      c4Izmir[3].classList.add("hover");
    }
    if (window.scrollY > 3550) {
      c4Izmir[4].classList.add("hover");
    }
  };
} else {
  c4Izmir.forEach((item) => item.classList.remove("hover"));
}
