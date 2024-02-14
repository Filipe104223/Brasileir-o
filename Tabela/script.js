// Dados dos times do Brasileirão (apenas um exemplo)
const times = [
    { posicao: 1, nome: 'Flamengo', pontos: 65, vitorias: 20, empates: 5, derrotas: 3, jogos: 28, cartoes: { amarelos: 30, vermelhos: 2 }, ultimasSequencias: 'VVVVV' },
    { posicao: 2, nome: 'Atlético-MG', pontos: 60, vitorias: 18, empates: 6, derrotas: 4, jogos: 28, cartoes: { amarelos: 25, vermelhos: 1 }, ultimasSequencias: 'VDVVV' },
    { posicao: 3, nome: 'Palmeiras', pontos: 58, vitorias: 17, empates: 7, derrotas: 4, jogos: 28, cartoes: { amarelos: 28, vermelhos: 3 }, ultimasSequencias: 'EDVEV' },
    { posicao: 4, nome: 'Fortaleza', pontos: 54, vitorias: 16, empates: 6, derrotas: 6, jogos: 28, cartoes: { amarelos: 32, vermelhos: 2 }, ultimasSequencias: 'VEVDV' },
    { posicao: 5, nome: 'Internacional', pontos: 52, vitorias: 15, empates: 7, derrotas: 6, jogos: 28, cartoes: { amarelos: 27, vermelhos: 1 }, ultimasSequencias: 'VDVDV' },
    { posicao: 6, nome: 'São Paulo', pontos: 49, vitorias: 13, empates: 10, derrotas: 5, jogos: 28, cartoes: { amarelos: 31, vermelhos: 2 }, ultimasSequencias: 'EVEEV' },
    { posicao: 7, nome: 'Ceará', pontos: 47, vitorias: 13, empates: 8, derrotas: 7, jogos: 28, cartoes: { amarelos: 29, vermelhos: 3 }, ultimasSequencias: 'EVDVE' },
    { posicao: 8, nome: 'Athletico-PR', pontos: 45, vitorias: 12, empates: 9, derrotas: 7, jogos: 28, cartoes: { amarelos: 26, vermelhos: 1 }, ultimasSequencias: 'VDVEE' },
    { posicao: 9, nome: 'Grêmio', pontos: 43, vitorias: 11, empates: 10, derrotas: 7, jogos: 28, cartoes: { amarelos: 24, vermelhos: 2 }, ultimasSequencias: 'EEDVE' },
    { posicao: 10, nome: 'Bahia', pontos: 42, vitorias: 11, empates: 9, derrotas: 8, jogos: 28, cartoes: { amarelos: 28, vermelhos: 1 }, ultimasSequencias: 'EDVDE' },
    { posicao: 11, nome: 'Sport', pontos: 40, vitorias: 10, empates: 10, derrotas: 8, jogos: 28, cartoes: { amarelos: 30, vermelhos: 3 }, ultimasSequencias: 'VDVEE' },
    { posicao: 12, nome: 'Corinthians', pontos: 39, vitorias: 10, empates: 9, derrotas: 9, jogos: 28, cartoes: { amarelos: 26, vermelhos: 1 }, ultimasSequencias: 'VEEDD' },
    { posicao: 13, nome: 'Atlético-GO', pontos: 38, vitorias: 10, empates: 8, derrotas: 10, jogos: 28, cartoes: { amarelos: 29, vermelhos: 2 }, ultimasSequencias: 'VDVDV' },
    { posicao: 14, nome: 'Red Bull Bragantino', pontos: 37, vitorias: 9, empates: 10, derrotas: 9, jogos: 28, cartoes: { amarelos: 27, vermelhos: 2 }, ultimasSequencias: 'EVEDV' },
    { posicao: 15, nome: 'Fluminense', pontos: 36, vitorias: 9, empates: 9, derrotas: 10, jogos: 28, cartoes: { amarelos: 25, vermelhos: 1 }, ultimasSequencias: 'DEVDV' },
    { posicao: 16, nome: 'Juventude', pontos: 35, vitorias: 9, empates: 8, derrotas: 11, jogos: 28, cartoes: { amarelos: 31, vermelhos: 2 }, ultimasSequencias: 'VEDDV' },
    { posicao: 17, nome: 'Santos', pontos: 34, vitorias: 8, empates: 10, derrotas: 10, jogos: 28, cartoes: { amarelos: 26, vermelhos: 3 }, ultimasSequencias: 'DDVVE' },
    { posicao: 18, nome: 'Coritiba', pontos: 33, vitorias: 8, empates: 9, derrotas: 11, jogos: 28, cartoes: { amarelos: 23, vermelhos: 1 }, ultimasSequencias: 'DDEVE' },
    { posicao: 19, nome: 'América-MG', pontos: 32, vitorias: 8, empates: 8, derrotas: 12, jogos: 28, cartoes: { amarelos: 28, vermelhos: 2 }, ultimasSequencias: 'DDEED' },
    { posicao: 20, nome: 'Chapecoense', pontos: 25, vitorias: 6, empates: 7, derrotas: 15, jogos: 28, cartoes: { amarelos: 33, vermelhos: 3 }, ultimasSequencias: 'EEDDD' },
];

// Função para preencher a tabela com os dados dos times
function preencherTabela() {
    const tbody = document.querySelector('#tabela-brasileirao tbody');

    // Limpa o conteúdo atual da tabela
    tbody.innerHTML = '';

    // Preenche a tabela com os dados dos times
    times.forEach(time => {
        const tr = document.createElement('tr');

        const posicaoTd = document.createElement('td');
        posicaoTd.textContent = time.posicao;
        tr.appendChild(posicaoTd);

        const nomeTd = document.createElement('td');
        nomeTd.textContent = time.nome;
        tr.appendChild(nomeTd);

        const pontosTd = document.createElement('td');
        pontosTd.textContent = time.pontos;
        tr.appendChild(pontosTd);

        const vitoriasTd = document.createElement('td');
        vitoriasTd.textContent = time.vitorias;
        tr.appendChild(vitoriasTd);

        const empatesTd = document.createElement('td');
        empatesTd.textContent = time.empates;
        tr.appendChild(empatesTd);

        const derrotasTd = document.createElement('td');
        derrotasTd.textContent = time.derrotas;
        tr.appendChild(derrotasTd);

        const jogosTd = document.createElement('td');
        jogosTd.textContent = time.jogos;
        tr.appendChild(jogosTd);

        const ultimasSequenciasTd = document.createElement('td');
        ultimasSequenciasTd.textContent = time.ultimasSequencias;
        tr.appendChild(ultimasSequenciasTd);

        const cartoesTd = document.createElement('td');
        cartoesTd.textContent = `Amarelos: ${time.cartoes.amarelos}, Vermelhos: ${time.cartoes.vermelhos}`;
        tr.appendChild(cartoesTd);

        tbody.appendChild(tr);
    });
}

// Chama a função para preencher a tabela ao carregar a página
window.onload = preencherTabela;
