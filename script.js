var calc = document.getElementById("num");
var tab = document.getElementById("flista");
var valor = [];

function adicionar() {
    var n = Number(calc.value);
    if (n > 0 && n < 100 && !valor.includes(n)) { // Verifica se o número é válido e não está na lista
        valor.push(n); // Adiciona o número ao array
        var option = document.createElement('option'); // Cria um novo elemento <option>
        option.text = `Valor ${n} adicionado`; // Define o texto do <option> como o número
        tab.add(option); // Adiciona o <option> ao elemento <select>
        calc.value = ''; // Limpa o campo de entrada
        calc.focus(); // Opcional: coloca o foco novamente no campo de entrada
    } else if (valor.includes(n)) {
        alert("Número já adicionado."); // Opcional: alerta se o número já estiver na lista
    } else {
        alert("Por favor, insira um número entre 1 e 99."); // Alerta para entrada inválida
    }
}

function finalizar() {
    var res = document.getElementById("res");
    res.innerHTML = ''; // Limpa o conteúdo anterior

    if (valor.length > 0) {
        var total = valor.reduce((acc, val) => acc + val, 0); // Calcula a soma dos números
        var media = total / valor.length; // Calcula a média dos números
        res.innerHTML = `Total: ${total}<br>Média: ${media.toFixed(2)}`; // Exibe o total e a média
    } else {
        res.innerHTML = 'Nenhum número foi adicionado.'; // Mensagem caso nenhum número tenha sido adicionado
    }
}
