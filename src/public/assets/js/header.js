document.getElementById('header').innerHTML = /* html */`
    <!--Google fonts icons-->
    <link rel="stylesheet" href="assets\css\dispositivos.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="https://kit.fontawesome.com/b024200ba3.js" crossorigin="anonymous"></script>

    <!-- Logo -->
    <a href="home.html"><img src="/assets/images/logo.jpeg" alt="logo" height="50px" width="50px"></a>

    <!-- Menu mobile -->
    <nav class="nav">
        <input type="checkbox" id="checkbox" class="checkbox">
        <label for="checkbox" class=label-menu>
            <i class="fa-solid fa-bars"></i>
            <i class="fa-solid fa-circle-xmark"></i>
        </label>

        <!-- Links do menu-->
        <ul class="menu">
            <li><a id="nav-item-home" href="home.html">Home</a></li>
            <li><a href="dispositivos.html">Dispositivos</a></li>
            <li><a href="cadastroprodutos.html">Cadastro de produto</a></li>
            <li><a href="sustentabilidade.html">Sustentabilidade</a></li>
            <li><a href="contato.html">Contato</a></li>
            <li><a href="reviews.html">Reviews</a></li>
            <li><a id="nav-item-login" href="login.html">Login</a></li>
            <li><a id="nav-item-cadastro" href="cadastro.html">Cadastro</a></li>
        </ul>
    </nav>
    <script src="https://kit.fontawesome.com/b024200ba3.js" crossorigin="anonymous"></script>
`;



