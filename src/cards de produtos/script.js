var cadastro = [
    {
        "id": 0,
        "modelo": "Samsung Galaxy A",
        "preco": 1000,
        "img": "./assets/img/img1.png",
        "favorito": false
    },
    {
        "id": 1,
        "modelo": "Iphone XR",
        "preco": 2000,
        "img": "./assets/img/img2.png",
        "favorito": false
    },
    {
        "id": 2,
        "modelo": "Moto G 52",
        "preco": 1500,
        "img": "./assets/img/img3.png",
        "favorito": false
    },
    {
        "id": 3,
        "modelo": "Moto G 20",
        "preco": 1200,
        "img": "./assets/img/img4.png",
        "favorito": false
    },
    {
        "id": 4,
        "modelo": "Iphone X",
        "preco": 3000,
        "img": "./assets/img/img5.png",
        "favorito": false
    }
];

const gridContainer = document.getElementById('products-container');
const saibaMaisLink = "especificacoes.html";

// Função para carregar os estados de favorito do localStorage
function loadFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || {};
    cadastro.forEach(item => {
        if (favoritos[item.id]) {
            item.favorito = true;
        }
    });
}

// Função para atualizar o localStorage quando um item é marcado como favorito
function updateLocalStorage() {
    const favoritos = {};
    cadastro.forEach(item => {
        favoritos[item.id] = item.favorito;
    });
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

// Carrega os estados dos favoritos ao inicializar
loadFavoritos();

cadastro.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('product-card');

    // Define o conteúdo do card com as informações do JSON
    card.innerHTML = `
      <img src="${item.img}" alt="${item.modelo}" />
      <div class="product-card__description">
        <div class="product-card__text">${item.modelo}</div>
        <div class="product-card__price"><strong>R$${item.preco}</strong></div>
        <div class="fav" id="fav-${item.id}">
          <span class="material-symbols-outlined">favorite</span>
        </div>
        <a href="${saibaMaisLink}" class="about">Saiba mais</a>
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
