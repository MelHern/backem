var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const conectarBD = require('../services/conexion');
require("dotenv").config();
const bcrypt = require('bcrypt');
var verificatoken = require('../middlewares/verificaToken')
var roles = require('../services/rolesServices')


router.post('/getRoles',verificatoken, async (req, res) => {

  const con= conectarBD.conectar();


  const email=req.query.email;

  const password = await bcrypt.hashSync(req.query.password, 10);

  
 
  let query=`INSERT INTO roles (email, rol, password) VALUES (?,?,?)`;
  
  con.query(query,[email,"normal",password], async function (err, result, fields) {


    console.log(result);

    res.header().json({
      'error': null,
      'data': 'ok',
      'result':result
    })
  })



})




router.post('/delete/:id',verificatoken, async (req, res) => {

rol=new roles();

rol.deleteRol(req.params.id,(retorno)=>{

  res(retorno);
})
  

});

router.post('/update/:id',verificatoken, async (req, res) => {

  rol=new roles();
  
  rol.editaRol(req.params.id,req.body.nombre,(retorno)=>{
  
    res.json(retorno);
  })
})

  router.post('/create', async (req, res) => {

    rol=new roles();

    rol.creaRol(req.body.nombre,(retorno)=>{
    
      res.json(retorno);
    })
    
  
  });
  



  



module.exports = router;
