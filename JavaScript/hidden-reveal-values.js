
const formatPhone = (value) => {
    return value.replace(/(\d)(\d{4})$/, "$1-$2");
};

const formatEmail = (value) => {
    return value.toLowerCase();
}

const asteriskReplacement = (char, regexp) => {
    return char.replace(regexp, "*");
};

const getHiddenValue = (rawValue, keyname) => {
    const columnValueArray = [];
    const ddd_1 = '21';
    const ddd_2 = '11';
    let hiddenValue;
    if ([null, undefined, false].includes(rawValue)) rawValue = "";
    if (typeof rawValue === "number") rawValue = rawValue.toString();
    if (["telefone_1", "telefone_2"].includes(keyname))
      rawValue = formatPhone(rawValue);

    for (let i = 0; i < rawValue.length; i++) {
      if (i < 4) {
        columnValueArray.push(rawValue[i]);
      } else {
        columnValueArray.push(
          asteriskReplacement(rawValue[i], /(\w|\W)/g)
        );
      }
    }
    const arraytoString = columnValueArray.join("").toString();

    if (keyname === "telefone_1")
      hiddenValue = `(${ddd_1}) ${arraytoString}`;
    if (keyname === "telefone_2")
      hiddenValue = `(${ddd_2}) ${arraytoString}`;
    if (keyname === "email") hiddenValue = formatEmail(arraytoString);

    return hiddenValue;
  };

  console.log(getHiddenValue(26872086, 'telefone_1'));
  console.log(getHiddenValue("cj@gmail.com", 'email'));
  console.log(getHiddenValue("snipermonkey@gmail.com", 'email'));
  console.log(getHiddenValue("967294581", 'telefone_2'));
  console.log(getHiddenValue("GORILLASAPPER@gmail.com", 'email'));
  

/* -------- HIDDEN/REAVEAL VUEX OBJECT BASE STRUCTURE --------*/
  const contactData = [
    {
      keyName: "telefone_1",
      rawValue: `(${this.currentCompany.ddd_1}) ${FormatHelper.formatPhone(
        this.currentCompany.telefone_1
      )}`,
      hiddenvalue: this.getHiddenValue(
        this.currentCompany.telefone_1,
        "telefone_1"
      ),
      showIcon: "$remove_red_eye_rounded",
      hideIcon: "$eye_cancel",
      shouldHideValue: true,
    },
    {
      keyName: "telefone_2",
      rawValue: `(${this.currentCompany.ddd_2}) ${FormatHelper.formatPhone(
        this.currentCompany.telefone_2
      )}`,
      hiddenvalue: this.getHiddenValue(
        this.currentCompany.telefone_2,
        "telefone_2"
      ),
      showIcon: "$remove_red_eye_rounded",
      hideIcon: "$eye_cancel",
      shouldHideValue: true,
    },
    {
      keyName: "email",
      rawValue: this.currentCompany.email,
      hiddenvalue: this.getHiddenValue(this.currentCompany.email, "email"),
      showIcon: "$remove_red_eye_rounded",
      hideIcon: "$eye_cancel",
      shouldHideValue: true,
    },
  ];
/* -------------------------------------------------------------- */

