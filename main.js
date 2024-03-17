let currentIndex;
let slides;
let carouselInner;
let slideWidth;

window.onload = function() {
  carouselInner = document.querySelector('.carousel-inner');
  slides = Array.from(carouselInner.children);
  slideWidth = carouselInner.offsetWidth;
  currentIndex = 0;

}

  function nextSlide() {
    if (currentIndex === slides.length - 1) {
      currentIndex = 0;
      carouselInner.stylelet.transition = 'none';
      carouselInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      setTimeout(() => {
        carouselInner.style.transition = 'transform 0.6s ease-in-out';
      }, 10);
    } else {
      currentIndex++;
      carouselInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  }

  function prevSlide() {
    if (currentIndex === 0) {
      currentIndex = slides.length - 1;
      carouselInner.style.transition = 'none';
      carouselInner.style.transform = `translateX(- current${currentIndex * slideWidth}px)`;
      setTimeout(() => {
        carouselInner.style.transition = 'transform 0.6s ease-in-out';
      }, 10);
    } else {
      currentIndex--;
      carouselInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  }

