// argumentos de entrada
// node process.js carlos uuuh x

console.log(process.argv)
/* [
  '/Users/carlos/Library/Application Support/fnm/node-versions/v20.11.0/installation/bin/node',
  '/Users/carlos/Documents/Proyectos/Full Stack Curso/Node/mjs/process.js',
  'carlos',
  'uuuh',
  'x'
] */

// controlar el proceso y su salida
// 0 es que todo a salido bien
// 1 es que algo a salido mal y queremos que salga del proceso
process.exit(0)

// podemos controlar eventos del proceso
process.on('exit', () => {
    // limpiar los recursos
})

// current working directory, nos dice desde que carpeta estamos ejecutando el proceso
console.log(process.cwd())

// variable global
// platform
console.log(process.env.PEPITO)
// terminal PEPITO=hola node process.js
// muestra hola