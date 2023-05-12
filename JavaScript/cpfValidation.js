const validateCPF = (cpf) => {
  const cpfNumbers = cpf.replace(/\D/g, "");
  console.log("cpfNumbers ==> ", cpfNumbers);

  const sequentialDigits = /^(?:(\d)\1+)+$/.test(cpfNumbers);
  if (sequentialDigits) {
    return console.log(false);
  }

  const sumDigit1 = Array.from(
    { length: 9 },
    (_, i) => parseInt(cpfNumbers[i]) * (10 - i)
  ).reduce((a, b) => a + b);
  const verificationDigit1 = sumDigit1 % 11 < 2 ? 0 : 11 - (sumDigit1 % 11);
  if (verificationDigit1 !== parseInt(cpfNumbers[9])) {
    return console.log(false);
  }

  const sumDigit2 = Array.from(
    { length: 10 },
    (_, i) => parseInt(cpfNumbers[i]) * (11 - i)
  ).reduce((a, b) => a + b);
  const verificationDigit2 = sumDigit2 % 11 < 2 ? 0 : 11 - (sumDigit2 % 11);
  if (verificationDigit2 !== parseInt(cpfNumbers[10])) {
    return console.log(false);
  }

  return console.log(true);
};

validateCPF("00000000000");
validateCPF("11111111111");
validateCPF("22222222222");
validateCPF("33333333333");
validateCPF("44444444444");
validateCPF("15830828758");
validateCPF("13434648704");
validateCPF("22222233333");
validateCPF("99999999999");

console.log("\n----------------\n");

const validateCPFCHATGPT = (cpf) => {
  const cpfNumbers = cpf.replace(/\D/g, "");
  console.log("cpfNumbers ==> ", cpfNumbers);

  const sequentialDigits = /^(?:(\d)\1+)+$/.test(cpfNumbers);
  if (sequentialDigits) {
    return console.log(false);
  }

  const sumDigit1 = Array.from(
    { length: 9 },
    (_, i) => parseInt(cpfNumbers[i]) * (10 - i)
  ).reduce((a, b) => a + b);
  const verificationDigit1 = sumDigit1 % 11 < 2 ? 0 : 11 - (sumDigit1 % 11);
  if (verificationDigit1 !== parseInt(cpfNumbers[9])) {
    return console.log(false);
  }

  const sumDigit2 = Array.from(
    { length: 10 },
    (_, i) => parseInt(cpfNumbers[i]) * (11 - i)
  ).reduce((a, b) => a + b);
  const verificationDigit2 = sumDigit2 % 11 < 2 ? 0 : 11 - (sumDigit2 % 11);
  return verificationDigit2 === parseInt(cpfNumbers[10]);
};

validateCPFCHATGPT("00000000000");
validateCPFCHATGPT("11111111111");
validateCPFCHATGPT("22222222222");
validateCPFCHATGPT("33333333333");
validateCPFCHATGPT("44444444444");
validateCPFCHATGPT("15830828758");
validateCPFCHATGPT("13434648704");
validateCPFCHATGPT("22222233333");
validateCPFCHATGPT("99999999999");
