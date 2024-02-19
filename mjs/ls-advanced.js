import fs from 'fs/promises'
import path from 'path'

const folder = process.argv[2] ?? '.'

fs.readdir(folder)
    .then(files => {
        files.forEach(file => {
            console.log(file)
        });
    })
    .catch(err => {
        if (err) {
            console.log('Error la leer el directorio:', err)
            return
        }
    })


async function ls(folder) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch (error) {
        console.error(`No se pudo leer el directorio ${folder}`)
        process.exit(1)
    }

    const filePromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stats
        try {
            stats = await fs.stat(filePath) // status - información del archivo
        } catch (error) {
            onsole.error(`No se pudo leer el directorio ${filePath}`)
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : '-'
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString()

        return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`
    })

    const filesInfo = await Promise.all(filePromises)
    filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)