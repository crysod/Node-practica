const fs = require("node:fs");

console.log('Leyendo el primer archivo')
const text =fs.readFileSync('./archivo.txt', 'utf8');

console.log(text)

console.log('Leyendo el segundo archivo')
const secondText =fs.readFileSync('./archivo2.txt', 'utf8');

console.log(secondText)