var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const conectarBD = require('../services/conexion');
require("dotenv").config();
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function(req:any, res:any, next:any) {
  res.send('respond with a resource');
});

router.post('/register', async (req:any, res:any) => {

  const con= conectarBD.conectar();


  const email=req.query.email;

  const password = await bcrypt.hashSync(req.query.password, 10);

  
 
  let query=`INSERT INTO usuarios (email, rol, password) VALUES (?,?,?)`;
  
  con.query(query,[email,1,password], async function (err:any, result:any, fields:any) {


    console.log(result);

    res.header().json({
      'error': null,
      'data': 'ok',
      'result':result
    })
  })



})

router.post('/login', async (req:any, res:any) => {
  // validaciones
  const con= conectarBD.conectar();


  let email=req.query.email;
 
  let query="SELECT * FROM usuarios where email=?";
  con.query(query,[email], async function (err:any, result:any, fields:any) {
  
    const validPassword = await bcrypt.compare(req.query.password, result[0].password);

    console.log(validPassword);
    const token = jwt.sign({
      name: result[0].email,
      id: result[0].id
  }, process.env.TOKEN_SECRET)

  res.header('auth-token', token).json({
    'error': null,
    'data': token,
    'rol':result[0].rol
  })
    
  });

});
  
  // create token

  



module.exports = router;
