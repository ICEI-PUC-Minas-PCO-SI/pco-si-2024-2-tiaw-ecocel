let produtos;

fetch("http://localhost:3000/produtos")
    .then(response => response.json())
    .then(async data => {
        await loadCards(data)
        produtos = data
    })
    .catch(error => {
        console.error('Erro ao ler produtos via API JSONServer:', error);
    });

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
    auxSearchProducts(produtos)
}

function auxSearchProducts(celulares) {

    let valorBusca = searchBar.value;
    valorBusca = valorBusca.toLowerCase();
    document.getElementById("products-container").innerHTML = "";
    let newCelulares = [];

    for (let i = 0; i < celulares.length; i++) {
        // Pega a marca e modelo do celulares e coloca tudo minusculo para comparar com o valor buscado, que também esta em minusculo
        let nome = celulares[i].marca + " " + celulares[i].modelo;
        nome = nome.toLowerCase();

        if (nome.indexOf(valorBusca) != -1) {
            newCelulares.push(celulares[i]);
        };
    };

    if (newCelulares.length != 0) {
        loadCards(newCelulares);
    } else {
        document.getElementById("products-container").innerHTML = `<p><strong>
                                                                        <span>Oops...</span>
                                                                        <br>
                                                                        <span>Nenhum produto encontrado.</span>
                                                                    </strong></p>`
    };
};

// Cria os card com os dados do json
async function loadCards(products) {
    const gridContainer = document.getElementById('products-container');
    const saibaMaisLink = "especificacoes.html";

    const usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    const usuarioCorrente = JSON.parse(usuarioCorrenteJSON);

    products
    .filter(p => Number(p.preco) <= usuarioCorrente.orcamento)
    .slice(0, 3)
    .forEach(item => {
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

            fetch("http://localhost:3000/usuarios/" + usuarioCorrente.id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ favoritos: products.filter(p => p.favorito).map(p => p.id) })
            })
                .then(response => response.json())
        });
    });

    await loadFavoritos(products)
};


// Função para carregar os estados de favorito do localStorage
function loadFavoritos(products) {
    const usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        const usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
        return fetch("http://localhost:3000/usuarios/" + usuarioCorrente.id, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(response => {
                products.forEach(item => {
                    if (response.favoritos.includes(item.id)) {
                        item.favorito = true;
                        const favButton = document.getElementById(`fav-${item.id}`)
                        favButton.style.color = item.favorito ? 'red' : 'black';
                    };
                });
            })
    }

    return Promise.resolve()
};