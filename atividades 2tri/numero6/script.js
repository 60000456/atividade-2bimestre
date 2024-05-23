function encontrarMenor() {
    // Obtendo os valores dos inputs
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);
    var numero4 = parseFloat(document.getElementById("numero4").value);
  
    // Encontrando o menor valor
    var menor = numero1;
    if (numero2 < menor) {
      menor = numero2;
    }
    if (numero3 < menor) {
      menor = numero3;
    }
    if (numero4 < menor) {
      menor = numero4;
    }
  
    // Exibindo o resultado
    document.getElementById("resultado").innerText = "O menor valor é: " + menor;
  }