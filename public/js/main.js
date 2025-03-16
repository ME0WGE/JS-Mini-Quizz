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
let btn7 = document.querySelector(".btn7");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");
let btn10 = document.querySelector(".btn10");
let btn11 = document.querySelector(".btn11");
let btn12 = document.querySelector(".btn12");
let btn13 = document.querySelector(".btn13");
let btn14 = document.querySelector(".btn14");
let btn15 = document.querySelector(".btn15");
let add_btn = document.createElement("button");
let questionCount = document.querySelector(".question-count");

// Score variables
let scoreCounter = document.querySelector(".score-counter");
let score = 0;

//-----------------------------------------------------------------//
// Functions
function btnIndice(btnSecondary1, btnSecondary2, btnWarning1, btnWarning2) {
  btn5.addEventListener("click", () => {
    btnSecondary1.classList.add("btn-secondary");
    btnSecondary2.classList.add("btn-secondary");
    btnWarning1.classList.add("btn-warning");
    btnWarning2.classList.add("btn-warning");
    btn5.remove();
  });
}

function resetButtons() {
  btn1.className = "btn btn1";
  btn2.className = "btn btn2";
  btn3.className = "btn btn3";
  btn4.className = "btn btn4";

  btn5.hidden = false;
}

function btnResponse(optionNumber) {
  btn1.innerHTML = `${optionNumber[0]}`;
  btn2.innerHTML = `${optionNumber[1]}`;
  btn3.innerHTML = `${optionNumber[2]}`;
  btn4.innerHTML = `${optionNumber[3]}`;
  btn5.innerHTML = `Indice`;
}

function btnGagnant(btnGagnant, btn2, btn3, btn4, btnContinuer) {
  btnGagnant.addEventListener("click", () => {
    score++;
    scoreCounter.innerHTML = `${score}`;

    result.innerHTML = "BRAVOOO!";
    result.hidden = false;

    btnGagnant.hidden = true;
    btn2.hidden = true;
    btn3.hidden = true;
    btn4.hidden = true;
    btn5.hidden = true;

    btnContinuer.hidden = false;
  });
}

function btnPerdant(btnPerdant, btn2, btn3, btn4, btnContinuer) {
  btnPerdant.addEventListener("click", () => {
    result.innerHTML = "NUUUUUL!";
    result.hidden = false;

    btnPerdant.hidden = true;
    btn2.hidden = true;
    btn3.hidden = true;
    btn4.hidden = true;
    btn5.hidden = true;

    btnContinuer.hidden = false;
  });
}

function questionSelector(
  questionText,
  options,
  btnGG,
  questionNum,
  btnContinuer
) {
  questionCount.innerHTML = `Question ${questionNum}`;
  question.innerHTML = questionText;

  resetButtons();
  btnResponse(options);
  result.hidden = true;
  btn6.hidden = true;

  btn1.hidden = false;
  btn2.hidden = false;
  btn3.hidden = false;
  btn4.hidden = false;

  if (btnGG === 1) {
    btnGagnant(btn1, btn2, btn3, btn4, btnContinuer);
    btnPerdant(btn2, btn1, btn3, btn4, btnContinuer);
    btnPerdant(btn3, btn1, btn2, btn4, btnContinuer);
    btnPerdant(btn4, btn1, btn2, btn3, btnContinuer);
  } else if (btnGG === 2) {
    btnPerdant(btn1, btn2, btn3, btn4, btnContinuer);
    btnGagnant(btn2, btn1, btn3, btn4, btnContinuer);
    btnPerdant(btn3, btn1, btn2, btn4, btnContinuer);
    btnPerdant(btn4, btn1, btn2, btn3, btnContinuer);
  } else if (btnGG === 3) {
    btnPerdant(btn1, btn2, btn3, btn4, btnContinuer);
    btnPerdant(btn2, btn1, btn3, btn4, btnContinuer);
    btnGagnant(btn3, btn1, btn2, btn4, btnContinuer);
    btnPerdant(btn4, btn1, btn2, btn3, btnContinuer);
  } else if (btnGG === 4) {
    btnPerdant(btn1, btn2, btn3, btn4, btnContinuer);
    btnPerdant(btn2, btn1, btn3, btn4, btnContinuer);
    btnPerdant(btn3, btn1, btn2, btn4, btnContinuer);
    btnGagnant(btn4, btn1, btn2, btn3, btnContinuer);
  }
}

btn7.hidden = true;
btn8.hidden = true;
btn9.hidden = true;
btn10.hidden = true;
btn11.hidden = true;
btn12.hidden = true;
btn13.hidden = true;
btn14.hidden = true;
btn15.hidden = true;
//-----------------------------------------------------------------//

// GAME
// username input
// let userInput = prompt("Saisissez votre nom d'utilisateur");
// title.innerHTML = `Bienvenue, ${userInput}`;

// Score
scoreCounter.innerHTML = `${score}`;

// Question 1
btnIndice(btn1, btn4, btn2, btn3);
questionSelector(question1, options1, 2, 1, btn6);
resetButtons();
// Question 2
btn6.addEventListener("click", () => {
  // btnIndice(btn1, btn4, btn2, btn3);
  questionSelector(question2, options2, 2, 2, btn7);
  btn6.remove();
});
// Question 3
btn7.addEventListener("click", () => {
  // btnIndice(btn1, btn3, btn2, btn4);
  questionSelector(question3, options3, 3, 3, btn8);
  btn7.remove();
});
// Question 4
btn8.addEventListener("click", () => {
  // btnIndice(btn1, btn3, btn2, btn4);
  questionSelector(question4, options4, 2, 4, btn9);
  btn8.remove();
});
// Question 5
btn9.addEventListener("click", () => {
  // btnIndice(btn1, btn3, btn2, btn4);
  questionSelector(question5, options5, 3, 5, btn10);
  btn9.remove();
});
// Question 6
btn10.addEventListener("click", () => {
  // btnIndice(btn1, btn3, btn2, btn4);
  questionSelector(question6, options6, 3, 6, btn11);
  btn10.remove();
});
// Question 7
btn11.addEventListener("click", () => {
  // btnIndice(btn1, btn3, btn2, btn4);
  questionSelector(question7, options7, 3, 7, btn12);
  btn11.remove();
});
// Question 8
btn12.addEventListener("click", () => {
  // btnIndice(btn1, btn3, btn2, btn4);
  questionSelector(question8, options8, 2, 8, btn13);
  btn12.remove();
});
// Question 9
btn13.addEventListener("click", () => {
  // btnIndice(btn1, btn3, btn2, btn4);
  questionSelector(question9, options9, 1, 9, btn14);
  btn13.remove();
});
// Question 10
btn14.addEventListener("click", () => {
  // btnIndice(btn1, btn3, btn2, btn4);
  questionSelector(question10, options10, 4, 10, null);
  btn14.remove();
});
