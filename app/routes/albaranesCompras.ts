import { Request, Response } from "express";

var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const conectarBD = require('../services/conexion');
require("dotenv").config();
const bcrypt = require('bcrypt');
var verificatoken = require('../middlewares/verificaToken')
var albaranes = require('../services/albaranCompraServices')




router.post('/pasarAfacturaAlbaranCompra',verificatoken, async (req:Request, res:Response) => {

  let albaran=new albaranes();

  albaran.pasarAfacturaAlbaranCompra(req.body.nombre,(retorno:any)=>{
  
    res.json(retorno);
  })

});
  
router.post('/editaAlbaranCompra',verificatoken, async (req:Request, res:Response) => {
  let albaran=new albaranes();

  albaran.pasarAfacturaAlbaranCompra(req.body.nombre,(retorno:any)=>{
  
    res.json(retorno);
  })



});

router.post('/cancelaAlbaranCompra',verificatoken, async (req:Request, res:Response) => {
  let albaran=new albaranes();

  albaran.pasarAfacturaAlbaranCompra(req.body.nombre,(retorno:any)=>{
  
    res.json(retorno);
  })



});


router.post('/creaAlbaranCompra',verificatoken, async (req:Request, res:Response) => {
  let albaran=new albaranes();

  albaran.pasarAfacturaAlbaranCompra(req.body.nombre,(retorno:any)=>{
  
    res.json(retorno);
  })



});

router.post('/getAlbaranesCompras',verificatoken, async (req:Request, res:Response) => {
  let albaran=new albaranes();

  albaran.pasarAfacturaAlbaranCompra(req.body.nombre,(retorno:any)=>{
  
    res.json(retorno);
  })



});



module.exports = router;
