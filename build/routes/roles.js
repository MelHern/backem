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
var verificatoken = require('../middlewares/verificaToken');
var roles = require('../services/rolesServices');
router.post('/getRoles', verificatoken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const con = conectarBD.conectar();
    const email = req.query.email;
    const password = yield bcrypt.hashSync(req.query.password, 10);
    let query = `INSERT INTO roles (email, rol, password) VALUES (?,?,?)`;
    con.query(query, [email, "normal", password], function (err, result, fields) {
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
router.post('/delete/:id', verificatoken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    rol = new roles();
    rol.deleteRol(req.params.id, (retorno) => {
        res(retorno);
    });
}));
router.post('/update/:id', verificatoken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    rol = new roles();
    rol.editaRol(req.params.id, req.body.nombre, (retorno) => {
        res.json(retorno);
    });
}));
router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    rol = new roles();
    rol.creaRol(req.body.nombre, (retorno) => {
        res.json(retorno);
    });
}));
module.exports = router;
