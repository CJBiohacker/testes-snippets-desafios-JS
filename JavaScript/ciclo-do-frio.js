let climaDeHoje = 'calor';
let cicloDoFrio = ["Comer", "Dormir", "Preguiça"];
let viver = ["Fazer qualquer coisa além de: ", ...cicloDoFrio.join(", ")];


const condition = (clima) => {

    if (climaDeHoje == "frio") {
        return console.log(cicloDoFrio);
    } else {
        return console.log(viver.join(""));
    }
};

condition(climaDeHoje);