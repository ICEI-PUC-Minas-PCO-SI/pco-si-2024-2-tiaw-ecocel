# Plano de testes de software

<span style="color:red">Pré-requisitos: <a href="03-Product-design.md"> Especificação do projeto</a></span>, <a href="05-Projeto-interface.md"> Projeto de interface</a>

Segue abaixo o plano de testes de software foi gerado a partir da especificação do sistema e consiste em casos de teste que deverão ser executados quando a implementação estiver parcial ou totalmente pronta. 

| **Caso de teste**  | **CT-001 – Cadastrar perfil**  |
|:---: |:---: |
| Requisito associado | RF-001 - A aplicação deve apresentar, na página Cadastro, a funcionalidade de cadastro de usuários para que estes consigam criar e gerenciar seu perfil. |
| Objetivo do teste | Verificar se o usuário consegue se cadastrar na aplicação. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site https://ecocel.replit.app/cadastrocliente.html <br> - Preencher os campos obrigatórios (e-mail, nome, login, idade, profissão, orçamento, Marque as opções que você considera importantes em um celular, senha, confirmação de senha) <br> - Aceitar os termos de uso <br> - Clicar em "Cadastrar" |
| Critério de êxito | - Redirecionar para página de confirmação que tem a mensagem de cadastro concluído com sucesso e cards com produtos recomendados. |
| Responsável pela elaboração do caso de teste | Samara |

<br>

| **Caso de teste**  | **CT-002 – Efetuar login**  |
|:---: |:---: |
| Requisito associado | RF-012 - A aplicação deve possuir opção de fazer login, sendo o login o endereço de e-mail. |
| Objetivo do teste | Verificar se o usuário consegue realizar login. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site: https://ecocel.replit.app/modulos/login/login.html <br> - Preencher o campo de e-mail <br> - Preencher o campo de senha <br> - Clicar em "Login" |
| Critério de êxito | - O login foi realizado com sucesso. |
| Responsável pela elaboração do caso de teste | Samara |

| **Caso de teste**  | **CT-003 – Adcionar aos favoritos**  |
|:---: |:---: |
| Requisito associado | RF-007 - A aplicação deve possuir opção de adcionar aos favoritos, e visualizar os itens favoritados. |
| Objetivo do teste | Verificar se o usuário consegue adicionar aos favoritos. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site: https://ecocel.replit.app/dispositivos.html <br> - Clicar no botão de coração de um ou mais cards de produtos  |
| Critério de êxito | - Os itens marcados como favoritos permanecem marcados como favoritos |
| Responsável pela elaboração do caso de teste | Samara |

| **Caso de teste**  | **CT-004 – Barra de pesquisa**  |
|:---: |:---: |
| Requisito associado | RF-010 - A aplicação deve possuir opção de buscar produto por modelo e/ou marca. |
| Objetivo do teste | Verificar se o usuário consegue pesquisar um produto por modelo ou marca. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site: https://ecocel.replit.app/dispositivos.html <br> - Digitar "Samsung" na barra de pesquisa |
| Critério de êxito | - Somente os itens da marca Samsung vão aparecer na tela |
| Responsável pela elaboração do caso de teste | Samara |


## Ferramentas de testes (opcional)

Não foi utilizada nenhuma ferramenta para teste, somente foram feitos testes como se estivesse utilizando o site.
