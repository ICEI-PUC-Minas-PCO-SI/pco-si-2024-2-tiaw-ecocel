# Código-fonte


Abaixo segue a estrutura de diretórios criada para a organização do código.

```plaintext
src/  (esta pasta aqui)
│
├── db/
│   └── db.json (estruturas de dados)
│
├── public/ (site - front-end)
│   ├── assets/
│   │   ├── css/
│   │   │   ├── styles.css
│   │   │   └── (outros arquivos .css)
│   │   │   └── (outros arquivos .css)
│   │   │   └── (outros arquivos .css)
│   │   │   └── (outros arquivos .css)
│   │   │
│   │   ├── js/
│   │   │   ├── app.js
│   │   │   └── (outros arquivos .js)
│   │   │
│   │   ├── images/
│   │   │   ├── logo.png
│   │   │   └── (padrão para as fotos de dispositivos: nome_do_celular .png ou nome_do_celular.jpeg)
│   │   
│   │
│   ├── modulos/
│   │   ├── modulo-1/
│   │   │   └── (arquivos do módulo)
│   │   │
│   │   └── modulo-2/
│   │       └── (arquivos do módulo)
│   │
│   ├── index.html (página inicial front-end)
│   ├── about.html
│   ├── contact.html
│   └── (outras páginas)
│
│── index.js (app back-end)
│── package.json (configuração back-end)
└── README.md (este arquivo aqui)
```

## Parte front-end

* Pasta `assets`: destinada aos arquivos de formatação (CSS), scripts (JS), imagens utilizadas no site (JPG, PNG, GIF, SVG etc.), fontes (TTF) e outros arquivos gerais utilizados por todo o site.
* Pasta `modulos`: onde devem ser armazenados os arquivos relacionados à implementação das funcionalidades do site.
* Arquivo `index.html`: arquivo que representa a "home page" do site.

## Parte back-end

Para este projeto, será utilizado o ambiente de execução **[Node.js](https://nodejs.org/)** para montar um back-end simplificado, porém eficaz, que utiliza o módulo **[JSON Server](https://github.com/typicode/json-server#readme)**.
Na estrutura de arquivos encontram-se, além disso, outra pasta e alguns arquivos, os quais são:

* Pasta `db`: local onde é armazenado o arquivo contendo as estruturas de dados utilizadas pela aplicação. O conteúdo dessa pasta é composto exclusivamente pelo arquivo `db.json`.
* Arquivo `index.js`: arquivo responsável por inicializar o servidor web e a aplicação de back-end no ambiente Node.js, fornecendo uma API RESTful a partir do arquivo `db.json`.
* Arquivo `package.js`: arquivo que contém as configurações da aplicação de back-end.

## Setup e execução do ambiente

Para rodar o servidor do site, é necessário instalar o Node.js em seu computador. Para isso, siga as instruções disponíveis no site do [**Node.js**](https://nodejs.org/), realizando o download da versão LTS (a versão mais estável do ambiente).

Assim que o Node.js estiver instalado em seu computador, deve-se abrir o terminal na pasta do seu projeto e executar o seguinte comando:

```
$> npm install
```

Isso permitirá que o NPM instale todos os pacotes necessários para a execução do back-end. O NPM é o aplicativo responsável por gerenciar as dependências de um projeto e instalar os pacotes do Node.js.

Em seguida, com os pacotes já instalados, basta executar o seguinte comando:

```
$> npm start
```

Isso fará com que o Node.js execute a aplicação de back-end, iniciando o servidor web e a API RESTful fornecida pelo JSON Server a partir do arquivo `db.json`.
