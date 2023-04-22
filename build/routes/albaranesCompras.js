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
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const conectarBD = require('../services/conexion');
require("dotenv").config();
const bcrypt = require('bcrypt');
var verificatoken = require('../middlewares/verificaToken');
var albaranes = require('../services/albaranCompraServices');
router.post('/pasarAfacturaAlbaranCompra', verificatoken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let albaran = new albaranes();
    albaran.pasarAfacturaAlbaranCompra(req.body.nombre, (retorno) => {
        res.json(retorno);
    });
}));
router.post('/editaAlbaranCompra', verificatoken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let albaran = new albaranes();
    albaran.pasarAfacturaAlbaranCompra(req.body.nombre, (retorno) => {
        res.json(retorno);
    });
}));
router.post('/cancelaAlbaranCompra', verificatoken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let albaran = new albaranes();
    albaran.pasarAfacturaAlbaranCompra(req.body.nombre, (retorno) => {
        res.json(retorno);
    });
}));
router.post('/creaAlbaranCompra', verificatoken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let albaran = new albaranes();
    albaran.pasarAfacturaAlbaranCompra(req.body.nombre, (retorno) => {
        res.json(retorno);
    });
}));
router.post('/getAlbaranesCompras', verificatoken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let albaran = new albaranes();
    albaran.pasarAfacturaAlbaranCompra(req.body.nombre, (retorno) => {
        res.json(retorno);
    });
}));
module.exports = router;
