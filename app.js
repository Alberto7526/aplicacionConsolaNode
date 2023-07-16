const { number, boolean } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();


//console.log('Esta es la base ingresada: ', argv.base)
//console.log('El valor ingresado para listar es: ', argv.l)
const base = argv.base;
const listar = argv.listar;

crearArchivo(base, listar)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado con exito'))
    .catch(err => console.log(err));