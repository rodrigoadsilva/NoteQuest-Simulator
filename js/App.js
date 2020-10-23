let racas = [
    {
        raca: 'Homem-Gosma',
        pontosVida: 10,
        vantagem: 'Se devorar o corpo de um inimigo recupera todos os PV.'
    },
    {
        raca: 'Vagalóide',
        pontosVida: 16,
        vantagem: 'Pode usar sua própria luz em vez de tocha, mas gasta 2 PV para cada uso.'
    },
    {
        raca: 'Fada',
        pontosVida: 8,
        vantagem: 'Começa o jogo com 4 Magias Básicas e 2 tesouros aleatórios.'
    },
    {
        raca: 'Gnomo',
        pontosVida: 14,
        vantagem: 'Começa o jogo com 3 Magias Básicas.'
    },
    {
        raca: 'Elfo',
        pontosVida: 17,
        vantagem: 'Começa o jogo com 1 Magia Básica.'
    },
    {
        raca: 'Humano',
        pontosVida: 20,
        vantagem: ''
    },
    {
        raca: 'Anão',
        pontosVida: 18,
        vantagem: 'Quando for rolar para Achar Passagens Secretas , role dois dados e descarte o menor.'
    },
    {
        raca: 'Pequenino',
        pontosVida: 14,
        vantagem: 'Não precisa rolar dado quando Mover em Silêncio . Monstro não te notam (exceto o Chefe!).'
    },
    {
        raca: 'Povo-Gato',
        pontosVida: 19,
        vantagem: 'Pode vender equipamento na cidade pelo dobro do valor.'
    },
    {
        raca: 'Rinoceróide',
        pontosVida: 24,
        vantagem: 'Pode atacar com seu chifre (Dano 1d6).'
    },
    {
        raca: 'Meio-Dragão',
        pontosVida: 30,
        vantagem: 'Começa com 3 Bolas de Fogo.'
    }
];

let classes = [
    {
        classe: 'Mendigo',
        pontosVida: 4,
        vantagem: 'Nenhuma.',
        armaInicial: 'Pedaço de Pau',
        danoArmaInicial: '1d6-2'
    },
    {
        classe: 'Coveiro',
        pontosVida: 2,
        vantagem: 'Causa +2 de dano em Mortos-Vivos.',
        armaInicial: 'Pá',
        danoArmaInicial: '1d6-1'
    },
    {
        classe: 'Nobre',
        pontosVida: 0,
        vantagem: 'Começa o jogo com 1 Magia Básica.',
        armaInicial: 'Rapieira',
        danoArmaInicial: '1d6+1'
    },
    {
        classe: 'Estudante',
        pontosVida: 0,
        vantagem: 'Começa o jogo com 3 Magias Básicas.',
        armaInicial: 'Adaga',
        danoArmaInicial: '1d6-1'
    },
    {
        classe: 'Ferreiro',
        pontosVida: 4,
        vantagem: 'Pode recuperar armaduras gastando 1 Tocha.',
        armaInicial: 'Martelo',
        danoArmaInicial: '1d6'
    },
    {
        classe: 'Guarda',
        pontosVida: 4,
        vantagem: 'Nenhuma.',
        armaInicial: 'Espada Curta',
        danoArmaInicial: '1d6'
    },
    {
        classe: 'Cozinheiro',
        pontosVida: 2,
        vantagem: 'Ganha 1 Provisão por monstro (que não seja morto-vivo).',
        armaInicial: 'Cutelo',
        danoArmaInicial: '1d6'
    },
    {
        classe: 'Chaveiro',
        pontosVida: 2,
        vantagem: 'Não gasta tochas quando Abrir Fechaduras.',
        armaInicial: 'Adaga',
        danoArmaInicial: '1d6-1'
    },
    {
        classe: 'Lenhador',
        pontosVida: 4,
        vantagem: 'Nenhuma.',
        armaInicial: 'Machado de Lenhador',
        danoArmaInicial: '1d6'
    },
    {
        classe: 'Minerador',
        pontosVida: 4,
        vantagem: 'Se acabar as tochas, pode mover 3 salas vazias.',
        armaInicial: 'Cutelo',
        danoArmaInicial: '1d6'
    },
    {
        classe: 'Gladiador',
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

$(document).ready(() => {
    criarPersonagem(rolarDados(2,0), rolarDados(2,0));
});

