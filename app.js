
// Função para carregar os produtos na página
function carregarProdutos() {
    const listaProdutos = document.getElementById("products-list");
    listaProdutos.innerHTML = '';

    produtos.forEach((produto, index) => {
        const item = document.createElement("div");
        item.classList.add("product-item");
        item.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>ID/Nome: ${produto.id}</p>
            <p>R$ ${produto.preco.toFixed(2)}</p>
          `;
        listaProdutos.appendChild(item);
    });
}

// Função para adicionar um novo produto
document.getElementById("product-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("product-name").value;
    const preco = parseFloat(document.getElementById("product-price").value);
    const id = document.getElementById("product-id").value;

    const novoProduto = { nome, preco, id };
    produtos.push(novoProduto);

    carregarProdutos(); // Recarrega a lista de produtos

    // Limpar os campos do formulário
    document.getElementById("product-form").reset();
});

// Função para remover um produto
function removerProduto(index) {
    produtos.splice(index, 1);
    carregarProdutos(); // Recarrega a lista de produtos
}
