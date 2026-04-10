console.log("Portfolio loaded");

// simple typing effect
const role = document.querySelector(".role");
const text = "Instrument & Control Engineer";
let index = 0;

function typeEffect() {
if (index < text.length) {
role.textContent += text.charAt(index);
index++;
setTimeout(typeEffect, 50);
}
}

role.textContent = "";
typeEffect();
