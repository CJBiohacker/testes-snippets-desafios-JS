import { readFile } from 'fs';
import xlsx from 'xlsx';

readFile("JavaScript/test.txt", "utf-8", (error, data) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log("Dados ==> ", data);
})

xlsx.readFile('JavaScript/cnpjfiltronovo.csv', )