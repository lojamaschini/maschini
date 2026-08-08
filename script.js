function filtrarProdutos(cor) {

    const produtos = document.querySelectorAll(".produto");
    const botoes = document.querySelectorAll(".filtro");

    // Remove o destaque dos botões
    botoes.forEach(function(botao) {
        botao.classList.remove("ativo");
    });

    // Destaca o botão selecionado
    const botaoSelecionado = document.querySelector(
        `.filtro[data-cor="${cor}"]`
    );

    if (botaoSelecionado) {
        botaoSelecionado.classList.add("ativo");
    }

    // Mostra ou esconde os produtos
    produtos.forEach(function(produto) {

        if (cor === "todos" || produto.dataset.cor === cor) {
            produto.style.display = "block";
        } else {
            produto.style.display = "none";
        }

    });
}
