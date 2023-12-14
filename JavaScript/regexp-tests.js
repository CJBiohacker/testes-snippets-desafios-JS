const padraoVazio = /^$/; // regexp para strings vazias
const padraoAlfaNum = /\w/; // regexp equivalente à [A-Za-z0-9_], qualquer caractere alfanumérico incluindo underline.

const vazio = ``;
const string = `texto`;

const testeVazio = padraoVazio.test(vazio);
const testeAlfaNum = padraoAlfaNum.test(string);

console.log(testeVazio);
testeVazio === true
  ? console.log(`String vazia.`)
  : console.log(`String com caracteres.\b`);

console.log(testeAlfaNum);
testeAlfaNum === true
  ? console.log(`String com caracteres.`)
  : console.log(`String vazia.`);

// SEPARANDO APENAS NÚMEROS COM PONTUAÇÃO (Nº de Versão)
const string2 = `\"FRONTEND_VERSION\": \"1.0.63\",`;
const regExp = /\d[^]/g;
const match = string2.match(regExp);

console.log(match);

const nomes = ["John_Doe", "John1Doe", "John Doe", "John-Doe", "Jo?hn Doe"];

const specialCharRegexp = /[^\w\s]|[_]/;

const checkSpecialChar = (array) => {
  for (const name of array) {
    if (specialCharRegexp.test(name)) {
      console.log(`${name} contains special characters`);
    } else {
      console.log(`${name} does not contain special characters`);
    }
  }
};

checkSpecialChar(nomes);

const inputs = ["John Doe", "JohnDoe James", "J o h n D o e", "Jo hnD oe"];

const outputs = inputs.map((input) => input.replace(/\s/g, "").toLowerCase());

for (let i = 0; i < inputs.length; i++) {
  console.log(`Input ${i + 1} ==> ${inputs[i]}`);
  console.log(`Output ${i + 1} ==> ${outputs[i]}\n`);
}

function validateAndProcessInput(input) {
    if (input.includes('#') || input.includes('|') || input.includes('-')) {
        return input;
    } else {
        return input.split(/\s+/);
    }
}

const input = 'Rio de Janeiro | Galeão # Pao de Acucar - 4564894789789';
const input2 = 'Rio de Janeiro / Galeão / Pao de Acucar / 4564894789789';
const output = validateAndProcessInput(input);
const output2 = validateAndProcessInput(input2);

console.log(output);
console.log(output2);


function hasNoSpecialCharacters(inputString) {
  const regex = /^[a-zA-Z0-9\s]*$/;
  return regex.test(inputString);
}

const input1 = "Hello123";     // true (no special characters)
const inputZ2 = "Hello@123";    // false (contains "@" special character)
const input3 = "Hello 123";    // true (ignores white spaces)
const input4 = "Hello_World";  // true (contains underscore)
const input5 = "Hello$World";  // false (contains "$" special character)

console.log(hasNoSpecialCharacters(input1));
console.log(hasNoSpecialCharacters(inputZ2));
console.log(hasNoSpecialCharacters(input3));
console.log(hasNoSpecialCharacters(input4));
console.log(hasNoSpecialCharacters(input5));
