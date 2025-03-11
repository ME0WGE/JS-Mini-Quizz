/*
Logic of the program:
 -  Stock 10 questions in an array
 -  Score of 10 system
 -  5 countries
*/

const question1 = "Quelle est la capitale de la Belgique?";
const options1 = "Paris, Bruxelles, Amsterdam, Berlin";

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

let score = 0;

// Code
alert("Bienvenue dans le Quizz sur les Pays!");

// Question 1
let question = prompt(`Question 1: ${question1}
Options: ${options1}`);
if (question != "Bruxelles") {
  alert("Nop!");
} else {
  score++;
  alert(`Bravo!`);
}

// Question 2
question = prompt(`Question 2: ${question2}
Options: ${options2}`);
if (question != "La Tour Eiffel") {
  alert("Nop!");
} else {
  score++;
  alert("Bravo!");
}

// Question 3
question = prompt(`Question 3: ${question3}
Options: ${options3}`);
if (question != "Varsovie") {
  alert("Nop!");
} else {
  score++;
  alert("Bravo!");
}

// Question 4
question = prompt(`Question 4: ${question4}
    Options: ${options4}`);
if (question != "Finlande") {
  alert("Nop!");
} else {
  score++;
  alert("Bravo!");
}

// Question 5
question = prompt(`Question 5: ${question5}
Options: ${options5}`);
if (question != "France") {
  alert("Nop!");
} else {
  score++;
  alert("Bravo!");
}

// Question 6
question = prompt(`Question 6: ${question6}
Options: ${options6}`);
if (question != "Les frites") {
  alert("Nop!");
} else {
  score++;
  alert("Bravo!");
}

// Question 7
question = prompt(`Question 7: ${question7}
Options: ${options7}`);
if (question != "La mer Baltique") {
  alert("Nop!");
} else {
  score++;
  alert("Bravo!");
}

// Question 8
question = prompt(`Question 8: ${question8}
Options: ${options8}`);
if (question != "Le détroit du Bosphore") {
  alert("Nop!");
} else {
  score++;
  alert("Bravo!");
}

// Question 9
question = prompt(`Question 9: ${question9}
Options: ${options9}`);
if (question != "La mer Méditerranée") {
  alert("Nop!");
} else {
  score++;
  alert("Bravo!");
}

// Question 10
question = prompt(`Question 10: ${question10}
Options: ${options10}`);
if (question != "Finlande") {
  alert("Nop!");
} else {
  score++;
  alert("Bravo!");
}

alert(`Score Final: ${score}`);
