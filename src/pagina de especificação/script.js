// Script para manipular produtos dinamicamente
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('progress');

    // Adiciona eventos para destacar as barras ao passar o mouse
    progressBars.forEach(bar => {
        bar.addEventListener('mouseover', () => {
            bar.style.filter = 'brightness(1.2)';
        });

        bar.addEventListener('mouseout', () => {
            bar.style.filter = 'brightness(1)';
        });
    });

    // Exemplo de adição dinâmica de especificações
    const addSpecButton = document.createElement('button');
    addSpecButton.textContent = 'Adicionar Especificação';
    addSpecButton.style.marginTop = '20px';
    addSpecButton.style.padding = '10px';
    addSpecButton.style.backgroundColor = '#32a852';
    addSpecButton.style.color = 'white';
    addSpecButton.style.border = 'none';
    addSpecButton.style.borderRadius = '5px';
    addSpecButton.style.cursor = 'pointer';

    const specificationsContainer = document.querySelector('.specifications');
    specificationsContainer.appendChild(addSpecButton);

    addSpecButton.addEventListener('click', () => {
        const newSpec = document.createElement('div');
        newSpec.classList.add('spec-item');

        const label = document.createElement('label');
        label.textContent = 'Nova Especificação:';

        const newProgress = document.createElement('progress');
        newProgress.value = 50;
        newProgress.max = 100;

        newSpec.appendChild(label);
        newSpec.appendChild(newProgress);
        specificationsContainer.appendChild(newSpec);
    });
});
