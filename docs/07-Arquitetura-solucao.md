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
  * Abra o site e va na aba Cadastro;
  * Preencha os dados e clique em "Cadastrar".
* **Tela da funcionalidade**:

![Tela de funcionalidade](https://github.com/user-attachments/assets/bf830b12-15ec-44f8-8376-85900d70259f)

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

### Módulos e APIs

Esta seção apresenta os módulos e APIs utilizados na solução.

**Scripts:**

* Bootstrap 4 - [http://getbootstrap.com/](http://getbootstrap.com/) ⚠️ EXEMPLO ⚠️

## Hospedagem

A hospedagem foi feita pelo Replit. Este repositório do GitHub foi conectado ao Replit e depois foi feito o deploy da aplicação.
