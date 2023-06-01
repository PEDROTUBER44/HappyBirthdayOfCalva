document.addEventListener("DOMContentLoaded", function (event) {
    var minhaDiv = document.querySelector("canvas");

    setTimeout(function () {
        minhaDiv.classList.add("escondido");
    }, 7000); // 7000ms = 7 segundos
});