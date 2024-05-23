function calcularMedias() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    
    // Média aritmética
    var mediaAritmetica = (num1 + num2 + num3) / 3;
    
    // Média ponderada
    var mediaPonderada = (num1*3 + num2*2 + num3*5) / (3 + 2 + 5);
    
    // Soma das duas médias
    var somaDasMedias = mediaAritmetica + mediaPonderada;
    
    // Média das médias
    var mediaDasMedias = (mediaAritmetica + mediaPonderada) / 2;
    
    // Exibir resultados
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<strong>Resultados:</strong><br>" +
                             "Média Aritmética: " + mediaAritmetica + "<br>" +
                             "Média Ponderada: " + mediaPonderada + "<br>" +
                             "Soma das Médias: " + somaDasMedias + "<br>" +
                             "Média das Médias: " + mediaDasMedias;
}