function identificarProduto() {
    var codigo = document.getElementById("codigo").value;
    var resultado = document.getElementById("resultado");

    if (codigo === "001") {
        resultado.textContent = "Parafuso";
    } else if (codigo === "002") {
        resultado.textContent = "Porca";
    } else if (codigo === "003") {
        resultado.textContent = "Prego";
    } else {
        resultado.textContent = "Diversos";
    }
}