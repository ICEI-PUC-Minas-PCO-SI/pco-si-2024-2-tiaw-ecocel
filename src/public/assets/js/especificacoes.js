let params = new URLSearchParams(location.search);
let id = params.get("id");

const tela = document.getElementById("tela");

fetch("http://localhost:3000/produtos/"+id)
    .then(response => response.json())
    .then(produto => {
            tela.innerHTML = /* html */`
        <div>
            <img src="${produto.imagem}" alt="Foto do aparelho">
            <p>${produto.marca} ${produto.modelo}</p>
        </div>
        <div class="specifications">
            <h2>Especificações Técnicas</h2>
            <div class="spec-item">
                <label for="bateria">Bateria:</label>
                <span>${produto.bateria}</span>
            </div>
            <div class="spec-item">
                <label for="camera">Câmera:</label>
                <span>${produto.camera}</span>
            </div>
            <div class="spec-item">
                <label for="so">Sistema Operacional:</label>
                <span>${produto.sistema_operacional}</span>
            </div>
            <div class="spec-item">
                <label for="so">Ano:</label>
                <span>${produto.ano}</span>
            </div>
            <div class="spec-item">
            <label for="so">Preço:</label>
            <span>${produto.preco}</span>
        </div>
        </div>
        `
    })
    .catch(error => {
        console.error('Erro ao ler produto via API JSONServer:', error);
        tela.innerHTML = /* html */`
        <p>Produto não encontrado</p>`
    });