const text = "Hello, iam abanoub maqqar...";
const el = document.getElementById("typing");

let index = 0;
const speed = 80; // ms

function typeMessage() {
  if (index < text.length) {
    el.textContent += text[index];
    index++;
    setTimeout(typeMessage, speed);
  }
}

typeMessage();
