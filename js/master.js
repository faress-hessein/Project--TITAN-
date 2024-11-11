// handel nav bar
let nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (this.scrollY > 100) {
    nav.style.backgroundColor = "#111111eb";
    nav.style.height = "60px";
  } else {
    nav.style.backgroundColor = "";
    nav.style.height = "70px";
  }
});

// handel function menuBar
let menu = document.querySelector(".menu");
let menuBar = document.querySelector(".menuBar");
menu.onclick = function () {
  menuBar.classList.toggle("active");
};

// handel close menuBar after clicked out menu
document.addEventListener("click", (e) => {
  if (!menuBar.contains(e.target) && e.target !== menu) {
    menuBar.classList.remove("active");
  }
});

// handel fillter button
let fillterBtns = document.querySelectorAll(".OurWorks a");
let fillterBoxs = document.querySelectorAll(".OurWorks .box");
fillterBtns.forEach((fillterBtn) => {
  // handel fillter button active
  fillterBtn.addEventListener("click", (event) => {
    if (document.querySelector(".active")) {
      document.querySelector(".active").classList.remove("active");
    }
    event.target.classList.add("active");

    //  handel fillter button hide
    fillterBoxs.forEach((fillterBox) => {
      fillterBox.classList.add("hide");
      //  handel checked if fillter matched with selected
      if (
        fillterBox.dataset.name === event.target.dataset.name ||
        event.target.dataset.name === "all"
      ) {
        fillterBox.classList.remove("hide");
      }
    });
  });
});

// handel fillter button
let fillterBtnse = document.querySelectorAll(".Portfolio-module a");
let fillterBoxse = document.querySelectorAll(".Portfolio-module .box");
fillterBtnse.forEach((fillterBtn) => {
  // handel fillter button active
  fillterBtn.addEventListener("click", (event) => {
    if (document.querySelector(".active")) {
      document.querySelector(".active").classList.remove("active");
    }
    event.target.classList.add("active");

    //  handel fillter button hide
    fillterBoxse.forEach((fillterBox) => {
      fillterBox.classList.add("hide");
      //  handel checked if fillter matched with selected
      if (
        fillterBox.dataset.name === event.target.dataset.name ||
        event.target.dataset.name === "all"
      ) {
        fillterBox.classList.remove("hide");
      }
    });
  });
});

// handel btn Questions
let boxQsins = document.querySelectorAll(".boxQsin");

boxQsins.forEach((boxQsin) => {
  boxQsin.addEventListener("click", () => {
    let isActive = boxQsin.classList.contains("hide");

    boxQsins.forEach((el) => {
      el.classList.remove("hide");
    });

    if (isActive) {
      boxQsin.classList.remove("hide");
    } else {
      boxQsin.classList.add("hide");
    }
  });
});

// handel Slider
let Sliders = document.querySelectorAll(".item");
let iBtns = document.querySelectorAll(".iBtn");
currrentSlide = 1;

let manualNav = function (manual) {
  Sliders.forEach((Slider) => {
    Slider.classList.remove("active");
  });

  iBtns.forEach((iBtn) => {
    iBtn.classList.remove("active");
  });

  Sliders[manual].classList.add("active");
  iBtns[manual].classList.add("active");
};

iBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currrentSlide = i;
  });
});
