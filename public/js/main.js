const question1 = "Quelle est la capitale de la Belgique?";
const options1 = ["Paris", "Bruxelles", "Amsterdam", "Berlin"];

const question2 = "Quel monument emblématique se trouve à Paris, en France?";
const options2 = "Big Ben, La Tour Eiffel, La Sagrada Familia, Le Colisée";

const question3 = "Quelle est la capitale de la Pologne?";
const options3 = "Prague, Cracovie, Varsovie, Vienne";

const question4 = "Helsinki est la capitale de quel pays?";
const options4 = "Tchéquie, Finlande, Turquie, Suède";

const question5 = "Quel pays a pour symbole le coq gaulois?";
const options5 = "Belgique, Pologne, France, Turquie";

const question6 = "Quelle est la spécialité culinaire belge?";
const options6 = "La pizza, Les sushis, Les frites, Le kebab";

const question7 = "Quelle mer borde la Pologne au nord?";
const options7 =
  "La mer Méditerranée, La mer Noire, La mer Baltique, La mer du Nord";

const question8 =
  "Quel détroit sépare l'Europe de l'Asie et traverse Istanbul?";
const options8 =
  "Le détroit de Gibraltar, Le détroit du Bosphore, Le détroit de Messine, Le détroit de Béring";

const question9 = "Quelle mer borde les côtes de la Turquie?";
const options9 =
  "La mer Méditerranée, La mer Baltique, La mer du Nord, La mer Caspienne";

const question10 =
  "Lequel de ces pays est connu pour ses nombreux lacs et saunas?";
const options10 = "France, Belgique, Turquie, Finlande";

// Quizz variables
let title = document.querySelector(".title");
let question = document.querySelector(".question");
let indice = document.querySelector(".indice");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let quesionCount = document.querySelector(".question-count");
// Score variables
let scoreCounter = document.querySelector(".score-counter");
let score = 0;
//-----------------------------------------------------------------//
// let userInput = prompt("Saisissez votre nom d'utilisateur")
// title.innerHTML = `Bienvenue, ${userInput}`;

// Question 1
question.innerHTML = `Question 1: ${question1}`;
indice.innerHTML = `Indice:`;
indice.hidden = true;

btn1.innerHTML = `${options1[0]}`;
btn2.innerHTML = `${options1[1]}`;
btn3.innerHTML = `${options1[2]}`;
btn4.innerHTML = `${options1[3]}`;
btn5.innerHTML = `Indice`;

btn5.addEventListener("click", () => {
  btn1.classList.add("btn-secondary");
  btn2.classList.add("btn-warning");
  btn3.classList.add("btn-warning");
  btn4.classList.add("btn-secondary");
});
