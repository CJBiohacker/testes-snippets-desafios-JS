/* -------------------------------------------------------------------------------------------------- */
// Função pra calcular média que se adapta de acordo com o nº de itens inseridos.
const MediaDoVetor = (vetor) => {
  let soma = 0;

  vetor.forEach((elemento) => {
    // Utilizando forEach
    soma = soma + elemento;
  });

  // for (let i = 0; i < vetor.length; i++) {     // Utilizando for
  //     soma = soma + vetor[i];
  // };

  let media = soma / vetor.length;

  return media;
};

console.log(MediaDoVetor([1, 2, 3, 4, 5, 6]));
/* -------------------------------------------------------------------------------------------------- */
// Clean code de uma condicional switch..case para Array.

function escolherItem(id) {
  switch (id) {
    case 0:
      return "Paul Atreides";
    case 1:
      return "Lady Jessica";
    case 2:
      return "Barão Vladimir Harkonnen";
    case 3:
      return "Chani";
    case 4:
      return "Duncan Idaho";
    case 5:
      return "Stilgar";
    default:
      return "Nº Inválido";
  }
}

const escolherItemId = (idNumber) => {
  const duneChars = [
    "Paul Atreides",
    "Lady Jessica",
    "Barão Vladimir Harkonnen",
    "Chani",
    "Duncan Idaho",
    "Stilgar",
  ];

  return duneChars[idNumber];
};

console.log(escolherItemId(5));
console.log(escolherItem(2));
/* -------------------------------------------------------------------------------------------------- */
// Manipulação de arrays com o Spread Operator.
const items = [1, 2, 3, 4, 5];
const [ , , ...resto] = items;  // Desestruturação da array principal utilizando Spread Operator para coletar o resto de uma array, baseado no índice do campo de desestruturação
console.log(resto);

/* ---------------------------------------------------------------- */
// Iterando elementos que não são Collections (arrays ou objetos) e substituindo por asterísco a partir do 5o caractere.
const stringRandom = '929839@0';
let numberRandom = 92983910;
const mixedArray = ['abc', 1 , true];
const regex = /\w/g;
const stringArray = [];
const numberArray = [];

const asteriskReplacement = (char, regexp) => {
  return char.replace(regexp, "*");
}

const convertNumberToString = (element) => {
  console.log("TIPO ELEMENTO ==> ", typeof element);
  if (typeof element === 'object') {
    return element.map( (el) => {
      return el.toString();
    });
  }
  if (typeof element === 'number') {
    return element.toString();
  }
}

convertNumberToString(stringRandom);
numberRandom = convertNumberToString(numberRandom);
convertNumberToString(stringRandom);
convertNumberToString(mixedArray);

console.log("converted mixedArray ==> ", mixedArray);
console.log("converted numberRandom ==> ", typeof numberRandom);


for (let i = 0; i < stringRandom.length; i++) {
  if (i < 4) {
    stringArray.push(stringRandom[i]);
    
    console.log("stringArray current ==> ", stringArray);
  } else {
    stringArray.push(asteriskReplacement(stringRandom[i], /(\w|\W)/g));
  }
}

for (let i = 0; i < numberRandom.length; i++) {
  if (i < 4) {
    numberArray.push(numberRandom[i]);

    console.log("🚀 ~ file: snippets-de-arrays.js:93 ~ numberArray", numberArray);
  } else {
  numberArray.push(asteriskReplacement(numberRandom[i], /(\w|\W)/g));
  console.log("🚀 ~ file: snippets-de-arrays.js:93 ~ numberArray", numberArray);
 }
}

const stringifiedStringArray = stringArray.join("").toString();
const stringifiednumberRandom = numberArray.join("").toString();

console.log(stringifiedStringArray);
console.log(stringifiednumberRandom);

const ddd_1 = '21';
const ddd_2 = '11';

const formatPhone = (value) => {
  return value.replace(/(\d)(\d{4})$/, "$1-$2");
};

console.log("format Phone ==> ", formatPhone(`(${ddd_1}) 967290452`));


/* ---------------------------------------------------------------- */

let occultedNumber = '21****458156';
const condition = (occultedNumber) => occultedNumber && occultedNumber.includes('*') ? 'CONDIÇÃO 1' : occultedNumber && !occultedNumber.includes('*') ? 'CONDIÇÃO 2' : 'CONDIÇÃO FINAL';

console.log(condition(occultedNumber));

occultedNumber = '2154687';
console.log(condition(occultedNumber));

occultedNumber = '';
console.log(condition(occultedNumber));

/* ---------------------------------------------------------------- */

let x = [1, 2, 3];
let y = [...x];
let z = x;
x.push(4);
console.log(y);
console.log(z);

/* ---------------------------------------------------------------- */
let arraytoString = 'HelloMyFriend';
arraytoString = arraytoString.replace('oMyFriend', "*".repeat(3));
arraytoString = arraytoString.slice(0,7);
console.log("arraytoString ==> ", arraytoString);

/* ---------------------------------------------------------------- */

const numList = [ 1, 2, 3, 4];
const numHistory = [ 3, 2, 1];
const result = [];
let isBreakTrue;
let password;

for (let i = 0; i < numList.length; i += 1) {  
  for (let j = 0; j < numHistory.length; j += 1) {
    console.log(`Ciclo i = ${i}, valor A = ${numList[i]}`);
    console.log(`Ciclo j = ${j}, valor A = ${numHistory[j]}`);
    password = numList[i];
    if (password === numHistory[j]) {
      console.log(`valor encontrado`);
      result.push(password);
    } else {
      console.log(`valor diferente, quebrou`);
      isBreakTrue = true
      break
    }
  }
  if (isBreakTrue) {
    break;
  }
}

console.log("result ==> ", result);