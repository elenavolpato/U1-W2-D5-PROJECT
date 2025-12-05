/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog" /* , "zebra" */, "cat", "hamster", "redfish"]; // inserito elemento "zebra" per testare il .sort()
console.log("<---- ESERCIZIO 1 ---->");
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

/* console.log("<---- ESERCIZIO 2 ---->");
let orderedPets = pets.sort();
console.log(orderedPets);
 */
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

/* console.log("<---- ESERCIZIO 3 ---->");
let reversedPets = pets.reverse();
console.log(reversedPets);
 */
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

/* console.log("<---- ESERCIZIO 34---->");
console.log(pets);
let lastPetsElement = pets.shift();
console.log(lastPetsElement);
pets.push(lastPetsElement);
console.log(pets);
 */
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
console.log("<---- ESERCIZIO 5 ---->");

//come non possiamo ancora usare regex...
const alphabet = "abcdefghijklmnopqrstuvxyz";
const numbers = "0123456789";

//function to generate the license Plates
function randomLicensePlate(str, max) {
  let licensePlate = "";
  for (let i = 0; i < max; i++) {
    let randomIndex = Math.floor(Math.random() * str.length);
    licensePlate += str[randomIndex];
  }

  return licensePlate.toUpperCase();
}

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = randomLicensePlate(alphabet, 3) + "-" + randomLicensePlate(numbers, 4);
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log("<---- ESERCIZIO 6 ---->");
const newCar = {
  brand: "Gurgel",
  model: "BR-800",
  licensePlate: "BRS-5849",
  color: "red",
  trims: ["SL", "van"],
};

cars.push(newCar);
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

console.log("<---- ESERCIZIO 7 ---->");
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log("<---- ESERCIZIO 8 ---->");
for (let i = 0; i < cars.length; i++) {
  let carColor = cars[i].color;
  if (carColor.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

console.log("<---- ESERCIZIO 9 ---->");

let j = 0;
const newArray = [];
//sorts the array to put all elements bellow 32 on the new array
const sortedArray = numericArray.sort(function (a, b) {
  return a - b;
});

while (sortedArray[j] <= 32) {
  newArray.push(numericArray[j]);
  j++;
}
console.log(newArray);

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d", "Ú"];
console.log("<---- ESERCIZIO 10 ---->");

const result = [];

for (let i = 0; i < charactersArray.length; i++) {
  char = charactersArray[i];
  switch (char.toLowerCase()) {
    case "a":
      result.push(1);
      break;
    case "b":
      result.push(2);
      break;
    case "c":
      result.push(3);
      break;
    case "d":
      result.push(4);
      break;
    case "e":
      result.push(5);
      break;
    case "f":
      result.push(6);
      break;
    case "g":
      result.push(7);
      break;
    case "h":
      result.push(8);
      break;
    case "i":
      result.push(9);
      break;
    case "l":
      result.push(10);
      break;
    case "m":
      result.push(11);
      break;
    case "n":
      result.push(12);
      break;
    case "o":
      result.push(13);
      break;
    case "p":
      result.push(14);
      break;
    case "q":
      result.push(15);
      break;
    case "r":
      result.push(16);
      break;
    case "s":
      result.push(17);
      break;
    case "t":
      result.push(18);
      break;
    case "u":
      result.push(19);
      break;
    case "v":
      result.push(20);
      break;
    case "z":
      result.push(21);
      break;
    default:
      result.push(null);
      console.log(`carattere in posizione ${i} non valido`);
  }
}

console.log(result);
