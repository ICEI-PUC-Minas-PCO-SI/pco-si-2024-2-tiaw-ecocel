const cadastro = data[0].produtos;
console.log(cadastro)


// teste requisição do json
/*fetch('db/db.JSON').then(res => res.json())
.then(json => { console.log(json)
})

async function carregarProdutos() {
    try {
        const response = await fetch('db/db.json'); // Carrega o arquivo JSON
        const data = await response.json();
        produtos = data.produtos || []; // Assumindo que os produtos estão na chave "produtos"
    } catch (error) {
        console.error('Erro ao carregar produtos do JSON:', error);
    }
}

carregarProdutos(); // Chamada inicial para carregar produtos do JSON*/

//Chama as funções para carregar os cards na pagina
loadFavoritos();
loadCards(cadastro);

// Ativando a busca ao clicar no botao
const btnSearch = document.getElementById("search-btn");
btnSearch.addEventListener('click', searchProducts);

// Ativando a busca ao pressionar Enter
const searchBar = document.getElementById("nav-search-bar");
searchBar.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        searchProducts();
    };
});

// Retorna os produtos de acordo com o que foi digitado na barra de pesquisa
function searchProducts() {

    let valorBusca = searchBar.value;
    valorBusca = valorBusca.toLowerCase();
    document.getElementById("products-container").innerHTML = "";
    let newCadastro = [];

    for (let i = 0; i < cadastro.length; i++) {
        // Pega a marca e modelo do cadastro e coloca tudo minusculo para comparar com o valor buscado, que também esta em minusculo
        let nome = cadastro[i].marca + " " + cadastro[i].modelo;
        nome = nome.toLowerCase();

        if (nome.indexOf(valorBusca) != -1) {
            newCadastro.push(cadastro[i]);
        };
    };

    if (newCadastro.length != 0) {
        loadCards(newCadastro);
    } else {
        document.getElementById("products-container").innerHTML = `<p><strong>
                                                                        <span>Oops...</span>
                                                                        <br>
                                                                        <span>Nenhum produto encontrado.</span>
                                                                    </strong></p>`
    };
};

// Cria os card com os dados do json
function loadCards(products) {
    const gridContainer = document.getElementById('products-container');
    const saibaMaisLink = "especificacoes.html";

    products.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        // Define o conteúdo do card com as informações do JSON
        card.innerHTML = `
          <img src="${item.imagem}" alt="${item.marca + " " + item.modelo}" />
          <div class="product-card__description">
            <div class="product-card__text">${item.marca + " " + item.modelo}</div>
            <div class="product-card__price"><strong>R$${item.preco}</strong></div>
            <div class="fav" id="fav-${item.id}">
              <span class="material-symbols-outlined">favorite</span>
            </div>
            <a href="${saibaMaisLink}?id=${item.id}" class="about">Saiba mais</a>
          </div>
        `;

        gridContainer.appendChild(card);

        // Define a cor do botão de favorito com base no estado salvo
        const favButton = card.querySelector(`#fav-${item.id}`);
        favButton.style.color = item.favorito ? 'red' : 'black';

        // Adiciona o event listener ao botão "fav" para alternar o favorito
        favButton.addEventListener('click', () => {
            item.favorito = !item.favorito;

            favButton.style.color = item.favorito ? 'red' : 'black';

            updateLocalStorage();
        });
    });
};

// Função para carregar os estados de favorito do localStorage
function loadFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || {};
    cadastro.forEach(item => {
        if (favoritos[item.id]) {
            item.favorito = true;
        };
    });
};

// Função para atualizar o localStorage quando um item é marcado como favorito
function updateLocalStorage() {
    const favoritos = {};
    cadastro.forEach(item => {
        favoritos[item.id] = item.favorito;
    });
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
};

// Filtro de pesquisa
function setupRatingSystem() {
    const ratings = document.querySelectorAll('.rating');

    ratings.forEach(rating => {
        rating.addEventListener('click', function (event) {
            const value = event.target.getAttribute('data-value');
            setRating(rating, value);
        });
    });
}

