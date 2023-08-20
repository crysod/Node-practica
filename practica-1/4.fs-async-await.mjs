import { readFile } from "node:fs/promises";

console.log('Leyendo el primer archivo')

//readFile('./archivo.txt', 'utf8')
const text = await readFile('./archivo.txt', 'utf8')
console.log('Primer Texto',text)

console.log('---------------------------------------')
console.log('Haciendo cosas intermedias')
console.log('---------------------------------------')

console.log('Leyendo el segundo archivo')

const segundoText = await readFile('./archivo2.txt', 'utf8')
console.log('Segundo texto: ', segundoText)

//En MJS puedes utilizar "await" por que es soportado por los modulos