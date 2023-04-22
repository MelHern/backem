"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const conectarBD = require('../services/conexion');
require("dotenv").config();
const bcrypt = require('bcrypt');
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const con = conectarBD.conectar();
    const email = req.query.email;
    const password = yield bcrypt.hashSync(req.query.password, 10);
    let query = `INSERT INTO usuarios (email, rol, password) VALUES (?,?,?)`;
    con.query(query, [email, 1, password], function (err, result, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(result);
            res.header().json({
                'error': null,
                'data': 'ok',
                'result': result
            });
        });
    });
}));
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // validaciones
    const con = conectarBD.conectar();
    let email = req.query.email;
    let query = "SELECT * FROM usuarios where email=?";
    con.query(query, [email], function (err, result, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            const validPassword = yield bcrypt.compare(req.query.password, result[0].password);
            console.log(validPassword);
            const token = jwt.sign({
                name: result[0].email,
                id: result[0].id
            }, process.env.TOKEN_SECRET);
            res.header('auth-token', token).json({
                'error': null,
                'data': token,
                'rol': result[0].rol
            });
        });
    });
}));
// create token
module.exports = router;
