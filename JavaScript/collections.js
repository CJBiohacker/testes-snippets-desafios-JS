// COLLECTIONS IN JAVASCRIPT - Map and Set

const podium = new Map();
const positions = ['First', 'Second', 'Third', 'Forth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'];

for (let i = 0; i < positions.length; i++) {
    podium.set(i, positions[i]);
}

podium
console.log("🚀 ~ file: collections.js:12 ~ podium ==> ", podium); // Sai um objeto com chaves e valores.

const numbers = [1, 1, 2, 2, 3, 4, 65, 87, 120, 120, 458];
const SetOfNumbers = new Set(numbers);

console.log("🚀 ~ file: collections.js:16 ~ SetOfNumbers ==> ", SetOfNumbers); // Sai um objeto com valores únicos.

// MAP
// Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.
//     Crie uma função getAdmins que recebe um Map; [V]
//     Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin'); [V]
//     Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores. [V]

const users = new Map();

users.set('John', 'User');
users.set('Doe', 'User');
users.set('Nancy', 'Admin');
users.set('Maria', 'Admin');
users.set('Carl', 'User');

users.keys();
users.values();
users.entries();

users.has('John');

const getAdmins = (map) => {
    const array =[]
    for (const element of map) {
        if (element[1] === 'Admin') {
            array.push(element[0]);
        }
    }
    return array

    /* USING DESESTRUTURAÇÃO
    for (const [key, value] of map) {
        if (value === 'Admin') {
            array.push(key);
        }
    }
    */
};

console.log("Lista de Admins ==> ", getAdmins(users));

// SET
// Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

const numeros = [30, 30, 40, 5, 223, 2049, 3034, 5];

const set = new Set(numeros);

