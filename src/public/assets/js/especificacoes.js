let params = new URLSearchParams(location.search);
let id = params.get("id");
console.log(params)
console.log(id)

const tela = document.getElementById("tela");
const produto = cadastro.find(function (elem) {return elem.id == id});
if(produto){
    tela.innerHTML = /* html */`
    <div>
        <img src="${produto.img}" alt="Foto do aparelho">
        <p>${produto.marca} ${produto.modelo}</p>
    </div>
    <div class="specifications">
        <h2>Especificações Técnicas</h2>
        <div class="spec-item">
            <label for="bateria">Bateria:</label>
            <div class="progress-bar"><span style="width: 85%;"></span></div>
        </div>
        <div class="spec-item">
            <label for="camera">Câmera:</label>
            <div class="progress-bar"><span style="width: 95%;"></span></div>
        </div>
        <div class="spec-item">
            <label for="so">Sistema Operacional:</label>
            <div class="progress-bar"><span style="width: 90%;"></span></div>
        </div>
        <div class="spec-item">
            <label for="durabilidade">Durabilidade:</label>
            <div class="progress-bar"><span style="width: 80%;"></span></div>
        </div>
    </div>
    `
} else{
    tela.innerHTML = /* html */`
        <p>Produto não encontrado</p>
    `
}
