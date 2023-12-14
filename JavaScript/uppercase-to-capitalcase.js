export const uppercaseToCapitalCaseGeoLocation = (
  uppercaseString,
  isGeoLocation = false
) => {
  if (isGeoLocation) {
    return uppercaseString
      .split(" ")
      .map((word) => {
        if (["DAS", "DOS"].includes(word)) {
          return word.toLowerCase();
        }
        if (word.length === 2) {
          if (["DA", "DE", "DI", "DO", "DU"].includes(word)) {
            return word.toLowerCase();
          }
          return word.toUpperCase(); // Keep two-letter words in uppercase. (State initials. Ex.: RJ, AP, SP, ES)
        }

        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  }

  return uppercaseString
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
// Example usage:
const capitalCaseString = uppercaseToCapitalCaseGeoLocation("HELLO WORLD");
const convertion = uppercaseToCapitalCaseGeoLocation(
  "DONT KNOW WHAT TO DO !"
);
const rio = uppercaseToCapitalCaseGeoLocation(
  "RIO DE JANEIRO - ESTRADA DA POSSE",
  true
);
const campo = uppercaseToCapitalCaseGeoLocation(
  "RIO GRANDE DO SUL - CAMPO DOS GOYTACAZES - RJ - ES - DOS",
  true
);
console.log(capitalCaseString);
console.log(convertion);
console.log(rio);
console.log(campo);
