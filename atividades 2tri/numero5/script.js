function encontrarMaior() {
    // Obter os valores dos campos de entrada
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);

    // Verificar qual é o maior valor
    var maior;

    if (valor1 > valor2) {
        maior = valor1;
    } else {
        maior = valor2;
    }

    // Exibir o maior valor
    document.getElementById("resultado").innerHTML = "O maior valor é: " + maior;
}