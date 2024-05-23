function verificarNumero() {
    var numero = document.getElementById("numero").value;
    
    if (numero % 2 === 1) {
        document.getElementById("resultado").innerHTML = numero + " é um número ímpar.";
    } else {
        document.getElementById("resultado").innerHTML = numero + " não é um número ímpar.";
    }
}