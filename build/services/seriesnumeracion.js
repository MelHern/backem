"use strict";
const conectarBD = require('./conexion');
class seriesnumeracion {
    constructor() {
    }
    static mensaje() {
        conectarBD.conectar();
        return this.hola;
    }
}
seriesnumeracion.hola = "fdfdfdf";
module.exports = seriesnumeracion;
