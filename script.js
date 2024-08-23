const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após uma tarde explorando o mercado local, você encontra um novo aplicativo que oferece uma imersão completa na cultura de diferentes regiões do Brasil, incluindo histórias, músicas e tradições. Qual seria sua primeira reação?",
        alternativas: [
            {
                texto: "Curiosidade e Exploração",
                afirmacao: "Você fica intrigado com a ideia e decide explorar o aplicativo imediatamente."
            },
            {
                texto: "Ceticismo e Verificação",
                afirmacao: "Você se sente um pouco cético em relação à precisão e autenticidade das informações fornecidas pelo aplicativo. Antes de se envolver mais profundamente, você decide verificar a fonte do conteúdo e comparar com outras fontes confiáveis para garantir que o que está aprendendo é realmente fiel à cultura brasileira."
            }
        ]
    },
    {
        enunciado: " Com a descoberta deste aplicativo, chamado Cultura brasileira 2.0 e uma professora de tecnologias da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso desse aplicativo,Qual atitude você toma?",
        alternativas: [
            {
                texto: "Exploração e Entusiasmo",
                afirmacao: " Você fica empolgado com a ideia de explorar o aplicativo Cultura Brasileira 2.0 e decide mergulhar profundamente em suas funcionalidades. No trabalho, você destaca como o aplicativo pode enriquecer a compreensão das diferentes culturas brasileiras, detalha suas características interativas e propõe maneiras de integrar a tecnologia nas aulas para promover uma aprendizagem mais engajada e imersiva"
            },
            {
                texto: "Análise Crítica e Reflexão",
                afirmacao: "Você decide adotar uma abordagem crítica e analítica em relação ao aplicativo Cultura Brasileira 2.0. Pesquisa não apenas os recursos e benefícios oferecidos, mas também examina possíveis limitações, como a precisão das informações e a dependência da tecnologia para o ensino cultural. Seu trabalho inclui sugestões sobre como usar o aplicativo de forma equilibrada e como complementar a tecnologia com métodos de ensino tradicionais."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a aplicativo impacta o Modo como as pessoas prevem esse aplicativo no futuro, Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Otimismo e Potencial Transformador.",
                afirmacao: "Você argumenta que o aplicativo Cultura Brasileira 2.0 tem o potencial de transformar a forma como as pessoas exploram e compreendem a cultura brasileira. Destaca que, ao oferecer uma experiência imersiva e interativa, o aplicativo pode democratizar o acesso ao conhecimento cultural e engajar um público mais amplo. Você prevê um futuro onde a tecnologia como essa poderá enriquecer a educação e a apreciação cultural de maneiras inovadoras."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
