import fs from "node:fs"

const stats = fs.statSync("./archivo.txt")

console.log(
    stats.isFile(), //si es un fichero
    stats.isDirectory(), //si es un directorio
    stats.isSymbolicLink(), //si es un enlace sibolico
    stats.size, //tamaño en bytes
)