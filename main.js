var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
   showSlides(slideIndex += n);
}

function currentSlide(n) {
   showSlides(slideIndex = n);
}

function showSlides(n) {
  var  i;
  var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
  if (n >  slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex  = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none"; 
    }
     for (i = 0; i < dots.length; i++) {
      dots[i].className  = dots[i].className.replace(" active", "");
    }
   slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className  += " active";
} 



mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function  scrollFunction() {
  if (document.body.scrollTop > 800 ||  document.documentElement.scrollTop > 800) {
     mybutton.style.display = "block";
  } else {
     mybutton.style.display  = "none";
  }
}

function topFunction() {
   document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
} 
function myFunction() {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
     x.className += " responsive";
   } else {
     x.className = "topnav";
   }
 }
