const array = [1,2,3,4,5];

const nullishTest = (arr) => {  // Never returns null or undefined, always priorize false or true values over it.
    console.log("NULLISH TEST ==> ", false ?? arr[42]);
}

const orOperatorTest = (arr) => {
    console.log("OR TEST ==> ", false || arr[42]);
}

const optChaintest = (arr) => {
    console.log("OPTIONAL CHAINING TEST ==> ", arr?.[42]);
}

const designatedError = (arr) => {
    console.log("ERROR TEST ==> ", arr[42]);
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

console.log([] == false);
console.log([] === false);
console.log([] === undefined);
console.log([] === null);


// Empty array boolean validation. 
let bodyTags = [];

let tags = !bodyTags[0] ? null : tags;

console.log(tags)

bodyTags.push("#MACACO");

let newTags = !bodyTags[0] ? null : bodyTags;

console.log(newTags);

const object = {
    a: "Abc",
    b: "Donetsk"
};

const validation = object && object.a ? true : false;
const validation2 = object?.a ? true : false;
const validation3 = object?.c?.a ? true : false;
const validation4 = object.a ?? "NÃO EXISTE ESSE OBJETO";
const validation5 = object.c ?? "NÃO EXISTE ESSE OBJETO";

if (object?.c?.a || object?.c?.d) {
    console.log("OPTIONAL CHAINNING TRUE ");
}
console.log("validation ==> ", validation);
console.log("validation2 ==> ", validation2);
console.log("validation3 ==> ", validation3);
console.log("validation4 ==> ", validation4);
console.log("validation5 ==> ", validation5);

