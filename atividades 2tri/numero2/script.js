document.getElementById("calcularBtn").addEventListener("click", function() {
    calcularPrecoTotal();
});

function calcularPrecoTotal() {
    var valorQuilo = parseFloat(document.getElementById("valor_quilo").value);
    var quantidadeQuilos = parseFloat(document.getElementById("quantidade_quilos").value);

    if (isNaN(valorQuilo) || isNaN(quantidadeQuilos) || valorQuilo < 0 || quantidadeQuilos < 0) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos para o valor do quilo e a quantidade de quilos.";
        return;
    }

    var precoTotal = valorQuilo * quantidadeQuilos;
    document.getElementById("resultado").innerText = "O preço total é R$ " + precoTotal.toFixed(2);
}