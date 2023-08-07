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

// Calculate the sum of multiples of 3 and/or 5.

const multiplesOf3and5 = (number) =>{
  const multiples = [];
  let multiSum;
  
  for (let i = 0; i < number; i++) {
    if (i%3 === 0) {
      multiples.push(i);
    }

    if (i%5 === 0) {
      if (multiples.includes(i)) {
      } else {
        multiples.push(i)
      }
    }
  }

  multiSum = multiples.reduce( (a, b) => a + b);

  console.log("multiSum ==> ", multiSum);

  return multiSum;
}

multiplesOf3and5(10);
multiplesOf3and5(49);
multiplesOf3and5(1000);
multiplesOf3and5(8456);
multiplesOf3and5(19564);

// Calculate the sum of fibonnaci even numbers
const fiboEvenSum = (n) => {
  const fiboSeq = fibonacciSequence(n);
  console.log("fiboSeq ==> ", fiboSeq);
  let evenSum = 0;

  fiboSeq.forEach((el) => {
    if (el % 2 === 0) {
      evenSum = evenSum + el;
    }
  });

  console.log("evenSum ==> ", evenSum);
  return evenSum;
};

const fibonacciSequence = (n) => {
  if (n < 1) return [0];
  if (n <= 2) return [0, 1];
  const sequence = [1, 2];
  while (sequence[sequence.length - 1] <= n) {
    const nextValue =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextValue);
  }
  return sequence.slice(0, -1);
};

fiboEvenSum(10);
fiboEvenSum(34);
fiboEvenSum(60);
fiboEvenSum(1000);
fiboEvenSum(100000);
fiboEvenSum(4000000);

// ROUNDING NUMBERS WITH 2 DECIMALS AND FORMATTING VALUES WITH SELECTED LANGUAGE
const num = 12345.6;
const decimalPlaces = 2;
const limits = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

const englishFormat = Number(num.toFixed(2)).toLocaleString('en-US', limits);
console.log(englishFormat);
console.log(typeof englishFormat);

const brazilianFormat = Number(num.toFixed(2)).toLocaleString('pt-BR', limits);
console.log(brazilianFormat);
console.log(typeof brazilianFormat);