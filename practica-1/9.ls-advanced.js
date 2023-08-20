const fs = require('node:fs/promises');
const path = require('node:path');
const picocolors = require('picocolors');

const folder = process.argv[2] ?? '.'

async function ls (folder){
    let files
    try {
        files = await fs.readdir(folder)
    } catch {
        console.error(picocolors.bgRed(`No se puedo leer el directorio ${folder}`))
        process.exit(1)
    }

    const filesPromises = files.map(async files => {
        const filePath = path.join(folder, files)
        let stats
        try{
            stats = await fs.stat(filePath)// status - informacion del archivo
        }
        catch{
            console.error(picocolors.red(`No se puedo leer el archibo ${filePath}`))
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString()

        return `${fileType} ${files.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`
    })

    const fileInfo = await Promise.all(filesPromises)

    fileInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)