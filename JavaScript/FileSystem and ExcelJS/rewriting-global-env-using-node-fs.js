/* 
IF YOU CLONED THIS REPOSITORY, IN YOUR FOLDER WON'T EXIST .ENV FILE 
BECAUSE OF GITIGNORE STANDART CONFIGURATION. SO BEFORE EXECUTING THIS 
CODE, FIRST YOU NEED TO CREATE A NEW FILE NAMED '.ENV' IN REPOSITORY ROOT
(OUTSIDE 'JavaScript' FOLDER).
 */
import { getRandomIntNumber } from "../math-algoritms.js";
import fs from "fs";

const enemies = ["Rick Sanchez", "Meeseeks", "Reggie ", "Mr. Nimbus", "Phoenixperson", "Evil Morty"];
const index = getRandomIntNumber(0, (enemies.length - 1) );
const chosenEnemy = enemies[index];
console.log("index ==> ", index);
console.log("The enemy is ==> ", chosenEnemy);
const envContent = fs.readFileSync(".env", "utf-8");
const newEnvContent = envContent.replace(
    /ENEMY=.*/,
    `ENEMY='${chosenEnemy}'`
);
fs.writeFileSync(".env", newEnvContent);