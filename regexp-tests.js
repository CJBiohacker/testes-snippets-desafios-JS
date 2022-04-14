const padraoVazio = /^$/;       // regexp para strings vazias
const padraoAlfaNum = /\w/;     // regexp equivalente à [A-Za-z0-9_], qualquer caractere alfanumérico incluindo underline.

const vazio = ``;
const string = `texto`;

const testeVazio = padraoVazio.test(vazio);
const testeAlfaNum = padraoAlfaNum.test(string);

console.log(testeVazio);
(testeVazio === true) ? console.log(`String vazia.`) : console.log(`String com caracteres.\b`);

console.log(testeAlfaNum);
(testeAlfaNum === true) ? console.log(`String com caracteres.`) : console.log(`String vazia.`);