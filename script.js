let cardContainer = document.querySelector(".card-container");
let caixaBusca = document.querySelector("header input");
let botaoBusca = document.querySelector("#botao-busca");
let dados = [];

async function carregarDados() {
    try {
        let resposta = await fetch("base_estatica.json");
        dados = await resposta.json();
        // Não exibe mais os dados inicialmente, apenas carrega.
    } catch (error) {
        console.error("Erro ao carregar os dados:", error);
    }
}

function buscar() {
    const termoBuscado = caixaBusca.value.toLowerCase();

    // Se o campo de busca estiver vazio, limpa os resultados e não faz nada.
    if (termoBuscado.trim() === "") {
        exibir([]);
        return;
    }

    const dadosFiltrados = dados.filter(dado =>
        dado.nome.toLowerCase().includes(termoBuscado) ||
        dado.descricao.toLowerCase().includes(termoBuscado) ||
        dado.tags.some(tag => tag.toLowerCase().includes(termoBuscado))
    );

    exibir(dadosFiltrados);
}

botaoBusca.addEventListener("click", buscar);

function exibir(dadosParaExibir) {
    cardContainer.innerHTML = ""; // Limpa o container antes de exibir os novos cards
    for (let dado of dadosParaExibir) {
        const article = document.createElement("article");
        // article.classList.add("card"); // A classe .card não está sendo usada no CSS, então podemos remover.
        article.innerHTML = ` 
        <div class="card-content">
            <h2>${dado.nome}</h2>
            <p><strong>Criação:</strong> ${dado.data_criacao}</p>
            <p>${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Saiba mais</a>
        </div>
        `;
        cardContainer.appendChild(article);
    }
}

carregarDados(); // Carrega os dados ao iniciar