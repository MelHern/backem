var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const conectarBD = require('../services/conexion');
require("dotenv").config();
const bcrypt = require('bcrypt');
var verificatoken = require('../middlewares/verificaToken')
//var facturas = require('../services/facturasComprasService')
var pdf = require('html-pdf');


router.post('/cambiaEstadoFacturaVenta',verificatoken, async (req:any, res:any) => {

  //let factura=new facturas();

 // factura.cambiaEstadoFacturaVenta(req.body.nombre,(retorno:any)=>{
  
   // res.json(retorno);
//  })

});
  
router.get('/imprimeFacturaVenta', async (req:any, res:any) => {



  // let fac = new facturas();
  // fac.imprimir(1,(retorno:any)=>{
    let cosas="ddd";
    var options = {
      "format": 'A4',
      "header": {
          "height": "60px"
      },
      "footer": {
          "height": "22mm"
      },
      "base": 'file://Users/midesweb/carpeta_base/'
     };
    let cabecera=`<div id="pageHeader" style="border-bottom: 1px solid #ddd; padding-bottom: 5px;">
    <img src="http://desarrolloweb.com/images/logodwgris.png" alt="imagen "width="150" height="27" align="left">
    <p style="color: #666; margin: 0; padding-top: 12px; padding-bottom: 5px; text-align: right; font-family: sans-serif; font-size: .85em">
      Publicar en Internet
    </p>
  </div>`;
  
  let contenido=`<h1>${cosas}</h1>`;
  
  let footer=`<div id="pageFooter" style="border-top: 1px solid #ddd; padding-top: 5px;">
  <p style="color: #666; width: 70%; margin: 0; padding-bottom: 5px; text-align: let; font-family: sans-serif; font-size: .65em; float: left;">http://desarrolloweb.com/manuales/publicar-webs-internet.html</p>
  <p style="color: #666; margin: 0; padding-bottom: 5px; text-align: right; font-family: sans-serif; font-size: .65em">Página {{page}} de {{pages}}</p>
  </div>`;
  
  let final=cabecera + contenido + footer;
  
  pdf.create(final,options).toFile(`./factura.pdf`, function(err:any, res:any) {
    if (err){
        console.log(err);
    } else {
        console.log(res);
    }
  });
     res.download('factura.pdf');
   //});
 

  
  });




module.exports = router;
