let climaDeHoje = 'calor';
let cicloDoFrio = ["Comer", "Dormir", "Preguiça"];
let viver = ["Fazer qualquer coisa além de: ", ...cicloDoFrio.join(", ")];
const sliceAndMap = cicloDoFrio.slice(0,-1).map(x => x);

const condition = (clima) => {

    if (climaDeHoje == "frio") {
        return console.log(cicloDoFrio);
    } else {
        return console.log(viver.join(""));
    }
};

condition(climaDeHoje);
console.log(sliceAndMap);
