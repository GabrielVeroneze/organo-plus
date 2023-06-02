<p>Projeto desenvolvido durante o curso "React: desenvolvendo com JavaScript" da Alura.</p>

<hr>

<h1 align="center">AluraBooks Livros</h1>
<p align="center">AluraBooks é uma loja virtual que oferece livros de programação para venda. A loja possui uma variedade de livros, incluindo livros de front-end, livros de back-end e livros de dados.</p>

## :hammer: Funcionalidades do projeto

- `Listagem de livros`: Lista todos os livros disponíveis na API, exibindo o título, descrição, imagem e preço de cada um.

- `Filtro por categoria`: Permite a filtragem dos livros por categoria, sendo elas: front-end, back-end e dados. Ao clicar em um dos botões de categoria, apenas os livros relacionados serão exibidos na tela.

- `Filtro por disponibilidade`: Permite a filtragem dos livros por disponibilidade. Ao clicar no botão de "Livros disponíveis", apenas os livros que estão disponíveis serão exibidos.

- `Exibição do valor total`: Ao filtrar os livros disponíveis, a aplicação exibe o valor total, que apresenta o valor total de todos os livros disponíveis na lista.

- `Ordenação por preço`: Possibilita a ordenação dos livros por preço, em ordem crescente.

## :computer: Tecnologias e Ferramentas utilizadas

- <img height="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"><br>
    - `<button>`
    - `<img>`
    - `<li>`
    - `<ul>`
    - e outros

- <img height="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"><br>
    - `@import`
    - `box-sizing`
    - `flexbox`
    - `media queries`
    - e outros

- <img height="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"><br>
    - `async`/ `await`
    - `filter`
    - `forEach`
    - `map`
    - `operador spread`
    - `operador ternário`
    - `reduce`
    - `sort`
    - e outros

## :open_file_folder: Acesso ao projeto
Você pode baixar o projeto diretamente:  
[Baixar código fonte](https://github.com/GabrielVeroneze/alura-books-livros/archive/refs/heads/main.zip)

Também é possível clonar o repositório usando o seguinte comando:
```
git clone https://github.com/GabrielVeroneze/alura-books-livros.git
```

## :clipboard: Instruções
Para usar este projeto em seu computador localmente, você precisará seguir estas etapas:

1. Certifique-se de que você tem o Node.js instalado em seu computador. Se não tiver, faça o download e a instalação a partir do [site oficial](https://nodejs.org/).

2. Certifique-se de que a extensão Live Server do VSCode está instalada. Se você ainda não a tem instalada, você pode baixá-la na loja de extensões do VSCode ou em [baixar Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

3. Abra o terminal e navegue até a pasta raiz do projeto usando o comando `cd` no terminal. Por exemplo:
   ```
   cd C:\Users\SeuUsuario\projetos\meu-projeto
   ```
4. Inicie o servidor JSON executando o seguinte comando no terminal:
   ```
   npx json-server --watch db.json
   ```
&nbsp; &nbsp; &nbsp; &nbsp;Este comando iniciará o servidor JSON no endereço http://localhost:3000.

5. Por fim, inicie o Live Server do VSCode clicando com o botão direito no arquivo `index.html` e selecionando a opção "Open with Live Server". Isso abrirá a página HTML principal.
<br>

## Demonstração Visual
`Página inicial`
![aluraBooks](https://imgur.com/pSkyaNE.png)

`Livros de Front-End`
![aluraBooks](https://imgur.com/S2dQ6OR.png)

`Livros ordenados pelo preço`
![aluraBooks](https://imgur.com/b8dQfHe.png)
