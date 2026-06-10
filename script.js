// ========== PERGUNTAS DO QUIZ (20 perguntas) ==========
const perguntas = [
    "O que são nascentes?",
    "Qual é a principal causa da poluição dos rios no campo?",
    "O que é mata ciliar?",
    "Por que não devemos jogar lixo nos rios?",
    "O que ajuda a proteger as nascentes?",
    "O que os agrotóxicos podem causar nos rios?",
    "Qual atitude é sustentável para proteger rios?",
    "O que acontece quando uma nascente é poluída?",
    "Qual cor representa a água no nosso projeto?",
    "O que podemos plantar para proteger os rios?",
    "O que significa 'Guardiões da Natureza'?",
    "Onde o lixo plástico no rio pode parar?",
    "Qual é um exemplo de descarte correto do lixo?",
    "O que os peixes sofrem com a poluição?",
    "O que podemos fazer para economizar água?",
    "Qual é o papel da agricultura sustentável?",
    "O que é um rio vivo?",
    "Por que as queimadas perto dos rios são perigosas?",
    "O que fazer ao ver alguém poluindo um rio?",
    "Qual é o futuro se cuidarmos bem dos rios?"
];

const alternativas = [
    ["Local onde a água brota da terra", "Lago artificial", "Cachoeira gigante"],
    ["Lixo e agrotóxicos", "Muita chuva", "Peixes demais"],
    ["Vegetação nas margens do rio", "Tipo de peixe", "Muro de contenção"],
    ["Polui a água e mata animais", "Deixa o rio mais forte", "Ajuda a nascente"],
    ["Plantar árvores ao redor", "Jogar lixo perto", "Cimentar a nascente"],
    ["Contaminar a água", "Deixar mais limpa", "Ajudar os peixes"],
    ["Coletar lixo do rio", "Usar muita água", "Queimar margens"],
    ["A água some ou fica suja", "Fica mais bonita", "Nasce mais água"],
    ["Azul", "Vermelho", "Preto"],
    ["Árvores nativas", "Cactos", "Capim seco"],
    ["Protetores da natureza", "Caçadores", "Fábricas"],
    ["No estômago de animais", "Vira areia", "Desaparece"],
    ["Lixeira e coleta seletiva", "Rio abaixo", "Queimando"],
    ["Morrem ou ficam doentes", "Ficam felizes", "Nadam mais rápido"],
    ["Fechar torneira e reutilizar", "Deixar aberta", "Lavar calçada todo dia"],
    ["Produzir sem poluir rios", "Usar muito veneno", "Desviar nascentes"],
    ["Com água limpa e vida", "Morto e sujo", "Seco demais"],
    ["Destroem a vegetação e matam nascentes", "Ajudam a limpar", "Fazem bem à água"],
    ["Denunciar e conscientizar", "Ignorar", "Ajudar a poluir"],
    ["Rios limpos e natureza saudável", "Rios poluídos", "Secas extremas"]
];

// Respostas corretas (índice 0 = primeira alternativa correta)
const respostasCorretas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// ========== CARREGAR QUIZ ==========
const quizContainer = document.getElementById('quizContainer');

function carregarQuiz() {
    quizContainer.innerHTML = '';
    for (let i = 0; i < perguntas.length; i++) {
        const divPergunta = document.createElement('div');
        divPergunta.className = 'pergunta';
        divPergunta.innerHTML = `
            <p><strong>${i+1}. ${perguntas[i]}</strong></p>
            <div class="opcoes" id="opcoes-${i}"></div>
        `;
        quizContainer.appendChild(divPergunta);
        
        const opcoesDiv = divPergunta.querySelector(`.opcoes`);
        alternativas[i].forEach((alt, idx) => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="radio" name="pergunta${i}" value="${idx}"> ${alt}`;
            opcoesDiv.appendChild(label);
        });
    }
}

// ========== CORRIGIR QUIZ ==========
function corrigirQuiz() {
    let acertos = 0;
    for (let i = 0; i < perguntas.length; i++) {
        const selecionado = document.querySelector(`input[name="pergunta${i}"]:checked`);
        if (selecionado && parseInt(selecionado.value) === respostasCorretas[i]) {
            acertos++;
        }
    }
    
    const resultadoDiv = document.getElementById('resultado');
    let mensagem = "";
    
    if (acertos === 20) {
        mensagem = "🏆 PERFEITO! Você é um verdadeiro Guardião da Natureza! 🌟🌟🌟";
    } else if (acertos >= 15) {
        mensagem = "🌿 Muito bom! Você já sabe bastante sobre proteger os rios! Continue assim! 💚";
    } else if (acertos >= 10) {
        mensagem = "💙 Bom trabalho! Leia as dicas do site e tente novamente para se tornar um Guardião! 🌱";
    } else {
        mensagem = "🌊 Vamos aprender mais? Explore as seções do site e depois refaça o quiz! Você consegue! 💪";
    }
    
    resultadoDiv.innerHTML = `📊 Você acertou ${acertos} de ${perguntas.length} perguntas!<br>${mensagem}`;
    
    // Rolar suavemente para o resultado
    resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ========== EVENTOS ==========
document.getElementById('corrigirQuiz').addEventListener('click', corrigirQuiz);

// Botão iniciar - rola para o quiz
document.getElementById('botaoIniciar').addEventListener('click', () => {
    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
});

// ========== ACESSIBILIDADE: AUMENTAR/DIMINUIR FONTE ==========
let tamanhoAtual = 0; // 0=normal, 1=grande, 2=maior
const corpo = document.getElementById('corpo');

function atualizarFonte() {
    corpo.classList.remove('fonte-normal', 'fonte-grande', 'fonte-maior');
    if (tamanhoAtual === 0) corpo.classList.add('fonte-normal');
    else if (tamanhoAtual === 1) corpo.classList.add('fonte-grande');
    else corpo.classList.add('fonte-maior');
}

document.getElementById('aumentarFonte').addEventListener('click', () => {
    if (tamanhoAtual < 2) tamanhoAtual++;
    atualizarFonte();
});

document.getElementById('diminuirFonte').addEventListener('click', () => {
    if (tamanhoAtual > 0) tamanhoAtual--;
    atualizarFonte();
});

// ========== ACESSIBILIDADE: ALTO CONTRASTE ==========
const btnContraste = document.getElementById('altoContraste');
let contrasteAtivo = false;

btnContraste.addEventListener('click', () => {
    if (!contrasteAtivo) {
        corpo.classList.add('alto-contraste');
        contrasteAtivo = true;
        btnContraste.textContent = '🌓 Normal';
    } else {
        corpo.classList.remove('alto-contraste');
        contrasteAtivo = false;
        btnContraste.textContent = '🌓 Contraste';
    }
});

// ========== INICIALIZAÇÃO ==========
carregarQuiz();
atualizarFonte();

// Mensagem de boas-vindas no console (para desenvolvedores)
console.log("🌿 Guardiões da Natureza - Proteja os rios e nascentes! 💧");
