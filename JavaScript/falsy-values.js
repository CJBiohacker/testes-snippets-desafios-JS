console.log("Falsy Values in JavaScript\n");

let validator = undefined;

if (!validator) {
  console.log(`Undefined is Falsy`);
} else {
  console.log(`Undefined is not Falsy`);
}

validator = null;

if (!validator) {
  console.log(`Null is Falsy`);
} else {
  console.log(`Null is not Falsy`);
}

validator = NaN;

if (!validator) {
  console.log(`NaN is Falsy`);
} else {
  console.log(`NaN is not Falsy`);
}

validator = 0;

if (!validator) {
  console.log(`Nummber 0 is Falsy`);
} else {
  console.log(`Number 0 is not Falsy`);
}

validator = -0;

if (!validator) {
  console.log(`Nummber 0 negative is Falsy`);
} else {
  console.log(`Nummber 0 negative is not Falsy`);
}

validator = "";

if (!validator) {
  console.log(`Empty string is Falsy`);
} else {
  console.log(`Empty string is not Falsy`);
}

validator = [];

if (!validator) {
  console.log(`Empty Array is Falsy`);
} else {
  console.log(`Empty Array is not Falsy`);
}

validator = {};

if (!validator) {
  console.log(`Empty Object is Falsy`);
} else {
  console.log(`Empty Object is not Falsy`);
}
