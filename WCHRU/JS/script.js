let slideIndex = 0;
const textContent = [
  "WOMEN AND CHILDREN IN HEALTH",
  "AND RESOURCE UTILIZATION",
];

function typeWriter(text, element, delay = 400, callback) {
  element.innerHTML = ""; // Clear the current text
  const words = text.split(" "); // Split text into words
  let wordIndex = 0;

  function typeNextWord() {
    if (wordIndex < words.length) {
      element.innerHTML += (wordIndex > 0 ? " " : "") + words[wordIndex]; // Add word
      wordIndex++;
      setTimeout(typeNextWord, delay);
    } else if (callback) {
      callback();
    }
  }

  typeNextWord();
}

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  const textElement = document.querySelector(".hero-title");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; // Loop back to the first slide
  }

  slides[slideIndex - 1].style.display = "block"; // Show current slide

  if (slideIndex === 1) {
    // Animate text only on the first slide
    typeWriter(textContent.join(" "), textElement, 400, () => {
      setTimeout(showSlides, 5000); // Proceed to the next slide after delay
    });
  } else {
    // Show static text on other slides
    textElement.innerHTML = textContent.join(" ");
    setTimeout(showSlides, 5000); // Proceed to the next slide after delay
  }
}

// Start the slideshow
showSlides();

