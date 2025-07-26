const btn = document.getElementById("btn");
const vid = document.getElementById("vid");

btn.addEventListener("click", () => {
    vid.style.display = "block";
  vid.play();
});