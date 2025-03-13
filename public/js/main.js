// Questions constants
const question1 = "Quelle est la capitale de la Belgique?";
const options1 = ["Paris", "Bruxelles", "Amsterdam", "Berlin"];

const question2 = "Quel monument emblématique se trouve à Paris, en France?";
const options2 = [
  "Big Ben",
  "La Tour Eiffel",
  "La Sagrada Familia",
  "Le Colisée",
];
const question3 = "Quelle est la capitale de la Pologne?";
const options3 = ["Prague", "Cracovie", "Varsovie", "Vienne"];

const question4 = "Helsinki est la capitale de quel pays?";
const options4 = ["Tchéquie", "Finlande", "Turquie", "Suède"];

const question5 = "Quel pays a pour symbole le coq gaulois?";
const options5 = ["Belgique", "Pologne", "France", "Turquie"];

const question6 = "Quelle est la spécialité culinaire belge?";
const options6 = ["La pizza", "Les sushis", "Les frites", "Le kebab"];

const question7 = "Quelle mer borde la Pologne au nord?";
const options7 = [
  "La mer Méditerranée",
  "La mer Noire",
  "La mer Baltique",
  "La mer du Nord",
];

const question8 =
  "Quel détroit sépare l'Europe de l'Asie et traverse Istanbul?";
const options8 = [
  "Le détroit de Gibraltar",
  "Le détroit du Bosphore",
  "Le détroit de Messine",
  "Le détroit de Béring",
];

const question9 = "Quelle mer borde les côtes de la Turquie?";
const options9 = [
  "La mer Méditerranée",
  "La mer Baltique",
  "La mer du Nord",
  "La mer Caspienne",
];

const question10 =
  "Lequel de ces pays est connu pour ses nombreux lacs et saunas?";
const options10 = ["France", "Belgique", "Turquie", "Finlande"];

//-----------------------------------------------------------------//
// Quizz variables
let title = document.querySelector(".title");
let question = document.querySelector(".question");
let result = document.querySelector(".result");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let add_btn = document.createElement("button");
let questionCount = document.querySelector(".question-count");

// Score variables
let scoreCounter = document.querySelector(".score-counter");
var score = 0;

//-----------------------------------------------------------------//
// Functions
function btnIndice(btn1, btn2, btn3, btn4) {
  btn5.addEventListener("click", () => {
    btn1.classList.add("btn-secondary");
    btn2.classList.add("btn-secondary");
    btn3.classList.add("btn-warning");
    btn4.classList.add("btn-warning");
    btn5.remove();
  });
}

function resetColor(btn1, btn2, btn3, btn4) {
  btn1.className = "btn btn1";
  btn2.className = "btn btn2";
  btn3.className = "btn btn3";
  btn4.className = "btn btn4";
}

function btnResponse(optionNumber) {
  btn1.innerHTML = `${optionNumber[0]}`;
  btn2.innerHTML = `${optionNumber[1]}`;
  btn3.innerHTML = `${optionNumber[2]}`;
  btn4.innerHTML = `${optionNumber[3]}`;
  btn5.innerHTML = `Indice`;
}

function btnGagnant(btnGagnant, btn2, btn3, btn4) {
  btnGagnant.addEventListener("click", () => {
    result.innerHTML = "BRAVOOO!";
    result.hidden = false;

    btnGagnant.hidden = true;
    btn2.hidden = true;
    btn3.hidden = true;
    btn4.hidden = true;
    btn5.hidden = true;
    btn6.hidden = false;
  });
}

function btnPerdant(btnPerdant, btn2, btn3, btn4) {
  btnPerdant.addEventListener("click", () => {
    result.innerHTML = "NUUUUUL!";
    result.hidden = false;

    btnPerdant.hidden = true;
    btn2.hidden = true;
    btn3.hidden = true;
    btn4.hidden = true;
    btn5.hidden = true;
    btn6.hidden = false;
  });
}
//-----------------------------------------------------------------//

// GAME
// username input
// let userInput = prompt("Saisissez votre nom d'utilisateur");
// title.innerHTML = `Bienvenue, ${userInput}`;

// Question
