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
