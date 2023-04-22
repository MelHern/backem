var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const conectarBD = require('../services/conexion');
require("dotenv").config();
const bcrypt = require('bcrypt');
var verificatoken = require('../middlewares/verificaToken')
var albaranes = require('../services/albaranCompraServices')
const fs = require('fs');



router.post('/pasarAfacturaAlbaranVenta',verificatoken, async (req:any, res:any) => {

  let albaran=new albaranes();

  albaran.pasarAfacturaAlbaranVenta(req.body.nombre,(retorno:any)=>{
  
    res.json(retorno);
  })

});
  
router.post('/editaAlbaranCompra',verificatoken, async (req:any, res:any) => {
  let albaran=new albaranes();

  albaran.pasarAfacturaAlbaranVenta(req.body.nombre,(retorno:any)=>{
  
    res.json(retorno);
  })



});

router.post('/cancelaAlbaranVenta',verificatoken, async (req:any, res:any) => {
  let albaran=new albaranes();

  albaran.pasarAfacturaAlbaranCompra(req.body.nombre,(retorno:any)=>{
  
    res.json(retorno);
  })



});


router.post('/creaAlbaranVenta',verificatoken, async (req:any, res:any) => {
  let albaran=new albaranes();

  albaran.pasarAfacturaAlbaranVenta(req.body.nombre,(retorno:any)=>{
  
    res.json(retorno);
  })



});

router.post('/getAlbaranesVentas',verificatoken, async (req:any, res:any) => {
  let albaran=new albaranes();

  albaran.pasarAfacturaAlbaranVenta(req.body.nombre,(retorno:any)=>{
  
    res.json(retorno);
  })



});



module.exports = router;
