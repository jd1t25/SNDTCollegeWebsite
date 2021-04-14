
var slides=document.querySelector('.slider__items').children;
var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}

function next(direction){

   if(direction=="next"){
      index++;
       if(index==totalSlides){
        index=0;
       }
   } 
   else{
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");     

}


// Btn Ham

const btnHamburger = document.querySelector('#btnHam');
const header = document.querySelector('.header__hammenu');

btnHamburger.addEventListener('click', function(){
     console.log('click hamburger');
   
     if(header.classList.contains('open')){ // Close Hamburger Menu
       /* body.classList.remove('noscroll'); */
       header.classList.remove('open');    
       /* fadeElems.forEach(function(element){
         element.classList.remove('fade-in');
         element.classList.add('fade-out');
       }); */
       
     }
     else { // Open Hamburger Menu
      /*  body.classList.add('noscroll'); */
       header.classList.add('open');
       /* fadeElems.forEach(function(element){
         element.classList.remove('fade-out');
         element.classList.add('fade-in');
       }); */
   
     }  
   });





   //----------------------
   /*
 * Cascade Slider v.1.0.0
 * ----------------------------------------------------- */
   var bg = document.querySelector('.item-bg');
   var items = document.querySelectorAll('.news__item');
   var item = document.querySelector('.news__item');
   
   function cLog(content) {
       console.log(content)
   }
   
   if($(window).width() > 800) {
       $(document).on("mouseover", ".news__item", function (_event, _element) {
   
           var newsItem = document.querySelectorAll('.news__item');
           newsItem.forEach(function (element, index) {
               element.addEventListener('mouseover', function () {
                   var x = this.getBoundingClientRect().left;
                   var y = this.getBoundingClientRect().top;
                   var width = this.getBoundingClientRect().width;
                   var height = this.getBoundingClientRect().height;
   
                   $('.item-bg').addClass('active');
                   $('.news__item').removeClass('active');
                   // $('.news__item').removeClass('active');
   
   
                   bg.style.width = width + 'px';
                   bg.style.height = height + 'px';
                   bg.style.transform = 'translateX(' + x + 'px ) translateY(' + 50 + 'px)';
               });
   
               element.addEventListener('mouseleave', function () {
                   $('.item-bg').removeClass('active');
                   $('.news__item').removeClass('active');
               });
   
           });
   
       });
   }
   
   
   var swiper = new Swiper('.news-slider', {
       effect: 'coverflow',
       grabCursor: true,
       loop: true,
       centeredSlides: true,
       keyboard: true,
       spaceBetween: 0,
       slidesPerView: 'auto',
       speed: 300,
       coverflowEffect: {
           rotate: 0,
           stretch: 0,
           depth: 0,
           modifier: 3,
           slideShadows: false
       },
       breakpoints: {
           480: {
               spaceBetween: 0,
               centeredSlides: true
           }
       },
       simulateTouch: true,
       navigation: {
           nextEl: '.news-slider-next',
           prevEl: '.news-slider-prev'
       },
       pagination: {
           el: '.news-slider__pagination',
           clickable: true
       },
       on: {
           init: function () {
               var activeItem = document.querySelector('.swiper-slide-active');
   
               var sliderItem = activeItem.querySelector('.news__item');
   
               $('.swiper-slide-active .news__item').addClass('active');
   
               var x = sliderItem.getBoundingClientRect().left;
               var y = sliderItem.getBoundingClientRect().top;
               var width = sliderItem.getBoundingClientRect().width;
               var height = sliderItem.getBoundingClientRect().height;
   
   
               $('.item-bg').addClass('active');
   
               bg.style.width = width + 'px';
               bg.style.height = height + 'px';
               bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
           }
       }
   });
   
   swiper.on('touchEnd', function () {
       $('.news__item').removeClass('active');
       $('.swiper-slide-active .news__item').addClass('active');
   });
   
   swiper.on('slideChange', function () {
       $('.news__item').removeClass('active');
   });
   
   swiper.on('slideChangeTransitionEnd', function () {
       $('.news__item').removeClass('active');
       var activeItem = document.querySelector('.swiper-slide-active');
   
       var sliderItem = activeItem.querySelector('.news__item');
   
       $('.swiper-slide-active .news__item').addClass('active');
   
       var x = sliderItem.getBoundingClientRect().left;
       var y = sliderItem.getBoundingClientRect().top;
       var width = sliderItem.getBoundingClientRect().width;
       var height = sliderItem.getBoundingClientRect().height;
   
   
       $('.item-bg').addClass('active');
   
       bg.style.width = width + 'px';
       bg.style.height = height + 'px';
       bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
   });



