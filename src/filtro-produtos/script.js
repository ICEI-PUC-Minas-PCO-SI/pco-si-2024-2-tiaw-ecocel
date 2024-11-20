const celulares = [
    {
        marca: "Apple",
        modelo: "iPhone 14",
        durabilidade: 4,
        camera: 4,
        precoMin: 5500,
        precoMax: 7500,
        bateria: 4,
        imagem: "imagens/iphone14.jpg"
    },
    {
        marca: "Samsung",
        modelo: "Samsung Galaxy S23 Ultra",
        durabilidade: 4,
        camera: 5,
        precoMin: 6000,
        precoMax: 9500,
        bateria: 4,
        imagem: "imagens/sucqozlsaqcfve2l21vahupkykfnoeg5xbfq_640x640+fill_ffffff.jpeg"
    },
    {
        marca: "Samsung",
        modelo: "Samsung Galaxy A54",
        durabilidade: 3,
        camera: 4,
        precoMin: 1900,
        precoMax: 2500,
        bateria: 4,
        imagem: "imagens/SamsungGalaxyA54.webp"
    },
    {
        marca: "Motorola",
        modelo: "Motorola Edge 40 Pro",
        durabilidade: 4,
        camera: 4,
        precoMin: 4000,
        precoMax: 5500,
        bateria: 4,
        imagem: "imagens/MotorolaEdge40 Pro.webp"
    },
    {
        marca: "Motorola",
        modelo: "Motorola Moto G53",
        durabilidade: 3,
        camera: 3,
        precoMin: 1300,
        precoMax: 1900,
        bateria: 3,
        imagem: "imagens/motog53.webp"
    },
    {
        marca: "Xiaomi",
        modelo: "Xiaomi 13 Pro",
        durabilidade: 4,
        camera: 5,
        precoMin: 6000,
        precoMax: 8500,
        bateria: 4,
        imagem: "imagens/xiami.redmi13pro.jpg"
    },
    {
        marca: "Xiaomi",
        modelo: "Xiaomi Redmi Note 12 Pro",
        durabilidade: 3,
        camera: 4,
        precoMin: 1600,
        precoMax: 2200,
        bateria: 4,
        imagem: "imagens/XiaomiRedmi12Pro.jpg"
    }
];

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

    const resultados = celulares.filter(celular => {
        return (
            (!marca || celular.marca === marca) &&
            (!durabilidade || celular.durabilidade >= durabilidade) &&
            (!camera || celular.camera >= camera) &&
            (!bateria || celular.bateria >= bateria) &&
            (!preco || (celular.precoMin <= preco && celular.precoMax >= preco)) &&
            (!favoritos || celular.favorito)
        );
    });

    exibirResultados(resultados);
}

function exibirResultados(resultados) {
    const lista = document.querySelector('.product-list');
    lista.innerHTML = ''; 

    resultados.forEach(celular => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${celular.imagem}" alt="${celular.marca} ${celular.modelo}" class="product-image">
            <h3>${celular.marca} - ${celular.modelo}</h3>
            <p>Durabilidade: ${celular.durabilidade} estrelas</p>
            <p>Câmera: ${celular.camera} estrelas</p>
            <p>Preço: R$${celular.precoMin} - R$${celular.precoMax}</p>
            <p>Bateria: ${celular.bateria} estrelas</p>
        `;
        lista.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupRatingSystem();
});


