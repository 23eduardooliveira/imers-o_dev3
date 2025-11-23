// Seleciona os elementos do HTML uma única vez
const cardContainer = document.querySelector('.card-container');
const caixaBusca = document.getElementById('caixa-busca');
const botaoBusca = document.getElementById('botao-busca');
const listaGames = document.getElementById('lista-games');
const paginationContainer = document.getElementById('pagination-container');

// Array para armazenar todos os jogos carregados do JSON
let todosOsGames = [];
let jogosFiltradosAtualmente = [];
let currentPage = 1;
const gamesPerPage = 6; // Define quantos jogos aparecerão por "janela"

// Função assíncrona para carregar os dados do arquivo JSON
async function carregarGames() {
    try {
        const response = await fetch('base_estatica.json');
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON.');
        }
        todosOsGames = await response.json();
        jogosFiltradosAtualmente = [...todosOsGames]; // Inicialmente, a lista filtrada contém todos os jogos

        // Após carregar, exibe todos os games e popula a lista de sugestões
        mostrarPagina(jogosFiltradosAtualmente, currentPage);
        // popularDatalist(todosOsGames); // Desativado para remover a lista de sugestões

    } catch (error) {
        console.error('Falha na requisição:', error);
        cardContainer.innerHTML = '<p>Não foi possível carregar os dados dos games.</p>';
    }
}

// Função para renderizar os cards da página atual
function mostrarPagina(games, page) {
    cardContainer.innerHTML = ''; // Limpa o container antes de adicionar novos cards
    currentPage = page;

    // Atualiza ou cria o contador de jogos
    let countDisplay = document.querySelector('.game-count');
    if (!countDisplay) {
        countDisplay = document.createElement('h3');
        countDisplay.classList.add('game-count');
        cardContainer.parentNode.insertBefore(countDisplay, cardContainer);
    }


    if (games.length === 0) {
        cardContainer.innerHTML = '<p>Nenhum jogo encontrado com o termo buscado.</p>';
        setupPagination([]); // Limpa a paginação se não houver jogos
        return;
    }

    // Calcula os jogos para a página atual
    const startIndex = (page - 1) * gamesPerPage;
    const endIndex = startIndex + gamesPerPage;
    const gamesDaPagina = games.slice(startIndex, endIndex);

    gamesDaPagina.forEach(game => {
        const card = document.createElement('article');
        card.classList.add('card');

        // Gera o HTML para as tags
        const tagsHtml = game.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        card.innerHTML = `
            <img src="${game.imagem}" alt="Capa do jogo ${game.nome}">
            <div class="card-content">
                <h2>${game.nome}</h2>
                <p>${game.descricao}</p>
                <p><strong>Prêmio:</strong> ${game.data_criacao}</p>
                <p><strong>Indicações:</strong> ${game.indicacoes}</p>
                <p><strong>Desenvolvedora:</strong> ${game.desenvolvedora}</p>
                <div class="tags-container">
                    ${tagsHtml}
                </div>
                <a href="${game.link}" target="_blank">Saiba mais</a>
            </div>
        `;
        cardContainer.appendChild(card);
    });

    setupPagination(games);
}

// // Função para preencher o <datalist> com sugestões de nomes de jogos (Desativada)
// function popularDatalist(games) {
//     listaGames.innerHTML = '';
//     games.forEach(game => {
//         const option = document.createElement('option');
//         option.value = game.nome;
//         listaGames.appendChild(option);
//     });
// }

// Função que filtra os jogos com base no termo de busca e os exibe
function buscarEfiltrarGames() {
    const termoBusca = caixaBusca.value.toLowerCase();

    jogosFiltradosAtualmente = todosOsGames.filter(game =>
        game.nome.toLowerCase().includes(termoBusca) ||
        game.descricao.toLowerCase().includes(termoBusca) ||
        game.tags.some(tag => tag.toLowerCase().includes(termoBusca))
    );

    mostrarPagina(jogosFiltradosAtualmente, 1); // Mostra a primeira página dos resultados
}

// Função para criar e gerenciar os botões de paginação
function setupPagination(games) {
    paginationContainer.innerHTML = '';
    const pageCount = Math.ceil(games.length / gamesPerPage);

    if (pageCount <= 1) return; // Não mostra paginação se houver apenas uma página

    for (let i = 1; i <= pageCount; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        btn.classList.add('pagination-button');
        if (i === currentPage) {
            btn.classList.add('active');
        }
        btn.addEventListener('click', () => {
            mostrarPagina(games, i);
            window.scrollTo(0, 0); // Rola para o topo da página ao mudar de página
        });
        paginationContainer.appendChild(btn);
    }
}

// Função para adicionar o ícone de troféu no cabeçalho e como favicon
function adicionarIcones() {
    const iconeTrofeuSVG = `<Gemini_Generated_Image_9521qn9521qn9521" width="24" height="24" viewBox="0 0 24 24" fill="${encodeURIComponent('#eb8541')}" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M9.5 14.5A2.5 2.5 0 0 1 12 12a2.5 2.5 0 0 1 2.5 2.5"/></svg>`;
    
    const titulo = document.querySelector('header h1');
    if (titulo) {
        titulo.insertAdjacentHTML('afterbegin', iconeTrofeuSVG.replace(encodeURIComponent('#eb8541'), 'currentColor'));
    }

    // Adiciona ícone na aba do navegador (favicon)
    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.href = `data:image/svg+xml,${iconeTrofeuSVG}`;
    document.head.appendChild(faviconLink);

    // Atualiza o título da página
    const pageTitle = document.querySelector('title');
    if (pageTitle) {
        pageTitle.textContent = 'Histórico The Game Awards';
    }
}

// Função para atualizar o rodapé com links de plataformas
function atualizarRodape() {
    const footerLinks = document.querySelector('.footer-links');
    const footerLocation = document.querySelector('.footer-location');

    if (footerLocation) {
        footerLocation.remove(); // Remove o texto de localização
    }

    if (footerLinks) {
        footerLinks.innerHTML = ''; // Limpa os links existentes

        const plataformas = [
            { nome: 'Steam', url: 'https://store.steampowered.com/' },
            { nome: 'PlayStation Store', url: 'https://store.playstation.com/' },
            { nome: 'Xbox Store', url: 'https://www.xbox.com/pt-BR/microsoft-store' },
            { nome: 'Nintendo eShop', url: 'https://www.nintendo.com/pt-br/store/games/' },
            { nome: 'The Game Awards', url: 'https://thegameawards.com'},
        ];

        plataformas.forEach(plataforma => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = plataforma.url;
            a.textContent = plataforma.nome;
            a.target = '_blank'; // Abre em nova aba
            li.appendChild(a);
            footerLinks.appendChild(li);
        });
    }
}

// Adiciona os event listeners
document.addEventListener('DOMContentLoaded', () => {
    carregarGames();
    adicionarIcones(); // Adiciona o ícone do troféu e o favicon
    atualizarRodape(); // Chama a nova função para modificar o rodapé
});
botaoBusca.addEventListener('click', buscarEfiltrarGames);
caixaBusca.addEventListener('input', buscarEfiltrarGames); // <-- Esta linha faz a "auto busca"