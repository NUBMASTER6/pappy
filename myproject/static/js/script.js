// static/js/script.js

// The text to display with typing effect
const text = "We will be here soon.";
const typingSpeed = 100; // Typing speed in milliseconds

let index = 0;

// Function to type the text
function typeText() {
    if (index < text.length) {
        document.getElementById("typing-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed); // Call the function again after delay
    }
}

// Call the function to start typing when the page loads
window.onload = typeText;
