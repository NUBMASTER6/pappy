const text = "Скоро...";
const typingSpeed = 150; // Adjust speed if needed
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("coming-soon-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, typingSpeed);
  }
}

window.onload = typeWriter;
