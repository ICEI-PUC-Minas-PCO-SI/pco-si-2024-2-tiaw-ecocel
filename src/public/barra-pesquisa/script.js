const cadastro = [
    {
        "id": 0,
        "modelo": "Galaxy A",
        "marca": "Samsung",
        "preco": 1000,
        "img": "./assets/img/img1.png",
        "favorito": false
    },
    {
        "id": 1,
        "modelo": "XR",
        "marca": "Iphone",
        "preco": 2000,
        "img": "./assets/img/img2.png",
        "favorito": false
    },
    {
        "id": 2,
        "modelo": "Moto G 52",
        "marca": "Motorola",
        "preco": 1500,
        "img": "./assets/img/img3.png",
        "favorito": false
    },
    {
        "id": 3,
        "modelo": "Moto G 20",
        "marca": "Motorola",
        "preco": 1200,
        "img": "./assets/img/img4.png",
        "favorito": false
    },
    {
        "id": 4,
        "modelo": "X",
        "marca": "Iphone",
        "preco": 3000,
        "img": "./assets/img/img5.png",
        "favorito": false
    }
];

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
        // Pega a marca e modelo do celular e coloca tudo minusculo para comparar com o valor buscado, que também esta em minusculo
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
                                                                        <spam>Oops...</spam>
                                                                        <br>
                                                                        <spam>Nenhum produto encontrado.</spam>
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

