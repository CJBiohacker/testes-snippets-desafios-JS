const cnpj = "1/9.1-4";
const cnpj2 = "481914";
const cnpj3 = "48794561";
const cnpj4 = "00.668.202/0001-18";
const cnpj5 = "0.668.202/0001-18";

const cnpjLpadFillAndRemoveSpecialChar = (cnpj) => {
  console.log(cnpj);
  cnpj = cnpj.replace(/[^\d]+/g, "");
  console.log(cnpj);
  return cnpj.padStart(14, "0");
};

console.log(cnpjLpadFillAndRemoveSpecialChar(cnpj));
console.log(cnpjLpadFillAndRemoveSpecialChar(cnpj2));
console.log(cnpjLpadFillAndRemoveSpecialChar(cnpj3));
console.log(cnpjLpadFillAndRemoveSpecialChar(cnpj4));
console.log(cnpjLpadFillAndRemoveSpecialChar(cnpj5));

const arr = ["a", "b", "c"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (const el of arr) {
  console.log(el);
}
