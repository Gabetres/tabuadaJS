function gerarTabuada() {
    var numero = parseInt(document.querySelector("#numero").value);
    var tabela = document.querySelector("#tabela-tabuada");


    tabela.innerHTML = ""

    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i
        var linha = "<tr><td>" + numero + " x " + i + " = " + resultado + "</td></tr>"
        tabela.innerHTML += linha
    }

    tabela.style.display = "inline";

}
