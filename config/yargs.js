const argv = require('yargs')
    .options('b',{
            alias:'base',
            type:'number',
            demandOption: true
        })
    .options('l',{
        alias:'listar',
        type:'boolean',
        demandOption:false,
        default: false
    })
    .check((argv, options)=>{
        if (isNaN(argv.b)){
            throw 'La base debe ser un numero'
        }
        return true
      })    
    .argv;

module.exports = argv;