function setRating(ratingElement, value) {
    const stars = ratingElement.querySelectorAll('.star');
    ratingElement.setAttribute('data-rating', value);

    stars.forEach(star => {
        if (star.getAttribute('data-value') <= value) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function filtrar() {
    document.getElementById("products-container").innerHTML = "";

    const marca = document.getElementById('marca').value;
    const camera = document.getElementById('camera').value;
    const bateria = document.getElementById('bateria').value;
    const preco = parseInt(document.getElementById('preco').value);
    const armazenamento = document.getElementById('armazenamento').value;
    const sistema_operacional = document.getElementById('sistema_operacional').value;
    const favoritos = document.getElementById('favoritos').checked;

    const resultados = cadastro.filter(celular => {
        return (
            (!marca || celular.marca.toLowerCase() == marca.toLowerCase()) &&
            (!camera || celular.camera == camera) &&
            (!bateria || celular.bateria == bateria) &&
            (!preco || celular.preco <= preco) &&
            (!armazenamento || celular.armazenamento <= armazenamento) &&
            (!sistema_operacional || celular.sistema_operacional <= sistema_operacional) &&
            (!favoritos || celular.favorito == true)
        );
    });
    console.log(resultados)

    if(resultados.length != 0){
        loadCards(resultados);
    } else {
        document.getElementById("products-container").innerHTML = `<p><strong>
                                                                        <span>Oops...</span>
                                                                        <br>
                                                                        <span>Nenhum produto encontrado.</span>
                                                                    </strong></p>`
    };
}

document.addEventListener('DOMContentLoaded', () => {
    setupRatingSystem();
});

// Preenche as opções de filtro
filtroMarca()
filtroBateria()
filtroCamera()
filtroSistema_operacional()
filtroArmazenamento()

function filtroMarca(){
    const select_marca = document.getElementById("marca");
    let uniqueMarca = [];

    for(let i=0; i<cadastro.length; i++){
        let marca = cadastro[i].marca;
        if(uniqueMarca.indexOf(marca)==-1 && marca!= ""){
            let newOption = document.createElement("option");
            newOption.classList.add("marca-option");
            newOption.value = marca;
            newOption.innerText = marca;

            select_marca.appendChild(newOption);
            uniqueMarca.push(marca);
        }
    }
}

function filtroCamera(){
    const select_camera = document.getElementById("camera");
    let uniquecamera = [];

    for(let i=0; i<cadastro.length; i++){
        let camera = cadastro[i].camera;
        if(uniquecamera.indexOf(camera)==-1  && camera!= ""){
            let newOption = document.createElement("option");
            newOption.classList.add("camera-option");
            newOption.value = camera;
            newOption.innerText = camera;

            select_camera.appendChild(newOption);
            uniquecamera.push(camera);
        }
    }
}

function filtroBateria(){
    const select_bateria = document.getElementById("bateria");
    let uniquebateria = [];

    for(let i=0; i<cadastro.length; i++){
        let bateria = cadastro[i].bateria;
        if(uniquebateria.indexOf(bateria)==-1  && bateria!= ""){
            let newOption = document.createElement("option");
            newOption.classList.add("bateria-option");
            newOption.value = bateria;
            newOption.innerText = bateria;

            select_bateria.appendChild(newOption);
            uniquebateria.push(bateria);
        }
    }
}

function filtroSistema_operacional(){
    const select_sistema_operacional = document.getElementById("sistema_operacional");
    let uniquesistema_operacional = [];

    for(let i=0; i<cadastro.length; i++){
        let sistema_operacional = cadastro[i].sistema_operacional;
        if(uniquesistema_operacional.indexOf(sistema_operacional)==-1  && sistema_operacional!= ""){
            let newOption = document.createElement("option");
            newOption.classList.add("sistema_operacional-option");
            newOption.value = sistema_operacional;
            newOption.innerText = sistema_operacional;

            select_sistema_operacional.appendChild(newOption);
            uniquesistema_operacional.push(sistema_operacional);
        }
    }
}

function filtroArmazenamento(){
    const select_armazenamento = document.getElementById("armazenamento");
    let uniquearmazenamento = [];

    for(let i=0; i<cadastro.length; i++){
        let armazenamento = cadastro[i].armazenamento;
        if(uniquearmazenamento.indexOf(armazenamento)==-1 && armazenamento!= ""){
            let newOption = document.createElement("option");
            newOption.classList.add("armazenamento-option");
            newOption.value = armazenamento;
            newOption.innerText = armazenamento;

            select_armazenamento.appendChild(newOption);
            uniquearmazenamento.push(armazenamento);
        }
    }
}