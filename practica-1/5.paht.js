const path = require('node:path')

//Barra separadora de carpetas segun S.O
console.log(path.sep) // \

//unir rutas con paht.join
const filePath = path.join('desarrollo', 'youtube', 'midulive', 'NODE-PRACTICA', 'os')
console.log(filePath)

//extraer nombre y estencion de fichero
const base = path.basename('NODE-PRACTICA/os/1.os-info.js')
console.log(base)

//Extraer nombre de un fichero
const filename = path.basename('NODE-PRACTICA/os/1.os.info.js', '.js')
console.log(filename)

//extraer extension de un archivo
const extension = path.extname('NODE-PRACTICA/os/1.os.info.js')
console.log(extension)