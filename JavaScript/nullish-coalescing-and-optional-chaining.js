const array = [1,2,3,4,5];

const nullishTest = (arr) => {  // Never returns null or undefined, always priorize false or true values over it.
    console.log("NULLISH TEST ==> ", false ?? arr[42]);
}

const orOperatorTest = (arr) => {
    console.log("OR TEST ==> ", false || arr[42]);
}

const optChaintest = (arr) => {
    console.log(arr?.[42]);
}

const designatedError = (arr) => {
    console.log(arr[42]);
}


nullishTest(array);
orOperatorTest(array);
optChaintest(array);
optChaintest(); // Won't throw error even without passing function param.
// designatedError(); // Throws an Error


const mapChangeDetailsAvailableStates = [
    {
        label: "UF",
        value: "shapes-uf"
    },
    {
        label: "Município",
        value: "shapes-municipality"
    },
    {
        label: "Bairro",
        value: "shapes-neighborhood"
    },
    {
        label: "Setor censitário",
        value: "shapes-sector"
    }
];