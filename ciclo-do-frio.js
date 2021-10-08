let climaDeHoje = 'frio';
let cicloDoFrio = ["Comer", "Dormir", "Preguiça"];
let viver = ["Fazer qualquer coisa além de", ...cicloDoFrio];


const condition = (clima) => {

    if (climaDeHoje == "frio") {
        return console.log(cicloDoFrio);
    } else {
        return console.log(viver);
    }
};

condition(climaDeHoje);