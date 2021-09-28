const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Hasta dónde llegará la tabla'
    })
    .check((argv, options) => {
        console.log('Checking');
        if (isNaN(argv.b)) {
            throw 'Base must be a number'
        }
        if (!(typeof argv.l === 'boolean')) {
            throw 'Show list must be boolean.'
        }
        if(isNaN(argv.h)){
            throw 'Hasta must be a number'
        }
        return true;
    })
    .argv;

module.exports = argv;