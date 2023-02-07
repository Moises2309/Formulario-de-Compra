let slideIndex = 1;
showSlides(slideIndex);

function showSlides() {
    let i;
    let slides = document.querySelectorAll(".imgSlide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

    let j
    let dots = document.querySelectorAll('.pagination')
    for (j=0; j < dots.length; j++) {
        dots[j].classList.remove('active')
    }
    dots[slideIndex - 1].classList.add('active')
}

function currentSlide(n) {
    showSlides((slideIndex = n))
}