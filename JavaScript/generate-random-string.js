// Random String Generator (can be used as a password/security key generator)
// Change the toString(radix) to change the numeric system (binary, octal, hexadecimal, hexatridecimal, etc)
const randomString = Math.random().toString(36).slice(2);

console.log(randomString);
