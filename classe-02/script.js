const modal = document.querySelector(".modal");
const img = document.querySelector(".img");

img.addEventListener("click", function (event) {
    modal.classList.toggle("escondido")
})