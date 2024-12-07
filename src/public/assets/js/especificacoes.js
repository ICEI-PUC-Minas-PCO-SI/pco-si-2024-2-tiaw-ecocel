const cadastro = data[0].produtos;

let params = new URLSearchParams(location.search);
let id = params.get("id");
console.log(params)
console.log(id)

const tela = document.getElementById("tela");
const produto = cadastro.find(function (elem) {return elem.id == id});
if(produto){
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
} else{
    tela.innerHTML = /* html */`
        <p>Produto não encontrado</p>
    `
}
