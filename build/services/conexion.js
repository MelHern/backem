"use strict";
var mysql = require('mysql');
class conectarBD {
    constructor(connection) {
        this.prueba = "prueba";
        this.connection = connection;
    }
    conectar() {
        try {
            this.connection = mysql.createConnection({
                host: '194.5.156.22',
                user: 'u743076940_apiemp',
                password: 'APIemp007896',
                database: 'u743076940_apiemp'
            });
            this.connection.connect();
            return this.connection;
        }
        catch (e) {
            return e;
        }
    }
    desconectar() {
        this.connection.end();
    }
}
module.exports = conectarBD;
