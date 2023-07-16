const fs = require('fs');
const colors = require('colors')

const crearArchivo = async (base = 1, listar) => {
    /*
    Esta función permite crear un archivo txt donde se guarda la tabla de multiplicar del 
    numero ingresada

    Entradas: 
        base
    Saldias:
        Archivo .txt con la tabla de multiplicar según la base
    */
   try {
    let salida = '';
    let consola = '';
    salida +=`Tabla del ${base}\n\n`
    consola +=`Tabla del ${base}\n\n`
    for (let i=1;i<=10;i=i+1){
        salida +=`${base} x ${i} = ${base*i}\n`;
        consola +=`${base} ${colors.yellow('x')} ${i} ${colors.red('=')} ${base*i}\n`;
    }
    //console.log(listar)
    
    if (listar==true){
        console.log(consola)
    }

    // Esta parte guarda el archivio 
    fs.writeFileSync(`./salida/tabla del ${base}.txt`, salida)
    return `tabla del ${base}.txt`
   }
   catch (err){
    console.log('Error todo salio mal')
    throw err;
   }
    
}

module.exports={
    crearArchivo
}