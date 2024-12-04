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
        document.getElementById("products-container").innerHTML = `<p>
                                                                        <span>Oops...</span>
                                                                        <br>
                                                                        <span>Nenhum produto encontrado.</span>
                                                                    </p>`
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
          <img src="${item.img}" alt="${item.marca + " " + item.modelo}" />
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
    const marca = document.getElementById('marca').value;
    const durabilidade = parseInt(document.querySelector('#durabilidade').getAttribute('data-rating'));
    const camera = parseInt(document.querySelector('#camera').getAttribute('data-rating'));
    const bateria = parseInt(document.querySelector('#bateria').getAttribute('data-rating'));
    const preco = parseInt(document.getElementById('preco').value);
    const favoritos = document.getElementById('favoritos').checked;

    const resultados = cadastro.filter(cadastro => {
        return (
            (!marca || cadastro.marca === marca) &&
            (!durabilidade || cadastro.durabilidade >= durabilidade) &&
            (!camera || cadastro.camera >= camera) &&
            (!bateria || cadastro.bateria >= bateria) &&
            (!preco || (cadastro.precoMin <= preco && cadastro.precoMax >= preco)) &&
            (!favoritos || cadastro.favorito)
        );
    });

    exibirResultados(resultados);
}

function exibirResultados(resultados) {
    const lista = document.querySelector('.product-list');
    lista.innerHTML = ''; 

    resultados.forEach(cadastro => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${cadastro.imagem}" alt="${cadastro.marca} ${cadastro.modelo}" class="product-image">
            <h3>${cadastro.marca} - ${cadastro.modelo}</h3>
            <p>Durabilidade: ${cadastro.durabilidade} estrelas</p>
            <p>Câmera: ${cadastro.camera} estrelas</p>
            <p>Preço: R$${cadastro.precoMin} - R$${cadastro.precoMax}</p>
            <p>Bateria: ${cadastro.bateria} estrelas</p>
        `;
        lista.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupRatingSystem();
});

