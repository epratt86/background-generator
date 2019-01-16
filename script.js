console.log("Background Gradient Generator");
const gradient = document.querySelector("#gradient");
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const currentColors = document.querySelector("#currentColors");
const btn = document.querySelector(".btn");

function setGradient() {
  // update background color
  gradient.style.background = `linear-gradient(to right, ${color1.value}, ${
    color2.value
  }`;
  // update h3 text value
  currentColors.textContent = gradient.style.background;
}

function randomColorGenerator() {
  let random1 = Math.floor(Math.random() * 16777215).toString(16);
  let random2 = Math.floor(Math.random() * 16777215).toString(16);

  gradient.style.background = `linear-gradient(to right, #${random1}, #${random2})`;
  // update h3 text value
  currentColors.textContent = gradient.style.background;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", randomColorGenerator);
