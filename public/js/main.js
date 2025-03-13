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

// Question 1
scoreCounter.innerHTML = `${score}`;
questionCount.innerHTML = "Question 1";
result.hidden = true;
btn6.hidden = true;

question.innerHTML = `${question1}`;
btnResponse(options1);
btnIndice(btn1, btn4, btn2, btn3);

if (btnGagnant(btn2, btn1, btn3, btn4)) {
} else if (btnPerdant(btn1, btn2, btn3, btn4)) {
} else if (btnPerdant(btn3, btn4, btn2, btn1)) {
} else if (btnPerdant(btn4, btn3, btn2, btn1)) {
}
btn6.addEventListener("click", () => {
  // Question 2
  question.innerHTML = `${question2}`;
  btnResponse(options2);
  btnIndice(btn1, btn4, btn2, btn3);

  btn1.hidden = false;
  btn2.hidden = false;
  btn3.hidden = false;
  btn4.hidden = false;
  btn5.hidden = false;

  questionCount.innerHTML = "Question 2";
  result.hidden = true;
  btn6.hidden = true;

  if (btnGagnant(btn2, btn1, btn3, btn4)) {
  } else if (btnPerdant(btn1, btn2, btn3, btn4)) {
  } else if (btnPerdant(btn3, btn4, btn2, btn1)) {
  } else if (btnPerdant(btn4, btn3, btn2, btn1)) {
  }

  btn6.addEventListener("click", () => {
    // Question 3
    question.innerHTML = `${question3}`;
    btnResponse(options3);
    btnIndice(btn1, btn4, btn2, btn3);

    btn1.hidden = false;
    btn2.hidden = false;
    btn3.hidden = false;
    btn4.hidden = false;
    btn5.hidden = false;

    questionCount.innerHTML = "Question 3";
    result.hidden = true;
    btn6.hidden = true;

    if (btnGagnant(btn3, btn1, btn2, btn4)) {
    } else if (btnPerdant(btn1, btn2, btn3, btn4)) {
    } else if (btnPerdant(btn2, btn4, btn3, btn1)) {
    } else if (btnPerdant(btn4, btn3, btn2, btn1)) {
    }

    btn6.addEventListener("click", () => {
      // Question 4
      question.innerHTML = `${question4}`;
      btnResponse(options4);
      btnIndice(btn1, btn4, btn2, btn3);

      btn1.hidden = false;
      btn2.hidden = false;
      btn3.hidden = false;
      btn4.hidden = false;
      btn5.hidden = false;

      questionCount.innerHTML = "Question 4";
      result.hidden = true;
      btn6.hidden = true;

      if (btnGagnant(btn2, btn1, btn3, btn4)) {
      } else if (btnPerdant(btn1, btn2, btn3, btn4)) {
      } else if (btnPerdant(btn3, btn4, btn2, btn1)) {
      } else if (btnPerdant(btn4, btn3, btn2, btn1)) {
      }

      btn6.addEventListener("click", () => {
        // Question 5
        question.innerHTML = `${question5}`;
        btnResponse(options5);
        btnIndice(btn1, btn4, btn2, btn3);

        btn1.hidden = false;
        btn2.hidden = false;
        btn3.hidden = false;
        btn4.hidden = false;
        btn5.hidden = false;

        questionCount.innerHTML = "Question 5";
        result.hidden = true;
        btn6.hidden = true;

        if (btnGagnant(btn3, btn1, btn2, btn4)) {
        } else if (btnPerdant(btn1, btn2, btn3, btn4)) {
        } else if (btnPerdant(btn2, btn4, btn3, btn1)) {
        } else if (btnPerdant(btn4, btn3, btn2, btn1)) {
        }

        btn6.addEventListener("click", () => {
          // Question 6
          question.innerHTML = `${question6}`;
          btnResponse(options6);
          btnIndice(btn1, btn4, btn2, btn3);

          btn1.hidden = false;
          btn2.hidden = false;
          btn3.hidden = false;
          btn4.hidden = false;
          btn5.hidden = false;

          questionCount.innerHTML = "Question 6";
          result.hidden = true;
          btn6.hidden = true;

          if (btnGagnant(btn3, btn1, btn2, btn4)) {
          } else if (btnPerdant(btn1, btn2, btn3, btn4)) {
          } else if (btnPerdant(btn2, btn4, btn3, btn1)) {
          } else if (btnPerdant(btn4, btn3, btn2, btn1)) {
          }

          btn6.addEventListener("click", () => {
            // Question 7
            question.innerHTML = `${question7}`;
            btnResponse(options7);
            btnIndice(btn1, btn4, btn2, btn3);

            btn1.hidden = false;
            btn2.hidden = false;
            btn3.hidden = false;
            btn4.hidden = false;
            btn5.hidden = false;

            questionCount.innerHTML = "Question 7";
            result.hidden = true;
            btn6.hidden = true;

            if (btnGagnant(btn3, btn1, btn2, btn4)) {
            } else if (btnPerdant(btn1, btn2, btn3, btn4)) {
            } else if (btnPerdant(btn2, btn4, btn3, btn1)) {
            } else if (btnPerdant(btn4, btn3, btn2, btn1)) {
            }

            btn6.addEventListener("click", () => {
              // Question 8
              question.innerHTML = `${question8}`;
              btnResponse(options8);
              btnIndice(btn1, btn4, btn2, btn3);

              btn1.hidden = false;
              btn2.hidden = false;
              btn3.hidden = false;
              btn4.hidden = false;
              btn5.hidden = false;

              questionCount.innerHTML = "Question 8";
              result.hidden = true;
              btn6.hidden = true;

              if (btnGagnant(btn2, btn1, btn2, btn4)) {
              } else if (btnPerdant(btn1, btn2, btn3, btn4)) {
              } else if (btnPerdant(btn3, btn4, btn2, btn1)) {
              } else if (btnPerdant(btn4, btn3, btn2, btn1)) {
              }

              btn6.addEventListener("click", () => {
                // Question 9
                question.innerHTML = `${question9}`;
                btnResponse(options9);
                btnIndice(btn1, btn4, btn2, btn3);

                btn1.hidden = false;
                btn2.hidden = false;
                btn3.hidden = false;
                btn4.hidden = false;
                btn5.hidden = false;

                questionCount.innerHTML = "Question 9";
                result.hidden = true;
                btn6.hidden = true;

                if (btnGagnant(btn1, btn1, btn2, btn4)) {
                } else if (btnPerdant(btn2, btn1, btn3, btn4)) {
                } else if (btnPerdant(btn3, btn4, btn2, btn1)) {
                } else if (btnPerdant(btn4, btn3, btn2, btn1)) {
                }

                btn6.addEventListener("click", () => {
                  // Question 10
                  question.innerHTML = `${question10}`;
                  btnResponse(options10);
                  btnIndice(btn1, btn4, btn2, btn3);

                  btn1.hidden = false;
                  btn2.hidden = false;
                  btn3.hidden = false;
                  btn4.hidden = false;
                  btn5.hidden = false;

                  questionCount.innerHTML = "Question 10";
                  result.hidden = true;
                  btn6.hidden = true;

                  if (btnGagnant(btn4, btn1, btn2, btn4)) {
                  } else if (btnPerdant(btn1, btn2, btn3, btn4)) {
                  } else if (btnPerdant(btn3, btn4, btn2, btn1)) {
                  } else if (btnPerdant(btn2, btn3, btn4, btn1)) {
                  }
                });
              });
            });
          });
        });
      });
    });
  });
});
