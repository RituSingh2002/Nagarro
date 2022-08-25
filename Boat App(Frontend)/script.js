const slides = document.querySelectorAll(".carousel-item");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
let currentSlide = 0;

leftBtn.addEventListener("click", () => {
  goToSlide(currentSlide - 1);
  clearInterval(slideInterval);
});

rightBtn.addEventListener("click", () => {
  goToSlide(currentSlide + 1);
  clearInterval(slideInterval);
});

function goToSlide(slideNo) {
  slideNo = slideNo < 0 ? slides.length - 1 : slideNo;
  slideNo = slideNo >= slides.length ? 0 : slideNo;
  slides[currentSlide].classList.remove("active");
  slides[slideNo].classList.add("active");
  currentSlide = slideNo;
}
const slideInterval = setInterval(() => {
  goToSlide(currentSlide + 1);
}, 3000);

 

const msInterval = setInterval(() => {
    document.querySelector('.milisecond').innerText = 1000-new Date().getMilliseconds();
}, 1);