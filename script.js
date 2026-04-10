let currentSlide = 0;

function getSlides() {
return document.querySelectorAll(".slide");
}

function showSlide(index) {
const slides = getSlides();
slides.forEach((slide, i) => {
slide.classList.remove("active");
if (i === index) slide.classList.add("active");
});
}

function nextSlide() {
const slides = getSlides();
currentSlide = (currentSlide + 1) % slides.length;
showSlide(currentSlide);
}

function prevSlide() {
const slides = getSlides();
currentSlide = (currentSlide - 1 + slides.length) % slides.length;
showSlide(currentSlide);
}

/* AUTO SLIDE */
setInterval(nextSlide, 3000);
