const HomepageQuiz = document.getElementById('homepage-quiz');
const HomepageTickets = document.getElementById('homepage-tickets')

HomepageTickets.addEventListener('click', () => {
    if(document.cookie.includes('lang=en')) {
        window.location.href = 'https://www.lamlisse.nl/en/tickets/';
    } else {
        window.location.href = 'https://www.lamlisse.nl/tickets/';
    }
});

HomepageQuiz.addEventListener('click', () => {
    window.location.href = '/quiz'
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

