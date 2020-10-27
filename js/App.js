let racas = [
    {
        nome: 'Homem-Gosma',
        pontosVida: 10,
        vantagem: 'Se devorar o corpo de um inimigo recupera todos os PV.'
    },
    {
        nome: 'Vagalóide',
        pontosVida: 16,
        vantagem: 'Pode usar sua própria luz em vez de tocha, mas gasta 2 PV para cada uso.'
    },
    {
        nome: 'Fada',
        pontosVida: 8,
        vantagem: 'Começa o jogo com 4 Magias Básicas e 2 tesouros aleatórios.'
    },
    {
        nome: 'Gnomo',
        pontosVida: 14,
        vantagem: 'Começa o jogo com 3 Magias Básicas.'
    },
    {
        nome: 'Elfo',
        pontosVida: 17,
        vantagem: 'Começa o jogo com 1 Magia Básica.'
    },
    {
        nome: 'Humano',
        pontosVida: 20,
        vantagem: ''
    },
    {
        nome: 'Anão',
        pontosVida: 18,
        vantagem: 'Quando for rolar para Achar Passagens Secretas , role dois dados e descarte o menor.'
    },
    {
        nome: 'Pequenino',
        pontosVida: 14,
        vantagem: 'Não precisa rolar dado quando Mover em Silêncio . Monstro não te notam (exceto o Chefe!).'
    },
    {
        nome: 'Povo-Gato',
        pontosVida: 19,
        vantagem: 'Pode vender equipamento na cidade pelo dobro do valor.'
    },
    {
        nome: 'Rinoceróide',
        pontosVida: 24,
        vantagem: 'Pode atacar com seu chifre (Dano 1d6).'
    },
    {
        nome: 'Meio-Dragão',
        pontosVida: 30,
        vantagem: 'Começa com 3 Bolas de Fogo.'
    }
];

let classes = [
    {
        nome: 'Mendigo',
        pontosVida: 4,
        vantagem: 'Nenhuma.',
        armaInicial: 'Pedaço de Pau',
        danoArmaInicial: '1d6-2'
    },
    {
        nome: 'Coveiro',
        pontosVida: 2,
        vantagem: 'Causa +2 de dano em Mortos-Vivos.',
        armaInicial: 'Pá',
        danoArmaInicial: '1d6-1'
    },
    {
        nome: 'Nobre',
        pontosVida: 0,
        vantagem: 'Começa o jogo com 1 Magia Básica.',
        armaInicial: 'Rapieira',
        danoArmaInicial: '1d6+1'
    },
    {
        nome: 'Estudante',
        pontosVida: 0,
        vantagem: 'Começa o jogo com 3 Magias Básicas.',
        armaInicial: 'Adaga',
        danoArmaInicial: '1d6-1'
    },
    {
        nome: 'Ferreiro',
        pontosVida: 4,
        vantagem: 'Pode recuperar armaduras gastando 1 Tocha.',
        armaInicial: 'Martelo',
        danoArmaInicial: '1d6'
    },
    {
        nome: 'Guarda',
        pontosVida: 4,
        vantagem: 'Nenhuma.',
        armaInicial: 'Espada Curta',
        danoArmaInicial: '1d6'
    },
    {
        nome: 'Cozinheiro',
        pontosVida: 2,
        vantagem: 'Ganha 1 Provisão por monstro (que não seja morto-vivo).',
        armaInicial: 'Cutelo',
        danoArmaInicial: '1d6'
    },
    {
        nome: 'Chaveiro',
        pontosVida: 2,
        vantagem: 'Não gasta tochas quando Abrir Fechaduras.',
        armaInicial: 'Adaga',
        danoArmaInicial: '1d6-1'
    },
    {
        nome: 'Lenhador',
        pontosVida: 4,
        vantagem: 'Nenhuma.',
        armaInicial: 'Machado de Lenhador',
        danoArmaInicial: '1d6'
    },
    {
        nome: 'Minerador',
        pontosVida: 4,
        vantagem: 'Se acabar as tochas, pode mover 3 salas vazias.',
        armaInicial: 'Cutelo',
        danoArmaInicial: '1d6'
    },
    {
        nome: 'Gladiador',
        pontosVida: 6,
        vantagem: 'Nenhuma',
        armaInicial: 'Espada Curta',
        danoArmaInicial: '1d6'
    },
];

let jogador = {
    nome: '',
    raca: {},
    classe: {},
    pontosVidaTotal: 0,
    armaEquipada: '',
    danoAtual: 0,
    totalTochas: 0,
    mochila: []
};

function rolarDados(quantidade, modificador) {
    let resultado = 0;
    let resultadoTexto = 'Rolagem:';
    for(let c = 1; c <= quantidade; c++){
        let dado = Math.floor(Math.random() * 6) + 1;
        resultadoTexto += ` d${c}=${dado} `;
        resultado += dado;
    }
    return [resultado+modificador, resultadoTexto+` + ${modificador}`];
}

function criarPersonagem(dadoRaca, dadoClasse){
    console.log(`Para raça tirou no 2d6: ${dadoRaca[0]}`);
    console.log(`Para classe tirou no 2d6: ${dadoClasse[0]}`);
    jogador.raca = racas[dadoRaca[0]];
    jogador.classe = classes[dadoClasse[0]];
    jogador.pontosVidaTotal = jogador.raca.pontosVida + jogador.classe.pontosVida;
    jogador.armaEquipada = jogador.classe.armaInicial;
    jogador.totalTochas = 10;
}

function renderizar(){
    $('#ficha-raca-personagem').text(jogador.raca.nome)
    $('#ficha-classe-personagem').text(jogador.classe.nome)
}

function start(){
    $('#start-screen').addClass('d-none');
    $('#loading-screen').removeClass('d-none');
    setTimeout(() => {
        criarPersonagem(rolarDados(2,0), rolarDados(2,0));
        $('#loading-screen').addClass('d-none');
        $('#game-screen').removeClass('d-none');
        renderizar();
    }, 3000);    
}

$(document).ready(() => {
});

