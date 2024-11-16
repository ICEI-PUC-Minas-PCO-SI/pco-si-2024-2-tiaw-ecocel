document.querySelector("form").addEventListener("submit", function(event) {
    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem. Por favor, tente novamente.");
        event.preventDefault(); // Impede o envio do formulário se as senhas não coincidirem
    }
    
    // Verifica se os campos obrigatórios estão preenchidos
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;

    if (!nome || !idade || !email) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        event.preventDefault(); // Impede o envio se os campos obrigatórios não estiverem preenchidos
    }

    // Verifica se o usuário aceitou os termos e condições
    let termos = document.getElementById("termos").checked;
    if (!termos) {
        alert("Você deve aceitar os termos e condições antes de continuar.");
        event.preventDefault(); // Impede o envio do formulário se os termos não forem aceitos
    }
});
