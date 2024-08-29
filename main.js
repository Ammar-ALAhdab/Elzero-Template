let megaMenu = document.getElementsByClassName("mega-menu");
let scrollToUp = document.querySelector(".up");

// For Showing & Hiding  MegaMenu
document.body.onclick = function () {
  if (document.activeElement.className === "other-links")
    megaMenu[0].classList.toggle("show-mega");
  else megaMenu[0].classList.remove("show-mega");
};

// For Showing & Hiding Scroll To Up Button
window.onscroll = function () {
  if (this.scrollY >= 2800) {
    scrollToUp.classList.add("show-up");
  } else {
    scrollToUp.classList.remove("show-up");
  }
};

scrollToUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
