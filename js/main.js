
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




