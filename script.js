let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let h1 = document.querySelector("h1");

window.addEventListener("DOMContentLoaded", () => {
  document.body.style.backgroundColor = getRandomColor();
  input.placeholder = document.body.style.backgroundColor;
});

input.addEventListener("focus", () => {
  input.placeholder = "Write a Color to Change";
});

btn.addEventListener("click", changeBG);

function changeBG() {
  let bgColor = input.value;
  if (bgColor) {
    document.body.style.backgroundColor = bgColor;
    input.value = "";

    if (
      document.body.style.backgroundColor === "black" ||
      document.body.style.backgroundColor === "#000" ||
      document.body.style.backgroundColor === "rgb(0, 0, 0)"
    ) {
      h1.style.color = "#fff";
      btn.style.backgroundColor = "#fff";
      btn.style.color = "#000";
    } else {
      h1.style.color = "#000";
      btn.style.backgroundColor = "#000";
      btn.style.color = "#fff";
    }
  } else {
    document.body.style.backgroundColor = getRandomColor();
    input.placeholder = document.body.style.backgroundColor;
    if (
      document.body.style.backgroundColor === "black" ||
      document.body.style.backgroundColor === "#000" ||
      document.body.style.backgroundColor === "rgb(0, 0, 0)"
    ) {
      h1.style.color = "#fff";
      btn.style.backgroundColor = "#fff";
      btn.style.color = "#000";
    } else {
      h1.style.color = "#000";
      btn.style.backgroundColor = "#000";
      btn.style.color = "#fff";
    }
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
