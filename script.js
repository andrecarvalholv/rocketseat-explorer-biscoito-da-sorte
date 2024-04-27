// Variables
const closedCookie = document.querySelector('#closed-cookie')
const closedCard = document.querySelector('.closed-card')
const openedCard = document.querySelector('.opened-card')
const tryAgainButton = document.querySelector('#try-again-button')
const textFortune = document.querySelector('.opened-card p')

const fortuneMessages = [
    "A vida trará coisas boas se tiveres paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "Não há que ser forte. Há que ser flexível.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "A vida reserva sempre coisas boas para quem dela sabe cuidar.",
    "A sorte favorece a mente preparada.",
    "O segredo do sucesso é a constância no objetivo.",
    "Nada acontece a menos que sonhemos antes.",
    "Grandes realizações nascem de grandes expectativas.",
    "Acredite: você é capaz de alcançar seus sonhos.",
    "Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.",
    "A felicidade não está em fazer o que a gente quer, e sim querer o que a gente faz.",
    "O que não provoca minha morte faz com que eu fique mais forte.",
    "É melhor conquistar a si mesmo do que vencer mil batalhas.",
];

let aleatoryIndex = 0

// Events
closedCookie.addEventListener('click', showFortune)
tryAgainButton.addEventListener('click', tryOtherFortune)


// Functions
function showFortune() {

    hideClass()

    aleatoryIndex = Math.round(Math.random() * (fortuneMessages.length - 1)) // Número aleatório entre 0 e 5, índices do array de 6 mensagens
    let fortune = fortuneMessages[aleatoryIndex]

    // openedCard.querySelector('p').textContent = fortune; Poderia também fazer dessa forma para aparecer o texto
    textFortune.innerText = fortune

    //console.log(aleatoryIndex)
}

function tryOtherFortune() {
    hideClass()
    aleatoryIndex = 0

   // console.log(aleatoryIndex)
}

function hideClass() {
    closedCard.classList.toggle('hide')
    openedCard.classList.toggle('hide')
}