// Configuração do carrossel (opcional, já que o Bootstrap gerencia isso automaticamente)
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector("#carouselReviews");

    if (carousel) {
        const carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 5000, // Tempo entre os slides (em ms)
            wrap: true, // Recomeça o ciclo após o último slide
            keyboard: true // Permite navegação pelo teclado
        });

        console.log("Carrossel inicializado com sucesso!");
    }
});

// Caso você queira adicionar avaliações dinamicamente:
const reviews = [
    {
        name: "Maria Silva",
        image: "https://i.pravatar.cc/80?img=10",
        stars: 5,
        comment: "Ótimo serviço, muito satisfeita com o atendimento e os produtos!",
        date: "2023-09-15"
    },
    {
        name: "João Pedro",
        image: "https://i.pravatar.cc/80?img=12",
        stars: 4,
        comment: "Produtos incríveis e sustentáveis. Super recomendo!",
        date: "2023-10-12"
    },
    {
        name: "Ana Costa",
        image: "https://i.pravatar.cc/80?img=14",
        stars: 5,
        comment: "Superou minhas expectativas, adorei!",
        date: "2023-11-10"
    }
];

// Função para criar estrelas visuais
function generateStars(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? "★" : "☆";
    }
    return stars;
}

// Função para adicionar dinamicamente avaliações ao carrossel
function populateCarousel() {
    const carouselInner = document.querySelector(".carousel-inner");
    if (!carouselInner) return;

    carouselInner.innerHTML = ""; // Limpa os itens existentes

    reviews.forEach((review, index) => {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (index === 0) carouselItem.classList.add("active");

        carouselItem.innerHTML = `
            <div class="review-card">
                <img src="${review.image}" alt="${review.name}" class="review-image">
                <div class="review-stars">${generateStars(review.stars)}</div>
                <p>${review.comment}</p>
                <div class="review-name">${review.name}</div>
                <div class="review-date">${review.date}</div>
            </div>
        `;

        carouselInner.appendChild(carouselItem);
    });
}

// Popula o carrossel dinamicamente (se necessário)
populateCarousel();
