function calcularReajuste() {
    // Obtém o valor do saldo atual do input
    var saldoAtual = parseFloat(document.getElementById('saldoInput').value);

    // Verifica se o valor inserido é um número válido
    if (!isNaN(saldoAtual)) {
        // Calcula o saldo com o reajuste de 1%
        var saldoReajustado = saldoAtual * 1.01;

        // Exibe o saldo com o reajuste na página
        document.getElementById('resultado').innerHTML = "O saldo com reajuste de 1% é: " + saldoReajustado.toFixed(2);
    } else {
        // Se o valor inserido não for um número válido, exibe uma mensagem de erro
        document.getElementById('resultado').innerHTML = "Por favor, insira um número válido para o saldo.";
    }
}