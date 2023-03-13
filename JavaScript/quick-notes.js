const _ = require('lodash');
const moment = require('moment');

const users = [
    { user: 'barney', color:'black' },
    { user: 'fred', color:'green' },
    { user: 'honey', color:'blue'},
    { user: 'annete', color:'yellow'},
    { user: 'zennya', color:'white' },
  ];

const iterate = (x) => {
    return x === 'barney'
}

  const mappingUser = _.map(users, 'user');
  const iteratingUsers = _.map(mappingUser, iterate)
  console.log("🚀 ~ file: quick-notes.js:10 ~ mappingUser", mappingUser)
  console.log("🚀 ~ file: quick-notes.js:10 ~ iteratingUsers", iteratingUsers)

const currentUsers = users.map( x => x.date ='2022-10-21T14:39:44.338Z');
console.log("🚀 ~ file: quick-notes.js:21 ~ users ==> ", users)

users[0].date = moment(String(users[0].date)).utc().format("YYYY-MM-DD HH:mm Z");
console.log("🚀 ~ file: quick-notes.js:21 ~ users ==> ", users)

const randomObject = {
  department: "Financeiro",
  id: '111030201-a5s4c81-b5c7d8'
};

const values = Object.values(randomObject);
const array = [...values];
console.log("🚀 ~ file: quick-notes.js:34 ~ array ==> ", array);


const arrayItems = [
  {
    cnpj: "1546798531",
    filtro_1: "CJ",
  },
  {
    cnpj: "4567981",
    filtro_1: "Jonas",
  },
];

const textIgnoreValidation = (collection) => {
  const validCnpjCollection = [];
  const invalidCnpjCollection = [];
  const wordCheckRegex = /[A-ú\\D]/;

  console.log("collection ==> ", collection)

  for (let i = 0; i < collection.length; i += 1) {
    const key = Object.keys(collection[i]);
    console.log("key ==>", key)
    console.log("collection position key ==> ", collection[i][key[0]]);
    if (wordCheckRegex.test(collection[i][key[0]])) {
      invalidCnpjCollection.push(collection[i]);
    } else {
      validCnpjCollection.push(collection[i]);
    }
  }

  return [validCnpjCollection, invalidCnpjCollection];
}

const [validCnpjCollection, invalidCnpjCollection] = textIgnoreValidation(arrayItems);
console.log("validCnpjCollection ==> ", validCnpjCollection);
console.log("invalidCnpjCollection ==> ", invalidCnpjCollection);

const email = "example@example.com";
const wrongEmail = "exam ple@example.com";
const wrongEmail2 = "example @example.com";
const wrongEmail3 = "example_@example.com";
const noSignEmail = "example_example.com";
const whiteSpaceAndSignEmailValidation = /^\S+@\S+$/;
const completeEmailValidation = /^[a-z0-9]+(?:[._-][a-z0-9]+)*@(?:(?=[a-z0-9-]{1,63}\.)[a-z0-9]+(?:-[a-z0-9]+)*\.){1,}[a-z]{2,}$/i;
// Email valid/invalid formats reference: https://help.xmatters.com/ondemand/trial/valid_email_format.htm

const validateEmail = (email, validationType) => {
  if ([1, "1"].includes(validationType)) {
    return whiteSpaceAndSignEmailValidation.test(email) ? "Valid email" : "Invalid email";
  }

  if ([2, "2"].includes(validationType)) {
    return completeEmailValidation.test(email) ? "Valid email" : "Invalid email";
  }

  return "Invalid Type !!!"
};

console.log(`validateEmail Type 2 - ${email} ==> `, validateEmail(email, 2));
console.log(`validateEmail Type 2 - ${wrongEmail} ==> `, validateEmail(wrongEmail, 2));
console.log(`validateEmail Type 2 - ${wrongEmail2} ==> `, validateEmail(wrongEmail2, 2));
console.log(`validateEmail Type 2 - ${wrongEmail3} ==> `, validateEmail(wrongEmail3, 2));
console.log(`validateEmail Type 2 - ${noSignEmail} ==> `, validateEmail(noSignEmail, 2));

