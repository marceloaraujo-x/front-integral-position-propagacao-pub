const imgs = document.querySelectorAll(".div img");
const imgModal = document.querySelector(".modal img");
const modal = document.querySelector(".modal");


function abrirModal(src) {
    imgModal.src = src;
    modal.style.display = "flex"
}
imgs.forEach(img => {
    img.addEventListener("click", function (event) {
        abrirModal(event.target.src);
    })
})
modal.addEventListener("click", function () {
    modal.style.display = "none"
})