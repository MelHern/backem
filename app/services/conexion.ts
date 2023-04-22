var mysql = require('mysql');



class conectarBD{


  
    

    constructor(){

     
    }





 static conectar(){

    try{
    var connection = mysql.createConnection({
        host:'194.5.156.22',
        user:'u743076940_apiemp',
        password:'APIemp007896',
        database:'u743076940_apiemp'
      });

       
    connection.connect();
    return connection;

    }
    catch(e){
        return e;
    }

}
}
module.exports = conectarBD
