let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    
    // Hide all images
    slides.forEach(slide => slide.style.display = "none");

    // Move to the next slide
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Loop back to first slide

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("fade"); // Add fade effect

    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Start the slideshow when the page loads
document.addEventListener("DOMContentLoaded", showSlides);
