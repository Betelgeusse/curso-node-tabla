const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');
const colors = require('colors');

// console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log((nombreArchivo + ' creado').bold))
    .catch( error => console.log(error));






















// fs.writeFile( `tabla-${base}.txt`, salida, (error)=>{
//     if(error) throw error;

//     console.log(`Tabla del ${base}.txt creada`);
// });