# Arquitetura da solução

<span style="color:red">Pré-requisitos: <a href="05-Projeto-interface.md"> Projeto de interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da solução](images/exemplo-arquitetura.png)

## Funcionalidades

Esta seção apresenta as funcionalidades da solução.

##### Funcionalidade 1 - Cadastro de usuários

Permite o cadastro de usuários no site

* **Estrutura de dados:** [Usuários](#estrutura-de-dados---usuários)
* **Instruções de acesso:**
  * Abra o site e vá na aba Cadastro;
  * Preencha os dados e clique em "Cadastrar".
* **Tela da funcionalidade**:

![Tela de funcionalidade](https://github.com/user-attachments/assets/bf830b12-15ec-44f8-8376-85900d70259f)

##### Funcionalidade 2 - Login

Permite os usuários logar no site

* **Estrutura de dados:** [Usuários](#estrutura-de-dados---usuários)
* **Instruções de acesso:**
  * Abra o site e vá na aba Login;
  * Preencha os dados e clique em "Login".
* **Tela da funcionalidade**:

![image](https://github.com/user-attachments/assets/4936d692-a455-44c2-9b10-d21adb6b9864)

##### Funcionalidade 3 - Cadastro de produto

Permite cadastrar novos produtos

* **Estrutura de dados:** [Produtos](#estrutura-de-dados---produtos)
* **Instruções de acesso:**
  * Abra o site e vá na aba Cadastro de produto;
  * Preencha os dados;
  * Clique em "Cadastrar";
* **Tela da funcionalidade**:

![image](https://github.com/user-attachments/assets/0ddae87b-b468-4798-b68d-913ef2ff71db)

##### Funcionalidade 4 - Filtro de produtos

Permite os usuários visualizar os produtos e filtrar os dados

* **Estrutura de dados:** [Produtos](#estrutura-de-dados---produtos)
* **Instruções de acesso:**
  * Abra o site e vá na aba Dispositivos;
  * Preencha os filtros;
  * Clique em "Filtrar"
* **Tela da funcionalidade**:

![image](https://github.com/user-attachments/assets/16ad5869-8643-4727-a7a5-c7d047db2b89)

##### Funcionalidade 5 - Barra de pesquisa

Permite os usuários pesquisar o produto por modelo ou marca

* **Estrutura de dados:** [Produtos](#estrutura-de-dados---produtos)
* **Instruções de acesso:**
  * Abra o site e vá na aba Dispositivos;
  * Digite o nome do modelo ou marca do celula;
  * Clique no botão de lupa ou aperte Enter.
* **Tela da funcionalidade**:

![image](https://github.com/user-attachments/assets/a208709c-2a59-478f-8c4a-fd8b20f16fc9)

##### Funcionalidade 6 - Adcionar aos favoritos

Permite aos usuários salvar produtos como favoritos e depois visualizá-los.

* **Estrutura de dados:** [Produtos](#estrutura-de-dados---produtos)
* **Instruções de acesso:**
  * Abra o site e vá na aba Dispositivos;
  * Clique no ícone de coração no card que deseja marcar como favorito(se já tiver marcado, ao clicar é desfavoritado);
  * Esse produto ficará salvo como favorito, também é possível usar o filtro para ver todos os favoritos.
* **Tela da funcionalidade**:

![image](https://github.com/user-attachments/assets/64424d68-5cd4-4746-80c0-ae41d74b529e)

##### Funcionalidade 7 - Adcionar avaliação do site

Permite aos usuários enviar um comentário de avaliação do site.

* **Estrutura de dados:** [Produtos](#estrutura-de-dados---review)
* **Instruções de acesso:**
  * Abra o site e vá na aba Reviews;
  * Preencha os dados(Nome, email, título, nota e descrição);
  * Clique em "Enviar".
* **Tela da funcionalidade**:

![image](https://github.com/user-attachments/assets/edc6fb15-bb7e-4994-8311-b5c3055f348d)

##### Funcionalidade 8 - Carrousel de reviews

Permite aos usuários verem as avaliações do site.

* **Estrutura de dados:** [Produtos](#estrutura-de-dados---review)
* **Instruções de acesso:**
  * Abra o site e vá na aba Home;
  * Na tela é possível ver o carrousel com as reviews e é possível clicar nas setas para ver a próxima ou anterior.
* **Tela da funcionalidade**:

![image](https://github.com/user-attachments/assets/9e6b1421-8670-48eb-af35-7e89c69531ad)

##### Funcionalidade 9 - Accordion de sustentabilidade

Permite aos usuários verem dados importantes sobre sustentabilidade e manutenção do celular.

* **Instruções de acesso:**
  * Abra o site e vá na aba Sustentabilidade;
  * Na tela é possível ver uma lista com informações;
  * Clique no item que desejar e a decrição irá aparecer na tela.
* **Tela da funcionalidade**:

![image](https://github.com/user-attachments/assets/59e73b20-ad9f-4587-b498-a0aa62947dc6)

##### Funcionalidade 10 - Buscar pontos de coleta de reciclagem próximos

Permite aos usuários verem pontos de coleta de reciclagem prócimos a sua casa

* **Instruções de acesso:**
  * Abra o site e vá na aba Sustentabilidade;
  * Clique no item: "Como descartar lixo eletrônico";
  * Clique no link: "Veja se há locais de descarte próximos a você!";
  * Digite seu CEP;
  * Digite a distância máxima desejada em metros(por padrão 5000);
  * Clique em "Buscar".
* **Tela da funcionalidade**:

![image](https://github.com/user-attachments/assets/77ab72d5-14f8-4192-8603-cd1d1728ba44)

##### Funcionalidade 11 - Formulário de contato

Permite aos usuários enviarem uma mensagem de contato.

* **Instruções de acesso:**
  * Abra o site e vá na aba Contato;
  * Preencha os dados (Nome, Email, Motivo do contato e Mensagem);
  * Clique em "Enviar".
* **Tela da funcionalidade**:

![image](https://github.com/user-attachments/assets/e57a519e-9b37-43af-875c-7134c63b44c6)

### Estruturas de dados

Descrição das estruturas de dados utilizadas na solução com exemplos no formato JSON.Info.

##### Estrutura de dados - Usuários

Registro dos usuários do sistema utilizados para login.

```json
    {
      "id": 1,
      "login": "gustavo",
      "senha": "gugu1301",
      "nome": "gustavo",
      "email": "gustavo@gmail.com",
      "idade": 19,
      "Profisao": "programador",
      "orcamento": "1500",
      "Marque as opções que você considera importantes em um celular": "desempenho",
      "favoritos": [
        3,
        4
      ]
    }
```

##### Estrutura de dados - Produtos

Registro dos usuários do sistema utilizados para login.

```json
    {
      "id": 1,
      "modelo": "Galaxy S22",
      "ano": 2022,
      "camera": "108 MP",
      "bateria": "5000 mAh",
      "sistema_operacional": "Android",
      "armazenamento": "256 GB",
      "marca": "Samsung",
      "preco": 2300,
      "imagem": "./assets/images/S22.jpg"
    }
```
##### Estrutura de dados - Reviews

Registro dos usuários do sistema utilizados para login.

```json
    {
      "id": 1,
      "name": "Maria Silva",
      "image": "https://i.pravatar.cc/80?img=10",
      "stars": 5,
      "comment": "Ótimo serviço, muito satisfeita com o atendimento e os produtos!",
      "date": "2023-09-15"
    }
```

### Módulos e APIs

Esta seção apresenta os módulos e APIs utilizados na solução.

**Scripts:**

* Bootstrap 4 - [http://getbootstrap.com/](http://getbootstrap.com/)

## Hospedagem

A hospedagem foi feita pelo Replit. Este repositório do GitHub foi conectado ao Replit e depois foi feito o deploy da aplicação.
