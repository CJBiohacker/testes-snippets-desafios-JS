function trimDescription(description, maxLength) {
  if (description.length <= maxLength) {
    return description;
  } else {
    return description.substring(0, maxLength) + "...";
  }
}

const longDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices diam nec nunc eleifend, ac fermentum augue faucibus. Sed pulvinar purus non eros bibendum, in blandit elit sollicitudin. Proin iaculis tempus tellus, et finibus dolor pulvinar a. Quisque euismod augue eu eleifend mattis. Suspendisse potenti. In lacinia quam ut elementum aliquet. Nullam et magna vel enim tempus euismod. Aenean aliquet, ex eget malesuada eleifend, risus odio congue tortor, a laoreet metus justo in neque. Nulla facilisi. Suspendisse sed nulla vitae velit euismod gravida eu at lectus. Integer sit amet nisl et mauris lacinia rhoncus.";

const trimmedDescription = trimDescription(longDescription, 150);
console.log(trimmedDescription);


const number1 = 325460;
const number2 = 0.12458;
const number3 = 15.235;
const number4 = 5759;
const number5 = 5469.759;
const number6 = 125460;
const number7 = 0.12458;
const number8 = 15.235;
const number9 = 1759;
const number0 = 1.759;

const replaceAllNotFirst = num => {
  const [integerPart, decimalPart = ""] = num.toString().split(".");
  
  if (decimalPart.length > 0) {
    const [firstDigit, ...remainingDigits] = decimalPart;
    const formattedDecimalPart = firstDigit + remainingDigits.join("");
    return parseFloat(`${integerPart}.${formattedDecimalPart}`);
  }
  
  return parseFloat(integerPart).toString();
};

console.log("\nreplaceAllNotFirst number 1 ==> ", replaceAllNotFirst(number1) );
console.log("replaceAllNotFirst number 2 ==> ", replaceAllNotFirst(number2) );
console.log("replaceAllNotFirst number 3 ==> ", replaceAllNotFirst(number3) );
console.log("replaceAllNotFirst number 4 ==> ", replaceAllNotFirst(number4) );
console.log("replaceAllNotFirst number 5 ==> ", replaceAllNotFirst(number5) );

console.log("\nreplaceAllNotFirst number 6 ==> ", replaceAllNotFirst(number6) );
console.log("replaceAllNotFirst number 7 ==> ", replaceAllNotFirst(number7) );
console.log("replaceAllNotFirst number 8 ==> ", replaceAllNotFirst(number8) );
console.log("replaceAllNotFirst number 9 ==> ", replaceAllNotFirst(number9) );
console.log("replaceAllNotFirst number 0 ==> ", replaceAllNotFirst(number0) );
