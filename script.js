function filtrarProdutos(cor) {

    const produtos = document.querySelectorAll(".produto");
    const botoes = document.querySelectorAll(".filtro");

    // Remove o destaque de todos os botões
    botoes.forEach(function(botao) {
        botao.classList.remove("ativo");
    });

    // Encontra o botão que foi clicado
    const botaoSelecionado = document.querySelector(
        '.filtro[data-cor="' + cor + '"]'
    );

    // Coloca o destaque no botão selecionado
    if (botaoSelecionado) {
        botaoSelecionado.classList.add("ativo");
    }

    // Filtra os produtos
    produtos.forEach(function(produto) {

        if (cor === "todos") {
            produto.style.display = "block";
        }

        else if (produto.dataset.cor === cor) {
            produto.style.display = "block";
        }

        else {
            produto.style.display = "none";
        }

    });

}
