var mysql = require('mysql');



class conectarBD{


 connection

 prueba="prueba"

    constructor(connection:any){

     this.connection=connection
    }





  conectar(){

   
    try{
   
        this.connection = mysql.createConnection({
            host:'194.5.156.22',
            user:'u743076940_apiemp',
            password:'APIemp007896',
            database:'u743076940_apiemp'
        });

        
        this.connection.connect();
        return this.connection;

        
    }
        catch(e){
            return e;
        }

}

 desconectar(){
   this.connection.end();
}


//      handleDisconnect() {
//         this.connection = mysql.createConnection({ host:'194.5.156.22',
//         user:'u743076940_apiemp',
//         password:'APIemp007896',
//         database:'u743076940_apiemp'}); 
                                                    
  
//         this.connection.connect(function(err) {              
//         if(err) {                                     
//         console.log('error when connecting to db:', err);
//         setTimeout(this.handleDisconnect(), 2000); 
//       }                                     
//     });  
    
    
//     this.connection.on('error', function(err) {
//         console.log('db error', err);
//         if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//           this.handleDisconnect();                         // lost due to either server restart, or a
//         } else {                                      // connnection idle timeout (the wait_timeout
//           throw err;                                  // server variable configures this)
//         }
//       });
// }
}
module.exports = conectarBD
