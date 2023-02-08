const ExcelJS = require("exceljs");

async function createAndWriteWorkbook() {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Planilha Teste");
  const columns = [
    { header: "Id", key: "id", width: 20 },
    { header: "Name", key: "name", width: 32 },
  ];

  const rows = [
    { id: 1, name: "Barbara" },
    { id: 2, name: "Jena" },
    { id: 3, name: "Marla" },
    { id: 4, name: "Larissa" },
    { id: 5, name: "Maverick" },
  ];

  const columns2 = [
    { header: "Id", key: "id", width: 40 },
    { header: "Nome", key: "name", width: 18 },
    { header: "Email", key: "email", width: 26 },
    { header: "Departamento", key: "department", width: 14 },
    { header: "Último Acesso", key: "ultimo_acesso", width: 24 },
    {
      header: "Acessos (30 dias)",
      key: "qtd_acesso_trinta_dias",
      width: 16,
    },
  ];

  const rows2 = [
    {
      id: "f30a3ef0-fabd-40c3-8c8a-f87ffa23d1e8",
      email: "and.mts@gmail.com",
      ultimo_acesso: "2023-02-03 14:31 +00:00",
      qtd_acesso_trinta_dias: 17,
      name: "Andre Matias",
      status: true,
      department: "N/A",
    },
    {
      id: "f400ef61-ed59-4bdb-90bd-42b2e98674b2",
      email: "lz.marrom@gmail.com",
      ultimo_acesso: "2022-10-21 14:39 +00:00",
      qtd_acesso_trinta_dias: 0,
      name: "Larissa Marrom",
      status: true,
      department: "N/A",
    },
  ];

  worksheet.columns = columns2;
  worksheet.addRows(rows2);

  await workbook.xlsx.writeFile("planilha.xlsx");
}

// createAndWriteWorkbook();

const atrbiuteValidation = (conditional) => {
  const object = {
    atr1: "Atributo1",
    atr2: "Atributo2",
    atr3: "Atributo3",
  };

  if (conditional) {
    object.atr4 = "Atributo4";
  } 

  return object;
}

console.log(atrbiuteValidation(true));

console.log(atrbiuteValidation(false));