const wrongPrefixEmail = "abc-@mail.com";
const wrongPrefixEmail2 = "abc..def@mail.com";
const wrongPrefixEmail3 = ".abc@mail.com";
const wrongPrefixEmail4 = "abc#def@mail.com";

console.log(`\n INVALID PREFIX`);
console.log(`validateEmail Type 2 - ${wrongPrefixEmail} ==> `, validateEmail(wrongPrefixEmail, 2));
console.log(`validateEmail Type 2 - ${wrongPrefixEmail2} ==> `, validateEmail(wrongPrefixEmail2, 2));
console.log(`validateEmail Type 2 - ${wrongPrefixEmail3} ==> `, validateEmail(wrongPrefixEmail3, 2));
console.log(`validateEmail Type 2 - ${wrongPrefixEmail4} ==> `, validateEmail(wrongPrefixEmail4, 2));

const correctPrefixEmail = "abc-d@mail.com";
const correctPrefixEmail2 = "abc.def@mail.com";
const correctPrefixEmail3 = "abc@mail.com";
const correctPrefixEmail4 = "abc_def@mail.com";

console.log(`\n VALID PREFIX`);
console.log(`validateEmail Type 2 - ${correctPrefixEmail} ==> `, validateEmail(correctPrefixEmail, 2));
console.log(`validateEmail Type 2 - ${correctPrefixEmail2} ==> `, validateEmail(correctPrefixEmail2, 2));
console.log(`validateEmail Type 2 - ${correctPrefixEmail3} ==> `, validateEmail(correctPrefixEmail3, 2));
console.log(`validateEmail Type 2 - ${correctPrefixEmail4} ==> `, validateEmail(correctPrefixEmail4, 2));

const wrongDomainEmail = "abc.def@mail.c";
const wrongDomainEmail2 = "abc.def@mail#archive.com";
const wrongDomainEmail3 = "abc.def@mail";
const wrongDomainEmail4 = "abc.def@mail..com";

console.log(`\n INVALID DOMAIN`);
console.log(`validateEmail Type 2 - ${wrongDomainEmail} ==> `, validateEmail(wrongDomainEmail, 2));
console.log(`validateEmail Type 2 - ${wrongDomainEmail2} ==> `, validateEmail(wrongDomainEmail2, 2));
console.log(`validateEmail Type 2 - ${wrongDomainEmail3} ==> `, validateEmail(wrongDomainEmail3, 2));
console.log(`validateEmail Type 2 - ${wrongDomainEmail4} ==> `, validateEmail(wrongDomainEmail4, 2));

const correctDomainEmail = "abc.def@mail.cc";
const correctDomainEmail2 = "abc.def@mail-archive.com";
const correctDomainEmail3 = "abc.def@mail.org";
const correctDomainEmail4 = "abc.def@mail.com";

console.log(`\n VALID DOMAIN`);
console.log(`\nvalidateEmail Type 2 - ${correctDomainEmail} ==> `, validateEmail(correctDomainEmail, 2));
console.log(`validateEmail Type 2 - ${correctDomainEmail2} ==> `, validateEmail(correctDomainEmail2, 2));
console.log(`validateEmail Type 2 - ${correctDomainEmail3} ==> `, validateEmail(correctDomainEmail3, 2));
console.log(`validateEmail Type 2 - ${correctDomainEmail4} ==> `, validateEmail(correctDomainEmail4, 2));

const tempToken = {
  tempToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzg3MzM1MDIsImV4cCI6MTY3ODk5MjcwMn0.aUtAPqlovlhUI5WyL8NRevw0GN-rjla0scG97ZBbNLE",
};

console.log("\n Token ==> ", tempToken.tempToken)
console.log("\n Token ==> ", Object.values(tempToken)[0]);