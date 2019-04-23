//requireds
// import { writeFile } from 'fs';
// import fs from 'fs';
const fs = require('fs');
const colors = require('colors');

// import { writeFile } from 'fs';
// console.log(`llegue con la base ${ base }`);

let listarTabla = (base, limite = 10) => {

    console.log('=========================='.green);
    console.log(`====tabla de ${ base }====`.green);
    console.log('=========================='.green);
    for (i = 1; i <= limite; i++) {
        console.log(`${ base } *  ${ i }   =  ${ base * i }`);
    }


}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }
        let data = '';

        for (i = 1; i <= limite; i++) {
            data += `${ base } *  ${ i }   =  ${ base * i }\n`;
        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));

        fs.writeFile(`tablas/tabla-${ base }-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al- ${limite}. txt`);
        });

    });

}

// export default {
//     crearArchivo
// }

module.exports = {
    crearArchivo,
    listarTabla
}