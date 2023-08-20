const fs = require("node:fs");

console.log('Leyendo el primer archivo')

fs.readFile('./archivo.txt', 'utf8',(err, text) => { // <-- Ejecuta este callback
    console.log(text)
})


console.log('Leyendo el segundo archivo')

fs.readFile('./archivo2.txt', 'utf8', (err, secondText) => {
    console.log(secondText)
})
