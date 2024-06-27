let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

function autoSlide() {
    slideIndex++;
    if (slideIndex > document.getElementsByClassName("slide").length) {
        slideIndex = 1;
    }
    showSlides(slideIndex);
    setTimeout(autoSlide, 3000); // Change slide every 5 seconds
}

autoSlide(); // Start automatic slide show
