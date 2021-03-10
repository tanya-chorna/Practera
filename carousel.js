var slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('slidedot');
    console.log(slides);
    console.log(dots);
        for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    console.log(dots[slideIndex-1].className);
    setTimeout(showSlides, 4000); // Change image every 2 seconds
  }
  
showSlides();