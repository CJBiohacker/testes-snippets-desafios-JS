/* Turma tem nº par, aluno uniforme preto OU laranja (50%/50%)
1 FILA DE SOMENTE UNIFORME PRETO (FRENTE) => ALUNOS BAIXOS
1 FILA DE SOMENTE UNIFORME LARANJA (ATRÁS) => ALUNOS ALTOS

MÍNIMO DE 2 ALUNOS POR TURMA

ESCREVER FUNÇÃO QUE RETORNA TRUE OR FALSE
SE FOR POSSÍVEL TIRAR A FOTO DE UMA DAS TURMAS
*/

blackUniformHeights = [150, 179, 149, 152, 154];
orangeUniformHeights = [162, 181, 151, 160, 170];

const rowMinCondition = (heights) => {                  // Função que retorna a menor altura de uma array (neste caso, a altura das turmas)
    let minHeight = Math.min(...heights);               // Utilização do rest operator '...', para inserir todos valores da array como argumento.

    return minHeight;
}

const [front, rear] = [                                 // Atribuição via desestruturação da função acima, com as arrays (alturas) já preenchidas. 
    rowMinCondition(blackUniformHeights),
    rowMinCondition(orangeUniformHeights)
];

const photoEvaluation = () => {                         // Função final que avalia a condição proposta no enunciado.
    let photo = (front < rear) ?                        // Se o altura mínima da fila da frente for menor que a altura minima da fila de trás,
        console.log(true) :                             // a condição atinge o requisito e retorna 'TRUE',
        console.log(false);                             // senão retorna 'FALSE'.

    return photo;
}

photoEvaluation();