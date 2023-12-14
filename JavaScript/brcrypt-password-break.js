import bcrypt from "bcrypt";

const pwdList = [
  "Harrycop123!",
  "Harrycop123@",
  "Harrycop123#",
  "Harrycop123$",
];

const passwordHash =
  "$2b$10$gKg0gjfH2zLcFLAJGTCj6.6tjlH4fe.U99wtlfl97r1mdusWfxOjO";

// Declarar como função assícrona pra rodar o compare corretamente.
const comparison = async () => {
  for (const pwd of pwdList) {
    if (await bcrypt.compare(pwd, passwordHash)) {
      console.log(`Password = ${pwd} is ${true}`);
    } else {
      console.log(`Password = ${pwd} is ${false}`);
    }
  }
};

comparison();