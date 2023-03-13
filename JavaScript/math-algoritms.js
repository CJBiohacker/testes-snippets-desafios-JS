export const reduceFraction = (num, denom) => {
  const gcd = findGCD(num, denom);
  const reduceNum = num / gcd;
  const reduceDenom = denom / gcd;
  return `${reduceNum}/${reduceDenom}`;
};

// Find the Greatest Common Divisor (Máximo Divisor Comum) between two numbers.
export const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return findGCD(b, a % b);
  }
};

// Getting a random integer between two values including the max value.
export const getRandomIntNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}