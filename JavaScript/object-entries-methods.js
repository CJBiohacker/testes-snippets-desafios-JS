const object = {
    telefone_1: "962759321",
    telefone_2: 962754696,
    email: 'abcd@gmail.com',
    cnpj: null,
};

let formattedObject;

const hideableColumns = [
    {
      telefone_2: 'telefone_1',
      iconVisibility: "$eye_cancel"
    },
    {
      telefone_2: 'telefone_2',
      iconVisibility: "$eye_cancel"
    },
    {
      email: 'email',
      iconVisibility: "$eye_cancel"
    }
  ];

let columnValueArray = [];

const entriesIteration = Object.entries(object);
console.log("entriesIteration ==> ", entriesIteration);
/*
[
    [ 'telefone_1', '962759321' ],
    [ 'telefone_2', 962754696 ],
    [ 'email', 'abcd@gmail.com' ]
  ]
*/

// {
//     telefone_1: "9627*****",
//     telefone_2: 9627*****,
//     email: 'abcd********',
//     telefone_1_orig: "962759321",
//     telefone_2_orig: "962754696",
//     email: 'abcd@gmail.com',
// };
const changeIconStatus = (nome) => {
  columnValueArray = [];
  let id;
  if (nome === 'telefone_1') id = 0;
  if (nome === 'telefone_2') id = 1;
  if (nome === 'email') id = 2;

  resetedCurrentCompany = resetedCurrentCompany.map((el) => {    
    console.log("changeIconStatus ~ element ==> ", el);
    if (hideableColumns[id].iconVisibility === "$eye_cancel") {
      // if ([null, undefined, false].includes(el[column.value])) el[column.value] = "";
      el[`${nome}_orig`] = el[nome];
      for (let i = 0; i < el[nome].length; i++) {
        if (i < 4) {
          columnValueArray.push(el[nome][i]);
        } else {
          columnValueArray.push(FormatHelper.asteriskReplacement(el[nome][i], /(\w|\W)/g))
        }
      }
      el[nome] = columnValueArray.join("").toString();
      columnValueArray = [];
    } else {
      if (el[`${nome}_orig`]) {
        el[nome] = el[`${nome}_orig`];
      }
    }
    return el;
  });

  if (hideableColumns[id].iconVisibility === "$eye_cancel") {
    hideableColumns[id].iconVisibility = "$remove_red_eye_rounded";
  } else {
    hideableColumns[id].iconVisibility = "$eye_cancel";
  }
};

changeIconStatus(hideableColumns[0].telefone_2);