import { columnNameObjectFormat } from "./consts.js";

/**
 * Iterates over the variable.index.js keys and bring the equivalent column name used in the database to define the correct sort field in specific cases (not sorted by default columns).
 * @param {String} sortField The key name sort field used to extract the real database column name.
 */
const defineCorrectSortField = (sortField) => {
  let correctSortField;
  for (const key in columnNameObjectFormat) {
    if (sortField === key) {
        correctSortField =  columnNameObjectFormat[sortField];        
    }
  }
  return correctSortField;
};

defineCorrectSortField("gastos_totais");


const groupBy = ["id_setor", "id_bairro", "id_municipio", "id_uf"];
const myArray = [ "id_uf"];

const validateArray = groupBy.every(item => !myArray.includes(item))

if (validateArray) {
  console.log('TRUE');
} else {
  console.log('FALSE');
}

const input = 'rightPad(CAST(avg("indice_desenvolvimento_br") AS Decimal(10,3))::text,5,\'0\') AS indice_desenvolvimento_br';
const input2 = 'rightPad(CAST(avg("indice_desenvolvimento_uf") AS Decimal(10,3))::text,5,\'0\') AS indice_desenvolvimento_uf';

const elementsToCheck = [
  'indice_desenvolvimento_br',
  'indice_desenvolvimento_uf',
  'indice_desenvolvimento',
  'indice_desenvolvimento_mun',
  'indice_desenvolvimento_bairro'
];

const regex = new RegExp(elementsToCheck.join('|'), 'g');
const removalRegex = new RegExp(`\\s+AS\\s+(${elementsToCheck.join('|')})\\b`, 'i');

if (regex.test(input)) {
  console.log('Input TRUE');
} else {
  console.log('Input FALSE');
}

if (regex.test(input2)) {
  console.log('Input2 TRUE');
} else {
  console.log('Input2 FALSE');
}

const result = input.replace(removalRegex, '');
const result2 = input2.replace(removalRegex, '');

console.log(result);
console.log(result2);


let number = "0,";

console.log("number before ==> ", number);

number = number.padEnd(number.length + ( 5 - number.length), "0");

console.log("number after ==> ", number);
