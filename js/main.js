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
