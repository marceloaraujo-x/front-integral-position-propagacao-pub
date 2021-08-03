const img = document.querySelector(".position-relative img");
const input = document.querySelector(".position-relative input");


img.addEventListener("click", function (event) {

    if (img.src.includes("fechado")) {
        img.src = "./assets/olho-aberto.svg"
        input.type = "text"
    } else {
        img.src = "./assets/olho-fechado.svg"
        input.type = "password"
    }
})

