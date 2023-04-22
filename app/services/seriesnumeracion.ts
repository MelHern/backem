
const conectarBD = require('./conexion')
 class seriesnumeracion{

    static  hola="fdfdfdf"
 
     constructor(){
        
    
    }

    static mensaje(){
        conectarBD.conectar()
        return this.hola
    }

     

}
module.exports =  seriesnumeracion