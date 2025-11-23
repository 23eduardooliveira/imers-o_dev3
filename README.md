# Histórico The Game Awards 🏆

## 📖 Sobre o meu Primeiro Projeto

Este projeto é uma Single-Page Application (SPA) desenvolvida para exibir um histórico interativo dos jogos mais icônicos que foram premiados ou indicados no **The Game Awards**.
A aplicação permite que os usuários explorem, busquem e filtrem uma coleção de jogos, visualizando detalhes como descrição, prêmios, desenvolvedora e tags.

A interface foi construída com um design moderno, responsivo e focado na experiência do usuário, utilizando um tema escuro e uma paleta de cores vibrante.

🔗 **Acesse a demonstração ao vivo:** [(https://23eduardooliveira.github.io/imers-o_dev3/)]

---

## ✨ Funcionalidades Principais

-   **Catálogo de Jogos:** Exibição dos jogos em formato de cards, com imagem, título, descrição e informações relevantes.
-   **Busca em Tempo Real:** Filtre os jogos instantaneamente digitando no campo de busca. A pesquisa considera o nome, a descrição e as tags do jogo.
-   **Paginação Dinâmica:** Navegue facilmente por toda a coleção de jogos com botões de paginação que são gerados automaticamente.
-   **Design Responsivo:** A interface se adapta perfeitamente a diferentes tamanhos de tela, de desktops a dispositivos móveis (Mobile-First).
-   **Carregamento Assíncrono:** Os dados dos jogos são carregados de forma assíncrona a partir de um arquivo JSON, garantindo que a página seja carregada rapidamente.
-   **Interface Dinâmica:** Todo o conteúdo principal (cards, ícones, links do rodapé) é gerado e manipulado via JavaScript, demonstrando uma forte manipulação do DOM.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as tecnologias fundamentais do desenvolvimento web, sem o uso de frameworks, para focar nos conceitos essenciais.

-   **HTML5:** Estrutura semântica e bem organizada.
-   **CSS3:** Estilização completa com recursos modernos:
    -   **Flexbox** e **Grid Layout** para layouts complexos e responsivos.
    -   **Variáveis CSS (Custom Properties)** para um fácil gerenciamento do tema e da paleta de cores.
    -   **Media Queries** para garantir a responsividade em múltiplos dispositivos.
    -   **Transições e Animações** para uma experiência de usuário mais fluida.
-   **JavaScript (ES6+):**
    -   Manipulação do **DOM** para criar e atualizar elementos dinamicamente.
    -   **Fetch API** com `async/await` para o consumo de dados do arquivo `base_estatica.json`.
    -   Lógica de programação para implementar as funcionalidades de busca, filtro e paginação.

---

## 🚀 Como Executar o Projeto Localmente

Você não precisa de um servidor web para rodar este projeto. Basta seguir os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd seu-repositorio
    ```

3.  **Abra o arquivo `index.html` no seu navegador:**
    -   Você pode simplesmente clicar duas vezes no arquivo `index.html` na sua pasta.

E pronto! A aplicação estará funcionando localmente.

---

## 📂 Estrutura do Projeto

---

## 🔮 Possíveis Melhorias Futuras

-   [ ] Implementar um sistema de ordenação (por ano, por nome, por número de indicações).
-   [ ] Adicionar um modo claro (Light Mode) com um botão para alternar entre os temas.
-   [ ] Consumir dados de uma API real (como a RAWG API ou outra) para obter uma lista de jogos mais extensa e atualizada.
-   [ ] Adicionar animações de "fade-in" para os cards quando a página é carregada ou alterada.

---

Feito com ❤️ por [Carlos Eduardo].


