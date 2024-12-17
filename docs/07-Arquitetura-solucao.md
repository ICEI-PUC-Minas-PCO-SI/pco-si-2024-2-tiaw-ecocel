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

![image](https://github.com/user-attachments/assets/4936d692-a455-44c2-9b10-d21adb6b9864)

##### Funcionalidade 2 - Login

Permite os usuários logar no site

* **Estrutura de dados:** [Usuários](#estrutura-de-dados---usuários)
* **Instruções de acesso:**
  * Abra o site e vá na aba Login;
  * Preencha os dados e clique em "Login".
* **Tela da funcionalidade**:

![image](https://github.com/user-attachments/assets/4936d692-a455-44c2-9b10-d21adb6b9864)

##### Funcionalidade 2 - Login

Permite os usuários logar no site

* **Estrutura de dados:** [Usuários](#estrutura-de-dados---usuários)
* **Instruções de acesso:**
  * Abra o site e vá na aba Login;
  * Preencha os dados e clique em "Login".
* **Tela da funcionalidade**:

![image](https://github.com/user-attachments/assets/4936d692-a455-44c2-9b10-d21adb6b9864)


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
