// Random String Generator (can be used as a password/security key generator)
// Change the toString(radix) to change the numeric system (binary, octal, hexadecimal, hexatridecimal, etc)
const randomString = Math.random().toString(36).slice(2);

console.log(randomString);

const regexRules = {
  lengthRule: /^.{8,}$/,
  upperCaseRule: /(?=.*[A-Z])/,
  lowerCaseRule: /(?=.*[a-z])/,
  numericRule: /(?=.*[0-9])/,
  specialCharRule: /(.*\W.*)/,
};

const specialChars = "!@#$%*()-_+=`[]{}^~,.;/<>ºª|'*+.";
const generateRandomSpecialChar = () => {
  return specialChars[Math.floor(Math.random() * specialChars.length)];
};

const findFirstLowerCaseAndCapitalizeIt = (randomString) => {
  const stringToArray = Array.from(randomString);
  const findLowerCase = stringToArray.find((x) =>
    regexRules.lowerCaseRule.test(x)
  );
  const specialChar = generateRandomSpecialChar();
  console.log("special Char ==> ", specialChar);
  stringToArray.push(specialChar);
  const lowerToUpper = findLowerCase.toLocaleUpperCase();

  return stringToArray
    .map((x) => x.replace(findLowerCase, lowerToUpper))
    .join("")
    .toLocaleString();
};

const randomStrongPwd = findFirstLowerCaseAndCapitalizeIt(randomString);

console.log(randomStrongPwd);

export default { findFirstLowerCaseAndCapitalizeIt };
