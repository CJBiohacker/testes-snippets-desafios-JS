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