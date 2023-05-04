const openMuneAccount = document.getElementById("openMuneAccount");
const muneAccount = document.getElementById("muneAccount");
const openNav = document.querySelector(".header-main .nav-btn .hamburger");
const header = document.querySelector(".header");
const items = document.querySelector(".header-main .items-mobile");

openMuneAccount &&
  openMuneAccount.addEventListener("click", () => {
    openMuneAccount.classList.toggle("active");
    muneAccount.classList.toggle("active");
  });

openNav.addEventListener("click", () => {
  openNav.classList.toggle("is-active");
  items.classList.toggle("active");
  items.classList.toggle("scale-up-center");
});

$(window).scroll(() => {
  let windowScroll = $(window).scrollTop();
  if (windowScroll >= 150) {
    header.classList.add("header-2");
  } else {
    header.classList.remove("header-2");
  }
});

window.addEventListener("load", () => {
  let loading = document.querySelector(".loading");
  loading.classList.remove("show");
});
