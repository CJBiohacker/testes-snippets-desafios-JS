const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

const RandomNumberA = (a) => {
    let numberA = a[Math.floor(Math.random() * a.length)];

    return numberA;
}

const RandomNumberB = (b) => {
    let numberB = b[Math.floor(Math.random() * b.length)];

    return numberB;
}

let A = RandomNumberA(array);
let B = RandomNumberB(array);
let sum = A + B;
const condTrue = A !== B && sum === targetSum;
const condFalse = (A === B && sum !== targetSum || A === B && sum === targetSum || A !== B && sum !== targetSum);
console.log(`A:${A} B:${B} Soma:${sum}`);

const TargetArray = (A, B) => {

    if (condTrue) {
        return console.log("CASO TRUE 1"[A, B]);
    } else {
        do {
            A = RandomNumberA(array);
            B = RandomNumberB(array);
            sum = A + B;
            console.log(`A:${A} B:${B} Soma:${sum}`);
        } while (condFalse);
        return console.log("CASO TRUE 2"[A, B]);
    }

}

TargetArray(A, B);

// COMENTÁRIO DOS MACACOS ANCIÕES DO MULTIVERSO ALTERNATIVO DOS PRIMATAS