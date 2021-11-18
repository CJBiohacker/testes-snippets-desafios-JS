/* -------------------------------------------------------------------------------------------------- */
// Função pra calcular média que se adapta de acordo com o nº de itens inseridos.
const MediaDoVetor = (vetor) => {
    let soma = 0;

    vetor.forEach(elemento => {                      // Utilizando forEach
        soma = soma + elemento
    });

    // for (let i = 0; i < vetor.length; i++) {     // Utilizando for
    //     soma = soma + vetor[i];
    // };

    let media = soma / vetor.length;

    return media;
};

console.log(MediaDoVetor([1, 2, 3, 4, 5, 6]));
/* -------------------------------------------------------------------------------------------------- */
// Clean code de uma condicional switch..case para Array.

function escolherItem(id) {
    switch (id) {
        case 0:
            return 'Paul Atreides';
        case 1:
            return 'Lady Jessica';
        case 2:
            return 'Barão Vladimir Harkonnen';
        case 3:
            return 'Chani';
        case 4:
            return 'Duncan Idaho';
        case 5:
            return 'Stilgar';
        default:
            return 'Nº Inválido';
    }
}

const escolherItemId = (idNumber) => {
    const duneChars = ['Paul Atreides', 'Lady Jessica', 'Barão Vladimir Harkonnen', 'Chani', 'Duncan Idaho', 'Stilgar'];

    return duneChars[idNumber]
}

console.log(escolherItemId(5));
console.log(escolherItem(2));
