document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const novaMensagem = {
        nome: nome,
        email: email,
        mensagem: mensagem,
        data: new Date().toISOString()
    };

    // Envia a mensagem para o JSON Server
    fetch("http://localhost:5000/mensagens", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(novaMensagem)
    })
        .then((response) => {
            if (response.ok) {
                alert("Sua mensagem foi enviada com sucesso!");
                document.getElementById("contactForm").reset();
            } else {
                alert("Erro ao enviar a mensagem. Tente novamente.");
            }
        })
        .catch((error) => {
            console.error("Erro:", error);
            alert("Erro ao enviar a mensagem. Tente novamente.");
        });
});