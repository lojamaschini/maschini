function filtrarProdutos(cor) {

    // Pega todos os produtos da loja
    const produtos = document.querySelectorAll(".produto");

    // Pega todos os botões de filtro
    const botoes = document.querySelectorAll(".filtro");

    // Remove o destaque de todos os botões
    botoes.forEach(function(botao) {
        botao.classList.remove("ativo");
    });

    // Coloca destaque no botão escolhido
    const botaoSelecionado = document.querySelector(
        '.filtro[data-cor="' + cor + '"]'
    );

    if (botaoSelecionado) {
        botaoSelecionado.classList.add("ativo");
    }

    // Filtra os produtos
    produtos.forEach(function(produto) {

        // Se escolheu "Todos", mostra tudo
        if (cor === "todos") {

            produto.style.display = "block";

        }

        // Se a cor do produto for igual à escolhida, mostra
        else if (produto.dataset.cor === cor) {

            produto.style.display = "block";

        }

        // Caso contrário, esconde
        else {

            produto.style.display = "none";

        }

    });
}
