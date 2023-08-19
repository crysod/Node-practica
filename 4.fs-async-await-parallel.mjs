import { readFile } from "node:fs/promises";

Promise.all([
    readFile('./archivo.txt', 'utf8'),
    readFile('./archivo2.txt', 'utf8')
]).then(([text, secoundText]) => {
    console.log('Primer Texto',text),
    console.log('Segundo texto: ', secoundText)

})