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


const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(contactForm);
    const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        alert("Thank you for your message!");
        contactForm.reset(); // Clear the form
    } else {
        alert("Oops! There was a problem submitting your form");
    }
});
