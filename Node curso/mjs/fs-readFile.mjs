import fs, { readFileSync } from "node:fs"

//readFileSync forma sincrona
//readFIle forma asincrona

console.log("Leyendo el primer archivo ...")
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
    console.log("Primer texto: ", text)
})



console.log("Leyendo el segundo archivo ...")
const text2 = fs.readFileSync("./archivo2.txt", "utf-8")

console.log("Segundo texto: ", text2)
