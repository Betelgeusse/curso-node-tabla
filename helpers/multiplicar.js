const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, listar, hasta) => {

    try {
        return new Promise((resolve, reject) => {
            let salida = '', consola='';

            for (let i = 1; i <= hasta; i++){
                salida += colors.green(`${base}`) + ` x ` + colors.red(`${i}`)+ ` = ${i*base}\n`;
                consola += `${base} x  ${i} = ${i*base}\n`;
            }
                

            if( listar ){
                console.log('================'.rainbow);
                console.log(`Tabla del ` + colors.green(`${base}`));
                console.log('================'.rainbow);
                console.log(salida);
            }

            fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);

            resolve(`tabla-${base}.txt`);
        });
    } catch (error) {
        console.log(error);
    }



}

module.exports = {
    crearArchivo: crearArchivo
}