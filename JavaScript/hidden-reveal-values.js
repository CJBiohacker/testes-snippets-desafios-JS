const formatPhone = (value) => {
  return value.replace(/(\d)(\d{4})$/, "$1-$2");
};

const formatEmail = (value) => {
  return value.toLowerCase();
};

const asteriskReplacement = (char, regexp) => {
  return char.replace(regexp, "*");
};

const notIncludes = (array, value) => {
  return !array.includes(value);
}

const getHiddenValue = (rawValue, keyname, entity = {}) => {
  console.log("getHiddenValue ~ entity ==> ", entity);
  const columnValueArray = [];
  const ddd_1 = entity.ddd_1 || "";
  const ddd_2 = entity.ddd_2 || "";
  let hiddenValue;
  if ([null, undefined, false].includes(rawValue)) rawValue = "";
  if (typeof rawValue === "number") rawValue = rawValue.toString();
  if (["telefone_1", "telefone_2"].includes(keyname))
    rawValue = formatPhone(rawValue);

  console.log("getHiddenValue ~ rawValue ==> ", rawValue);
  for (let i = 0; i < rawValue.length; i++) {
    if (i < 4) {
      columnValueArray.push(rawValue[i]);
      console.log("getHiddenValue ~ columnValueArray ==> ", columnValueArray);
    } else {
        columnValueArray.push(asteriskReplacement(rawValue[i], /(\w|\W|\s)/g))
    }
  }
  const arraytoString = columnValueArray.join("").toString();

  if (keyname === "telefone_1") return hiddenValue = `(${ddd_1}) ${arraytoString}`;
  if (keyname === "telefone_2") return hiddenValue = `(${ddd_2}) ${arraytoString}`;
  if (keyname === "email") return hiddenValue = formatEmail(arraytoString);
  if (notIncludes(["telefone_1", "telefone_2", "email"], keyname)) return hiddenValue = arraytoString;
};

const centerWest = {
  ddd_1: "67",
  ddd_2: "63",
};

const southEast = {
  ddd_1: "31",
  ddd_2: "11",
};

console.log(getHiddenValue(26872086, "telefone_1", southEast));
console.log(getHiddenValue("cj@gmail.com", "email"));
console.log(getHiddenValue("snipermonkey@gmail.com", "email"));
console.log(getHiddenValue("967294581", "telefone_2", centerWest));
console.log(getHiddenValue("GORILLASAPPER@gmail.com", "email"));
console.log(getHiddenValue("Jonas Amarante do Amaral", "nome_socio"));

/* -------- HIDDEN/REAVEAL VUEX OBJECT BASE STRUCTURE --------*/

// const currentCompany = {
//   ddd_1: "21",
//   telefone_1: "24567895",
//   ddd_2: "11",
//   telefone_2: "978456518",
//   email: "abc@gmail.com",
// };
// const contactData = [
//   {
//     keyName: "telefone_1",
//     rawValue: `(${currentCompany.ddd_1}) ${formatPhone(
//       currentCompany.telefone_1
//     )}`,
//     hiddenvalue: getHiddenValue(currentCompany.telefone_1, "telefone_1"),
//     showIcon: "$remove_red_eye_rounded",
//     hideIcon: "$eye_cancel",
//     shouldHideValue: true,
//   },
//   {
//     keyName: "telefone_2",
//     rawValue: `(${currentCompany.ddd_2}) ${formatPhone(
//       currentCompany.telefone_2
//     )}`,
//     hiddenvalue: getHiddenValue(currentCompany.telefone_2, "telefone_2"),
//     showIcon: "$remove_red_eye_rounded",
//     hideIcon: "$eye_cancel",
//     shouldHideValue: true,
//   },
//   {
//     keyName: "email",
//     rawValue: currentCompany.email,
//     hiddenvalue: getHiddenValue(currentCompany.email, "email"),
//     showIcon: "$remove_red_eye_rounded",
//     hideIcon: "$eye_cancel",
//     shouldHideValue: true,
//   },
// ];
/* -------------------------------------------------------------- */
