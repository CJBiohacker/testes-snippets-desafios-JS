const regexp = /%STR_GUEST_NAME%/g;
const value = "My name is %STR_GUEST_NAME%";

const replacement = value.replace(/%STR_GUEST_NAME%/g, "Donald");
console.log("🚀 ~ file: bugs-testing-notes.js:8 ~ replacement:", replacement);


const nomes = `
Maria da Silva Mattos
Pedro dos Santos
Anderson Silva
Maria Joaquina Fraga
Vanderlei Silva
Silene Fraga Braga
Joana Dark da Silva
`
const regex = /^.*(?=\sSilva)/gm

console.log(nomes.match(regex));

let object = {
    cpf: "12345678999",
    userId: "15a479z123",
    userToken: "albj123j10cpo12",
    env: "VULKAN",
    sendNotification: false
}


const { cpf, userId, userToken, env, sendNotification = true } = object;

console.log(sendNotification)