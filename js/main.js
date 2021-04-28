var slides = document.querySelector(".slider__items").children;
var nextSlide = document.querySelector(".right-slide");
var prevSlide = document.querySelector(".left-slide");
var totalSlides = slides.length;
var index = 0;

nextSlide.onclick = function () {
  next("next");
};
prevSlide.onclick = function () {
  next("prev");
};

function next(direction) {
  if (direction == "next") {
    index++;
    if (index == totalSlides) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

// Btn Ham

const btnHamburger = document.querySelector("#btnHam");
const header = document.querySelector(".header__hammenu");

btnHamburger.addEventListener("click", function () {
  console.log("click hamburger");

  if (header.classList.contains("open")) {
    // Close Hamburger Menu
    /* body.classList.remove('noscroll'); */
    header.classList.remove("open");
    /* fadeElems.forEach(function(element){
         element.classList.remove('fade-in');
         element.classList.add('fade-out');
       }); */
  } else {
    // Open Hamburger Menu
    /*  body.classList.add('noscroll'); */
    header.classList.add("open");
    /* fadeElems.forEach(function(element){
         element.classList.remove('fade-out');
         element.classList.add('fade-in');
       }); */
  }
});

//===================News=======================

$(document).ready(function () {
  $("#news-slider").owlCarousel({
    items: 2,
    navigation: true,
    navigationText: ["", ""],
    autoPlay: true,
  });
});

//===================Events=======================

$(document).ready(function () {
  $("#events-slider").owlCarousel({
    items: 3,
    navigation: true,
    navigationText: ["", ""],
    autoPlay: true,
  });
});

//===================FAQ=======================
var elementOld = null;
var openClass = "Accordion__tab--open";

function toggleAccordion(element) {
  content = element.querySelector(".Accordion__tab__content");

  if (elementOld != null) {
    elementOld.classList.remove(openClass);
    contentOld = elementOld.querySelector(".Accordion__tab__content");
    contentOld.style.maxHeight = "0px";
  }

  if (elementOld !== element) {
    element.classList.add(openClass);
    content.style.maxHeight = content.scrollHeight + "px";
    elementOld = element;
  } else {
    elementOld = null;
  }
}

//===================Gallery=======================

// buttons
const gprev = document.querySelector(".prev");
const gnext = document.querySelector(".next");
const closeCur = document.querySelector(".close");

// modal
const modalContent = document.querySelector(".modal-content");
const gslides = Array.from(document.querySelectorAll(".my-slides"));
const gcolumns = document.querySelectorAll(".column");
const gdemo = Array.from(document.querySelectorAll(".demo"));

// text
const numberText = document.querySelectorAll(".my-slides--number");
const captionText = document.getElementById("caption");

// img on page
const hoverShadows = Array.from(document.querySelectorAll(".hover-shadow"));

let slideIndex;
let translate = 0;
let columnWidth;

// if window resize reset all values
window.addEventListener("resize", () => {
  columnWidth = gcolumns[0].offsetWidth;
  gcolumns.forEach((el) => {
    el.style.transform = `translateX(0)`;
  });
  slideIndex = 1;
  translate = 0;
  showSlides(slideIndex);
});

// buttons action

gprev.addEventListener("click", () => {
  if (slideIndex === 1) return false;
  plusSlides(-1);
  if (translate === 0) return null;
  translate += columnWidth + 4;
  gcolumns.forEach((el) => {
    el.style.transform = `translateX(${translate}px)`;
  });
});

gnext.addEventListener("click", () => {
  if (gdemo.length + 1 === 1) return false;
  plusSlides(1);
  if (translate === -(gcolumns.length - 3) * (columnWidth + 4)) return null;
  translate -= columnWidth + 4;
  gcolumns.forEach((el) => {
    el.style.transform = `translateX(${translate}px)`;
  });
});
closeCur.addEventListener("click", () => closeModal());

// add click to main img to trigger open carousel

hoverShadows.forEach((el, i) => {
  el.addEventListener("click", () => {
    openModal();
    currentSlide(i + 1);
  });
});

// add click thumbnails to show curent slide

gdemo.forEach((el, i) => {
  el.addEventListener("click", () => currentSlide(i + 1));
});

// Open modal

function openModal() {
  document.getElementById("myModal").style.display = "block";
  columnWidth = gcolumns[0].offsetWidth;
  showAndClose();
  numberText.forEach((el, id) => {
    el.innerHTML = `${id + 1} / ${numberText.length}`;
  });
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
  let x = n - 3 < 0 ? 0 : n - 3;
  translate = -(columnWidth + 4) * x;
  gcolumns.forEach((el) => {
    el.style.transform = `translateX(${translate}px)`;
  });
}

// control showing slides

function showSlides(n) {
  let i;
  showAndClose();
  for (i = 0; i < gslides.length; i++) {
    gslides[i].style.display = "none";
  }
  for (i = 0; i < gdemo.length; i++) {
    gdemo[i].classList.remove("active");
  }
  gslides[slideIndex - 1].style.display = "block";
  gdemo[slideIndex - 1].classList.add("active");
  captionText.innerHTML = gdemo[slideIndex - 1].alt;
}

// control buttons if reach to limit left or right

function showAndClose() {
  if (slideIndex === 1) {
    gprev.style.display = "none";
  } else {
    gprev.style.display = "block";
  }

  if (slideIndex === gdemo.length) {
    gnext.style.display = "none";
  } else {
    gnext.style.display = "block";
  }
}

// Navbar

$(document).ready(function () {
  var stickyNavTop = 302;

  var stickyNav = function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
      $(".nav-container").addClass("sticky");
    } else {
      $(".nav-container").removeClass("sticky");
    }
  };

  stickyNav();

  $(window).scroll(function () {
    stickyNav();
  });
});
