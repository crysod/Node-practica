const fs = require("node:fs/promises");

console.log('Leyendo el primer archivo')

fs.readFile('./archivo.txt', 'utf8')
    .then(text =>{
        console.log('Primer Texto',text)
    })

console.log('Haciendo cosas intermedias')
console.log('Leyendo el segundo archivo')

fs.readFile('./archivo2.txt', 'utf8')
    .then(text =>{
        console.log(text)
    })
