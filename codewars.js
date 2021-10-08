/* RETURN TWO HIGHEST VALUES IN LIST */
const array = [4, 30, 10, 9, 10];

const twoHighest = array.reduce((a, b) => {
    let x = Math.max(a, b)

    return x;
});

console.log([twoHighest]);

// usar método map de array.

/* ------------------------------------------- */

// /* THE WIDE-MOUTHED FROG! CODEWARS */
// const mouthSize = (animal) => {
//     let animalIf = animal.toLowerCase();

//     (animalIf == "alligator") ? (mouth = "small") : (mouth = "wide");
//     return console.log(mouth)
// };

// mouthSize("Tamanduá");
// mouthSize("ALLIGATOR");

// /* ------------------------------------------- */

/* SPRAYING TREES CODEWARS */
// function task(w, n, c) {
//     let x = n * c;

//     if (w == "Monday") {
//         nome = "James"
//     } else if (w == "Tuesday") {
//         nome = "John"
//     } else if (w == "Wednesday") {
//         nome = "Robert"
//     } else if (w == "Thursday") {
//         nome = "Michael"
//     } else if (w == "Friday") {
//         nome = "William"
//     } else {
//         nome = "hey random worker"
//     };

//     return console.log("It is " + w + " today, " + nome + ", you have to work, you must spray " + n + " trees and you need " + n * c + " dollars to buy liquid.")
// }

// task("Friday", 10, 5);

/* ------------------------------------------- */

/* MULTIPLICATION TABLE FOR NUMBER CODEWARS */
// function multiTable(number) {
//     for (let i = 1; i < 10; i++) {
//         console.log(`${ i } * ${ number } = ${ number * i } `)
//     }
//     return
// }

// multiTable(5);

/* ------------------------------------------- */

/* WHAT'S THE REAL FLOOR? CODEWARS */
// function getRealFloor(n) {
//     if (n <= 0) {
//         n = n
//     } else if (n <= 12) {
//         n = n - 1
//     } else if (n == 13) {
//         n = NaN;
//     } else if (n > 13) {
//         n = n - 2
//     }
//     return n;
// }

// console.log(getRealFloor(15));

/* ------------------------------------------- */