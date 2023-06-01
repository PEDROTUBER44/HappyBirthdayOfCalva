document.addEventListener("DOMContentLoaded", function (event) {
    var minhaDiv = document.getElementById("imagem1");

    setTimeout(function () {
        minhaDiv.classList.add("imagem1escondida");
    }, 8000); // 8000ms = 8 segundos
});