const { readFile } = require("node:fs/promises");

(
    //IIFE -> Imnmediatly Invoked Function Expression
    async()=>{
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
    }
)()