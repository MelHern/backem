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




  const email=req.query.email;

  const password = await bcrypt.hashSync(req.query.password, 10);

  
 
  let query=`INSERT INTO usuarios (email, rol, password) VALUES (?,?,?)`;

  let conexion=new conectarBD();
  
  conexion.conectar().query(query,[email,1,password], async function (err:any, result:any, fields:any) {


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
try {
  

  let email=req.body.email;
  let password= req.body.password;

  console.log(email,password);
 
  let query="SELECT * FROM usuarios where email=?";

  let conexion=new conectarBD();
  conexion.conectar().query(query,[email], async function (err:any, result:any, fields:any) {
  
 
    const validPassword = await bcrypt.compare(password, result[0].password);

    if(validPassword){
    const token = jwt.sign({
      name: result[0].email,
      id: result[0].id
  }, process.env.TOKEN_SECRET)
 

  res.header('auth-token', token).json({
    'error': null,
    'data': token,
    'rol':result[0].rol
  })
}
else{
  res.json('error');
}


  });
  conexion.desconectar();
} catch (error) {
  res.json(error);
}

});


  



module.exports = router;
